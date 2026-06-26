import { MATH_MATRIX, READING_MATRIX, SEL_MATRIX } from './data.js';

const STORAGE_KEY = 'a_chang_learns_state_v1';

export function getDefaultState() {
  const state = {
    levels: {
      math: 1,
      reading: 1,
      sel: 1
    },
    currentQuest: {
      mathIds: [],
      readingIds: [],
      selId: ''
    },
    history: []
  };
  
  // Populate the first quest
  generateNewQuest(state);
  return state;
}

// Helper to shuffle an array
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Selects unique questions from the pool, avoiding the last shown if possible
function selectUniqueIds(pool, count, previousIds = []) {
  // Filter out questions that were shown in the last quest
  let eligible = pool.filter(q => !previousIds.includes(q.id));
  
  // If not enough eligible questions, backfill with previously shown ones
  if (eligible.length < count) {
    const remaining = pool.filter(q => previousIds.includes(q.id));
    eligible = eligible.concat(shuffle(remaining));
  }
  
  // Shuffle the eligible list and slice the requested count
  return shuffle(eligible).slice(0, count).map(q => q.id);
}

export function generateNewQuest(state) {
  // Get last session IDs from history to avoid repeating them
  let prevMathIds = [];
  let prevReadingIds = [];
  let prevSelId = [];
  
  if (state.history && state.history.length > 0) {
    const lastLog = state.history[state.history.length - 1];
    prevMathIds = lastLog.questIds.mathIds || [];
    prevReadingIds = lastLog.questIds.readingIds || [];
    if (lastLog.questIds.selId) {
      prevSelId = [lastLog.questIds.selId];
    }
  }

  const mathPool = MATH_MATRIX[state.levels.math] || [];
  const readingPool = READING_MATRIX[state.levels.reading] || [];
  const selPool = SEL_MATRIX[state.levels.sel] || [];

  state.currentQuest = {
    mathIds: selectUniqueIds(mathPool, 5, prevMathIds),
    readingIds: selectUniqueIds(readingPool, 5, prevReadingIds),
    selId: selectUniqueIds(selPool, 1, prevSelId)[0] || ''
  };
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const state = getDefaultState();
      saveState(state);
      return state;
    }
    const state = JSON.parse(raw);
    
    // Safety checks for integrity
    if (!state.levels || !state.currentQuest || !Array.isArray(state.history)) {
      throw new Error("Invalid state structure");
    }
    
    // Backfill any missing fields
    if (!state.currentQuest.mathIds || state.currentQuest.mathIds.length === 0) {
      generateNewQuest(state);
      saveState(state);
    }
    
    return state;
  } catch (err) {
    console.error('Failed to load state from localStorage, resetting to default:', err);
    const state = getDefaultState();
    saveState(state);
    return state;
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save state to localStorage:', err);
  }
}

export function submitLog(state, scores, comment) {
  // Save current levels for history log before modification
  const originalLevels = { ...state.levels };
  const questIds = { ...state.currentQuest };

  // Update Math Level
  if (scores.math === 'mastered') {
    state.levels.math = Math.min(5, state.levels.math + 1);
  } else if (scores.math === 'struggled') {
    state.levels.math = Math.max(1, state.levels.math - 1);
  }

  // Update Reading Level
  if (scores.reading === 'mastered') {
    state.levels.reading = Math.min(5, state.levels.reading + 1);
  } else if (scores.reading === 'struggled') {
    state.levels.reading = Math.max(1, state.levels.reading - 1);
  }

  // Update SEL Level
  if (scores.sel === 'mastered') {
    state.levels.sel = Math.min(5, state.levels.sel + 1);
  } else if (scores.sel === 'struggled') {
    state.levels.sel = Math.max(1, state.levels.sel - 1);
  }

  // Add history log entry
  const logEntry = {
    timestamp: new Date().toISOString(),
    originalLevels,
    newLevels: { ...state.levels },
    scores,
    comment: comment.trim(),
    questIds
  };
  
  state.history.push(logEntry);
  
  // Generate tomorrow's quest
  generateNewQuest(state);
  
  // Save state
  saveState(state);
  return logEntry;
}

export function addMoreQuestionsToState(state, type) {
  const currentIds = type === 'math' ? state.currentQuest.mathIds : state.currentQuest.readingIds;
  const pool = type === 'math' ? MATH_MATRIX[state.levels.math] : READING_MATRIX[state.levels.reading];
  
  // Eligible questions are those not already in the current quest
  let eligible = pool.filter(q => !currentIds.includes(q.id));
  
  if (eligible.length > 0) {
    const additional = shuffle(eligible).slice(0, 5).map(q => q.id);
    if (type === 'math') {
      state.currentQuest.mathIds = [...state.currentQuest.mathIds, ...additional];
    } else {
      state.currentQuest.readingIds = [...state.currentQuest.readingIds, ...additional];
    }
    saveState(state);
    return true;
  }
  return false;
}

// Serializes the state to a Base64 sync string
export function exportStateToString(state) {
  try {
    const jsonStr = JSON.stringify(state);
    // Use encodeURIComponent to handle non-ASCII unicode safely, then convert to Base64
    const utf8Bytes = new TextEncoder().encode(jsonStr);
    let binary = "";
    for (let i = 0; i < utf8Bytes.length; i++) {
      binary += String.fromCharCode(utf8Bytes[i]);
    }
    return window.btoa(binary);
  } catch (err) {
    console.error("Export serialization failed:", err);
    return "";
  }
}

// Deserializes state from Base64 sync string
export function importStateFromString(encodedStr) {
  try {
    const trimmed = encodedStr.trim();
    if (!trimmed) throw new Error("Empty import string");
    
    const binary = window.atob(trimmed);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const jsonStr = new TextDecoder().decode(bytes);
    const parsed = JSON.parse(jsonStr);
    
    // Check key fields
    if (!parsed.levels || !parsed.currentQuest || !Array.isArray(parsed.history)) {
      throw new Error("Invalid data format");
    }
    
    saveState(parsed);
    return { success: true, state: parsed };
  } catch (err) {
    console.error("Import parsing failed:", err);
    return { success: false, error: err.message };
  }
}

// Development testing tool to run self-checks
export function runSelfTests() {
  const testState = {
    levels: { math: 3, reading: 2, sel: 4 },
    currentQuest: { mathIds: [], readingIds: [], selId: "" },
    history: []
  };
  
  // Test quest generation
  generateNewQuest(testState);
  if (testState.currentQuest.mathIds.length !== 5) return "Fail: Math quest generation size";
  if (testState.currentQuest.readingIds.length !== 5) return "Fail: Reading quest generation size";
  if (!testState.currentQuest.selId) return "Fail: SEL quest generation empty";
  
  // Test submitLog mastered
  submitLog(testState, { math: "mastered", reading: "hint", sel: "struggled" }, "Test comment");
  if (testState.levels.math !== 4) return "Fail: Math level up transition";
  if (testState.levels.reading !== 2) return "Fail: Reading level maintain transition";
  if (testState.levels.sel !== 3) return "Fail: SEL level down transition";
  if (testState.history.length !== 1) return "Fail: History logger";
  if (testState.history[0].comment !== "Test comment") return "Fail: Comment logging";
  
  // Test export / import
  const exportStr = exportStateToString(testState);
  const importResult = importStateFromString(exportStr);
  if (!importResult.success) return "Fail: Base64 data import";
  if (importResult.state.levels.math !== 4) return "Fail: Imported state level integrity";
  
  return "All system tests passed successfully!";
}
