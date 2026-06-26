import { DIFFICULTY_TIERS, MATH_MATRIX, READING_MATRIX, SEL_MATRIX } from './data.js';
import { loadState, saveState, submitLog, exportStateToString, importStateFromString, runSelfTests, generateNewQuest, addMoreQuestionsToState } from './state.js';

// Global application state instance
let appState = null;
let showMandarin = false;

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
  // Load local state
  appState = loadState();
  
  // Bind UI components
  updateHeaderLevels();
  renderQuest();
  renderProgress();
  renderHistory();

  // Wire up event listeners
  setupEventListeners();
});

// Setup DOM event listeners
function setupEventListeners() {
  // Form submission
  const logForm = document.getElementById('log-form');
  if (logForm) {
    logForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const mathScore = document.querySelector('input[name="math-score"]:checked')?.value;
      const readingScore = document.querySelector('input[name="reading-score"]:checked')?.value;
      const selScore = document.querySelector('input[name="sel-score"]:checked')?.value;
      const comment = document.getElementById('log-comment')?.value || '';

      if (!mathScore || !readingScore || !selScore) {
        alert("Please complete the grading for all three sections before submitting.");
        return;
      }

      // Process submission
      const scores = { math: mathScore, reading: readingScore, sel: selScore };
      submitLog(appState, scores, comment);
      
      // Reset form
      logForm.reset();
      
      // Update UI
      updateHeaderLevels();
      renderQuest();
      renderProgress();
      renderHistory();

      // Alert & switch tabs
      alert("Log submitted successfully! Tomorrow's quest has been generated.");
      
      // Switch back to quest tab using global helper
      if (typeof window.switchTab === 'function') {
        window.switchTab('quest');
      }
    });
  }

  // Mandarin / Pinyin toggle button
  const pinyinBtn = document.getElementById('toggle-pinyin-btn');
  if (pinyinBtn) {
    pinyinBtn.addEventListener('click', () => {
      showMandarin = !showMandarin;
      // Toggle active visual states on button
      if (showMandarin) {
        pinyinBtn.classList.remove('text-brandPrimary', 'border-brandPrimary/30');
        pinyinBtn.classList.add('bg-brandPrimary', 'text-white');
      } else {
        pinyinBtn.classList.remove('bg-brandPrimary', 'text-white');
        pinyinBtn.classList.add('text-brandPrimary', 'border-brandPrimary/30');
      }
      renderQuest();
    });
  }

  // Copy quest sheet plain text
  const copyQuestBtn = document.getElementById('btn-copy-quest');
  if (copyQuestBtn) {
    copyQuestBtn.addEventListener('click', () => {
      copyQuestTextToClipboard();
    });
  }

  // Export Sync Token
  const exportBtn = document.getElementById('btn-export');
  const exportTextarea = document.getElementById('export-textarea');
  const copyTokenBtn = document.getElementById('btn-copy-token');
  if (exportBtn && exportTextarea && copyTokenBtn) {
    exportBtn.addEventListener('click', () => {
      const token = exportStateToString(appState);
      if (token) {
        exportTextarea.value = token;
        exportTextarea.classList.remove('hidden');
        copyTokenBtn.classList.remove('hidden');
        exportBtn.textContent = 'Token Generated';
      } else {
        alert("Failed to export current state.");
      }
    });

    copyTokenBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(exportTextarea.value).then(() => {
        copyTokenBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyTokenBtn.textContent = 'Copy Token to Clipboard';
        }, 2000);
      }).catch(err => {
        console.error("Clipboard copy failed:", err);
        exportTextarea.select();
        alert("Please copy the text manually from the textbox.");
      });
    });
  }

  // Import Sync Token
  const importBtn = document.getElementById('btn-import');
  const importTextarea = document.getElementById('import-textarea');
  const importFeedback = document.getElementById('import-feedback');
  if (importBtn && importTextarea && importFeedback) {
    importBtn.addEventListener('click', () => {
      const token = importTextarea.value;
      if (!token.trim()) {
        showImportFeedback("Please paste a token first.", false);
        return;
      }

      if (confirm("Importing this token will completely overwrite all local levels, logs, and progress on this device. Are you sure you want to proceed?")) {
        const result = importStateFromString(token);
        if (result.success) {
          appState = result.state;
          updateHeaderLevels();
          renderQuest();
          renderProgress();
          renderHistory();
          importTextarea.value = '';
          showImportFeedback("Data imported successfully! The dashboard has updated.", true);
        } else {
          showImportFeedback("Invalid token. Please make sure the token is fully copied.", false);
        }
      }
    });
  }

  // Reset Data
  const resetBtn = document.getElementById('btn-reset-data');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm("WARNING: This will permanently delete all of Ada's progress, levels, and logged history on this device. This cannot be undone! Are you sure?")) {
        localStorage.clear();
        appState = loadState();
        updateHeaderLevels();
        renderQuest();
        renderProgress();
        renderHistory();
        alert("Local storage has been reset to defaults.");
      }
    });
  }

  // System Diagnostics Integrity Check
  const runTestsBtn = document.getElementById('btn-run-tests');
  const diagnosticsFeedback = document.getElementById('diagnostics-feedback');
  if (runTestsBtn && diagnosticsFeedback) {
    runTestsBtn.addEventListener('click', () => {
      diagnosticsFeedback.textContent = "Running tests...";
      const msg = runSelfTests();
      diagnosticsFeedback.textContent = msg;
    });
  }

  // Listen to tab switches (so we can update prints/renderings if needed)
  window.addEventListener('tabChanged', (e) => {
    if (e.detail && e.detail.tab === 'quest') {
      renderQuest();
    }
  });

  // Inline Form submission
  const inlineLogForm = document.getElementById('inline-log-form');
  if (inlineLogForm) {
    inlineLogForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const mathScore = document.querySelector('input[name="inline-math-score"]:checked')?.value;
      const readingScore = document.querySelector('input[name="inline-reading-score"]:checked')?.value;
      const selScore = document.querySelector('input[name="inline-sel-score"]:checked')?.value;
      const comment = document.getElementById('inline-log-comment')?.value || '';

      if (!mathScore || !readingScore || !selScore) {
        alert("Please complete the grading for all three sections before submitting.");
        return;
      }

      // Process submission
      const scores = { math: mathScore, reading: readingScore, sel: selScore };
      submitLog(appState, scores, comment);
      
      // Reset form
      inlineLogForm.reset();
      
      // Update UI
      updateHeaderLevels();
      renderQuest();
      renderProgress();
      renderHistory();

      // Alert
      alert("Log submitted successfully! The next quest has been generated at the calibrated levels.");
    });
  }
}

// Helper for import notifications
function showImportFeedback(msg, isSuccess) {
  const fb = document.getElementById('import-feedback');
  if (!fb) return;
  fb.textContent = msg;
  fb.className = `text-[10px] mt-2 font-medium ${isSuccess ? 'text-brandSuccess' : 'text-brandError'}`;
  fb.classList.remove('hidden');
  setTimeout(() => {
    fb.classList.add('hidden');
  }, 4000);
}

// Parses a shape matrix table from ASCII text
function parseShapeMatrix(text) {
  const lines = text.split('\n');
  const cellLines = lines.filter(line => line.includes('|'));
  const cells = [];
  cellLines.forEach(line => {
    const parts = line.split('|').map(p => p.trim());
    if (parts.length >= 3) {
      cells.push(...parts.slice(1, parts.length - 1));
    }
  });
  return cells;
}

// Parses a pattern sequence into separate items
function parsePatternSequence(patternText) {
  let items = [];
  if (patternText.includes('→')) {
    items = patternText.split('→').map(item => item.trim());
  } else if (patternText.includes('➔')) {
    items = patternText.split('➔').map(item => item.trim());
  } else {
    items = patternText.split(/\s{2,}/).map(item => item.trim());
  }
  return items.filter(item => item.length > 0);
}

// Update Top level header badges
function updateHeaderLevels() {
  const mathLvl = document.getElementById('header-math-level');
  const readingLvl = document.getElementById('header-reading-level');
  const selLvl = document.getElementById('header-sel-level');

  if (mathLvl) mathLvl.textContent = appState.levels.math;
  if (readingLvl) readingLvl.textContent = appState.levels.reading;
  if (selLvl) selLvl.textContent = appState.levels.sel;

  // Print view headers
  const printDate = document.getElementById('print-date');
  const printMath = document.getElementById('print-math-level');
  const printReading = document.getElementById('print-reading-level');
  const printSel = document.getElementById('print-sel-level');

  if (printDate) printDate.textContent = new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  if (printMath) printMath.textContent = appState.levels.math;
  if (printReading) printReading.textContent = appState.levels.reading;
  if (printSel) printSel.textContent = appState.levels.sel;
}

// Render the 3 modules on Tab 1
function renderQuest() {
  const mathContainer = document.getElementById('quest-math-container');
  const readingContainer = document.getElementById('quest-reading-container');
  const selContainer = document.getElementById('quest-sel-container');

  if (!mathContainer || !readingContainer || !selContainer) return;

  // Badges update
  const mathBadge = document.getElementById('quest-math-badge');
  const readingBadge = document.getElementById('quest-reading-badge');
  const selBadge = document.getElementById('quest-sel-badge');

  if (mathBadge) mathBadge.textContent = DIFFICULTY_TIERS[appState.levels.math]?.name || `Level ${appState.levels.math}`;
  if (readingBadge) readingBadge.textContent = DIFFICULTY_TIERS[appState.levels.reading]?.name || `Level ${appState.levels.reading}`;
  if (selBadge) selBadge.textContent = DIFFICULTY_TIERS[appState.levels.sel]?.name || `Level ${appState.levels.sel}`;

  // 1. Render Math Block (5 questions)
  mathContainer.innerHTML = '';
  const currentMathIds = appState.currentQuest.mathIds || [];
  currentMathIds.forEach((id, index) => {
    const q = MATH_MATRIX[appState.levels.math]?.find(item => item.id === id);
    if (!q) return;

    const div = document.createElement('div');
    div.className = 'border-l-4 border-brandAccent/30 pl-4 py-1.5';
    
    // Question text and number
    let html = '';
    const isShapeMatrix = q.text.toLowerCase().includes('shape matrix') && q.text.includes('|');
    const isBlockCount = q.text.includes('+---') && !isShapeMatrix;
    const isPattern = q.text.includes('Visual Shape Pattern:') || q.text.includes('Dot Sequence Progression:');

    if (isShapeMatrix) {
      const parts = q.text.split('\n\n');
      const questionLabel = parts[0] || "Solve this shape matrix:";
      const asciiOnly = parts[1] || "";
      const cells = parseShapeMatrix(asciiOnly);

      if (cells.length === 4) {
        let gridHtml = `
          <div class="grid grid-cols-2 gap-4 max-w-sm my-4 bg-slate-900/60 p-4 rounded-xl border border-brandBorder/50">
        `;
        cells.forEach(cell => {
          const isQuestionCell = cell.includes('[ ? ]') || cell.includes('[?]') || cell === '?';
          const cellClass = isQuestionCell 
            ? 'bg-brandPrimary/10 border-brandPrimary/40 text-brandAccent animate-pulse font-black' 
            : 'bg-slate-950/80 border border-brandBorder/30 text-slate-100';
          gridHtml += `
            <div class="flex flex-col items-center justify-center p-3 rounded-lg text-center min-h-[4.5rem] shadow-sm ${cellClass}">
              <span class="text-sm sm:text-base font-bold">${escapeHtml(cell)}</span>
            </div>
          `;
        });
        gridHtml += `</div>`;

        html = `
          <p class="text-base sm:text-lg font-bold text-slate-200">Q${index + 1}. <span class="font-medium text-slate-100">${escapeHtml(questionLabel)}</span></p>
          ${gridHtml}
        `;
      } else {
        html = `
          <p class="text-base sm:text-lg font-bold text-slate-200">Q${index + 1}. <span class="font-medium text-slate-100">${escapeHtml(questionLabel)}</span></p>
          <pre class="ascii-matrix bg-slate-950 border border-brandBorder/80 p-4 rounded-xl text-brandAccent text-sm sm:text-base overflow-x-auto my-3 mb-4 shadow-inner">${escapeHtml(asciiOnly)}</pre>
        `;
      }
    } else if (isBlockCount) {
      const lines = q.text.split('\n');
      const label = lines[0];
      const asciiLines = lines.slice(1, lines.length - 1).join('\n');
      const questionLabel = lines[lines.length - 1] || "";

      html = `
        <p class="text-base sm:text-lg font-bold text-slate-200 mb-2">Q${index + 1}. <span class="font-medium text-slate-100">${escapeHtml(label)}</span></p>
        <pre class="ascii-matrix bg-slate-950 border border-brandBorder/80 p-4 rounded-xl text-brandAccent text-sm sm:text-base overflow-x-auto my-3 mb-4 shadow-inner leading-normal font-mono">${escapeHtml(asciiLines)}</pre>
        <p class="text-base sm:text-lg font-bold text-slate-200 mt-2">${escapeHtml(questionLabel)}</p>
      `;
    } else if (isPattern) {
      const lines = q.text.split('\n');
      const label = lines[0].trim();
      const patternText = lines[1] ? lines[1].trim() : '';
      const items = parsePatternSequence(patternText);

      let patternHtml = `
        <div class="flex flex-wrap items-center gap-2 my-4 bg-slate-900/40 p-4 rounded-xl border border-brandBorder/40 w-max max-w-full overflow-x-auto">
          <div class="flex items-center gap-1.5 sm:gap-2">
      `;
      items.forEach((item, idx) => {
        if (idx > 0) {
          patternHtml += `
            <span class="text-slate-500 font-bold text-sm sm:text-base select-none mx-0.5 sm:mx-1">➔</span>
          `;
        }
        const isQuestionCell = item.includes('[ ? ]') || item.includes('[?]') || item === '?';
        const cellClass = isQuestionCell 
          ? 'bg-brandPrimary/10 border border-brandPrimary/40 text-brandAccent animate-pulse font-black' 
          : 'bg-slate-950/80 border border-brandBorder/60 text-slate-100';
        
        const isLongText = item.length > 3 || /[a-zA-Z]/.test(item);
        const textClass = isLongText ? 'text-xs sm:text-sm font-semibold px-3 py-2' : 'text-lg sm:text-xl font-bold px-4 py-2.5';

        patternHtml += `
          <div class="rounded-xl border flex items-center justify-center min-w-[3.5rem] text-center shadow-md ${cellClass} ${textClass}">
            ${escapeHtml(item)}
          </div>
        `;
      });
      patternHtml += `
          </div>
        </div>
      `;

      html = `
        <p class="text-base sm:text-lg font-bold text-slate-200">Q${index + 1}. <span class="font-medium text-slate-100">${escapeHtml(label)}</span></p>
        ${patternHtml}
      `;
    } else {
      html = `<p class="text-base sm:text-lg font-bold text-slate-200">Q${index + 1}. <span class="font-medium text-slate-100">${escapeHtml(q.text).replace(/\n/g, '<br>')}</span></p>`;
    }

    // Render options if they exist
    if (q.options) {
      html += `<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">`;
      q.options.forEach(opt => {
        html += `<span class="bg-slate-900 border border-brandBorder/50 px-4 py-2.5 rounded-xl text-sm sm:text-base font-semibold text-slate-200 text-center">${escapeHtml(opt)}</span>`;
      });
      html += `</div>`;
    }
    
    // Parent answer key
    html += `<p class="text-xs sm:text-sm text-slate-400 mt-2.5"><strong class="text-brandAccent">Parent Answer Key:</strong> ${escapeHtml(q.answer)}</p>`;
    
    // Parent Prompt & Elimination Tip Card
    html += `
      <div class="mt-3 bg-slate-900/60 border border-brandBorder/40 rounded-xl p-3.5 space-y-2 text-xs sm:text-sm">
        <p class="leading-relaxed text-slate-300"><strong class="text-brandAccent uppercase text-[10px] tracking-wider block mb-0.5">Parent Prompt / Script:</strong> "${escapeHtml(q.parentPrompt)}"</p>
        <p class="leading-relaxed text-slate-300"><strong class="text-brandAccent uppercase text-[10px] tracking-wider block mb-0.5">Elimination Method:</strong> "${escapeHtml(q.elimination)}"</p>
      </div>
    `;
    
    div.innerHTML = html;
    mathContainer.appendChild(div);
  });

  // 2. Render Reading Block (5 questions)
  readingContainer.innerHTML = '';
  const currentReadingIds = appState.currentQuest.readingIds || [];
  currentReadingIds.forEach((id, index) => {
    const q = READING_MATRIX[appState.levels.reading]?.find(item => item.id === id);
    if (!q) return;

    const div = document.createElement('div');
    div.className = 'border-l-4 border-brandPrimary/30 pl-4 py-1.5';

    let html = '';
    
    // Check if it's a story format or standard analogy question
    if (q.text.includes('Story:')) {
      const parts = q.text.split('\nQuestion:');
      const story = parts[0].replace('Story:', '').trim();
      const question = parts[1] ? parts[1].trim() : '';
      
      html += `
        <div class="bg-slate-900/40 border border-brandBorder/30 p-4 rounded-xl text-sm sm:text-base italic text-slate-300 mb-3 font-normal leading-relaxed">
          <strong>Story:</strong> "${escapeHtml(story)}"
        </div>
        <p class="text-base sm:text-lg font-bold text-slate-200">Q${index + 1}. <span class="font-medium text-slate-100">${escapeHtml(question)}</span></p>
      `;
    } else {
      html += `<p class="text-base sm:text-lg font-bold text-slate-200">Q${index + 1}. <span class="font-medium text-slate-100">${escapeHtml(q.text)}</span></p>`;
    }

    // Render Mandarin translation if active and translation exists
    if (showMandarin && q.translation) {
      html += `
        <div class="mt-3 mb-4 p-4 bg-slate-900/60 border border-brandPrimary/30 rounded-xl space-y-2">
          <p class="text-base font-bold text-brandAccent leading-relaxed">${escapeHtml(q.translation.chinese).replace(/\n/g, '<br>')}</p>
          <p class="text-sm text-slate-300 italic font-medium leading-relaxed">${escapeHtml(q.translation.pinyin).replace(/\n/g, '<br>')}</p>
        </div>
      `;
    }

    // Render vocabulary translation if enabled and vocabulary exists
    if (q.vocab) {
      html += `
        <div class="mt-3 flex flex-wrap items-center gap-2">
          <span class="text-xs font-bold uppercase tracking-wider bg-brandPrimary/10 text-brandPrimary px-2.5 py-1 rounded-md border border-brandPrimary/20">Vocab Focus</span>
          <span class="text-sm sm:text-base font-semibold text-slate-200">${escapeHtml(q.vocab.word)}</span>
          ${showMandarin ? `
            <span class="text-sm sm:text-base text-brandAccent font-bold">(${escapeHtml(q.vocab.chinese)} - ${escapeHtml(q.vocab.pinyin)})</span>
          ` : ''}
          <span class="text-sm sm:text-base text-slate-400 font-normal">: "${escapeHtml(q.vocab.definition)}"</span>
        </div>
      `;
    }

    // Render idiom details if enabled and idiom exists
    if (q.idiom) {
      html += `
        <div class="mt-3 p-3 bg-slate-900/30 border border-brandBorder/20 rounded-xl">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold uppercase bg-brandPrimary/20 text-brandPrimary px-2 py-0.5 rounded border border-brandPrimary/30">成语 Chéngyǔ</span>
            ${showMandarin ? `
              <span class="text-sm sm:text-base font-bold text-brandAccent">${escapeHtml(q.idiom.text)} (${escapeHtml(q.idiom.pinyin)})</span>
            ` : `<span class="text-sm sm:text-base font-bold text-brandAccent">${escapeHtml(q.idiom.text)}</span>`}
          </div>
          <p class="text-xs sm:text-sm text-slate-400 mt-1.5 font-normal">Meaning: ${escapeHtml(q.idiom.meaning)}</p>
        </div>
      `;
    }

    // Render options if they exist
    if (q.options) {
      html += `<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">`;
      q.options.forEach(opt => {
        html += `<span class="bg-slate-900 border border-brandBorder/50 px-4 py-2.5 rounded-xl text-sm sm:text-base font-semibold text-slate-200 text-center">${escapeHtml(opt)}</span>`;
      });
      html += `</div>`;
    }

    // Parent answer key
    html += `<p class="text-xs sm:text-sm text-slate-400 mt-2.5"><strong class="text-brandPrimary">Parent Answer Key:</strong> ${escapeHtml(q.answer)}</p>`;
    
    // Parent Prompt & Elimination Tip Card
    html += `
      <div class="mt-3 bg-slate-900/60 border border-brandBorder/40 rounded-xl p-3.5 space-y-2 text-xs sm:text-sm">
        <p class="leading-relaxed text-slate-300"><strong class="text-brandPrimary uppercase text-[10px] tracking-wider block mb-0.5">Parent Prompt / Script:</strong> "${escapeHtml(q.parentPrompt)}"</p>
        <p class="leading-relaxed text-slate-300"><strong class="text-brandPrimary uppercase text-[10px] tracking-wider block mb-0.5">Elimination Method:</strong> "${escapeHtml(q.elimination)}"</p>
      </div>
    `;
    
    div.innerHTML = html;
    readingContainer.appendChild(div);
  });

  // 3. Render SEL Block (1 challenge script)
  selContainer.innerHTML = '';
  const currentSelId = appState.currentQuest.selId;
  const qSel = SEL_MATRIX[appState.levels.sel]?.find(item => item.id === currentSelId);
  
  if (qSel) {
    const div = document.createElement('div');
    div.className = 'space-y-4';
    
    let html = `
      <p class="text-base sm:text-lg font-bold text-slate-200">Daily Challenge: <span class="font-medium text-slate-100">${escapeHtml(qSel.text)}</span></p>
    `;

    // Render Mandarin translation if active and translation exists
    if (showMandarin && qSel.translation) {
      html += `
        <div class="mt-3 mb-4 p-4 bg-slate-900/60 border border-brandSuccess/30 rounded-xl space-y-2">
          <p class="text-base font-bold text-brandAccent leading-relaxed">${escapeHtml(qSel.translation.chinese)}</p>
          <p class="text-sm text-slate-300 italic font-medium leading-relaxed">${escapeHtml(qSel.translation.pinyin)}</p>
        </div>
      `;
    }

    html += `
      <div class="bg-slate-900/50 border border-brandBorder/40 p-4 rounded-xl text-sm sm:text-base leading-relaxed text-slate-300">
        <strong class="text-brandSuccess uppercase text-xs tracking-wider block mb-1">Parent Guide:</strong>
        ${escapeHtml(qSel.prompt)}
      </div>
    `;

    // Render Mandarin roleplay scripts if available (Level 3 challenges)
    if (qSel.script) {
      html += `
        <div class="p-4 bg-slate-900/40 border border-brandBorder/30 rounded-xl">
          <span class="text-xs font-bold uppercase bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-brandBorder/50 block w-max mb-3">Public Execution Script</span>
          <div class="space-y-2">
            <p class="text-sm sm:text-base font-semibold text-slate-200">English: <span class="font-medium text-slate-100">"${escapeHtml(qSel.script.english)}"</span></p>
            ${showMandarin ? `
              <p class="text-sm sm:text-base font-bold text-brandAccent">Mandarin: <span class="font-bold text-base sm:text-lg">"${escapeHtml(qSel.script.chinese)}"</span></p>
              <p class="text-sm sm:text-base text-brandPrimary font-semibold">Pinyin: <span class="font-normal italic">"${escapeHtml(qSel.script.pinyin)}"</span></p>
            ` : `
              <p class="text-xs sm:text-sm text-slate-400 italic font-normal">Pinyin/Chinese script translation toggled off. Press the "Chinese/Pinyin" button in Block 2 to reveal.</p>
            `}
          </div>
        </div>
      `;
    }

    div.innerHTML = html;
    selContainer.appendChild(div);
  } else {
    selContainer.innerHTML = `<p class="text-sm text-slate-500 italic">No SEL challenge generated.</p>`;
  }
}

// Render milestones progress bars on Tab 3
function renderProgress() {
  const mathLabel = document.getElementById('progress-math-label');
  const mathBar = document.getElementById('progress-math-bar');
  const mathDesc = document.getElementById('progress-math-desc');

  const readingLabel = document.getElementById('progress-reading-label');
  const readingBar = document.getElementById('progress-reading-bar');
  const readingDesc = document.getElementById('progress-reading-desc');

  const selLabel = document.getElementById('progress-sel-label');
  const selBar = document.getElementById('progress-sel-bar');
  const selDesc = document.getElementById('progress-sel-desc');

  if (!mathLabel || !mathBar || !mathDesc || !readingLabel || !readingBar || !readingDesc || !selLabel || !selBar || !selDesc) return;

  // Math Level calculations
  const mathLvl = appState.levels.math;
  mathLabel.textContent = `Level ${mathLvl} / 5`;
  mathBar.style.width = `${(mathLvl / 5) * 100}%`;
  mathDesc.textContent = DIFFICULTY_TIERS[mathLvl]?.description || '';

  // Reading Level
  const readingLvl = appState.levels.reading;
  readingLabel.textContent = `Level ${readingLvl} / 5`;
  readingBar.style.width = `${(readingLvl / 5) * 100}%`;
  readingDesc.textContent = DIFFICULTY_TIERS[readingLvl]?.description || '';

  // SEL Level
  const selLvl = appState.levels.sel;
  selLabel.textContent = `Level ${selLvl} / 5`;
  selBar.style.width = `${(selLvl / 5) * 100}%`;
  selDesc.textContent = DIFFICULTY_TIERS[selLvl]?.description || '';
}

// Render historical session logs list on Tab 3
function renderHistory() {
  const historyContainer = document.getElementById('history-container');
  if (!historyContainer) return;

  if (appState.history.length === 0) {
    historyContainer.innerHTML = `
      <p class="text-xs text-slate-500 italic py-4 text-center">No session logs recorded yet. Complete a session to see history.</p>
    `;
    return;
  }

  // Render logs in reverse chronological order
  historyContainer.innerHTML = '';
  const sortedHistory = [...appState.history].reverse();
  
  sortedHistory.forEach(log => {
    const div = document.createElement('div');
    div.className = 'bg-slate-900 border border-brandBorder/60 rounded-lg p-3.5 space-y-2 text-xs';

    const dateStr = new Date(log.timestamp).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const scoresHtml = `
      <div class="flex flex-wrap items-center gap-1.5 mt-1">
        <span class="px-1.5 py-0.5 rounded text-[10px] font-semibold ${getScoreClass(log.scores.math)}">Math: L${log.originalLevels.math} &rarr; L${log.newLevels.math} (${formatScoreText(log.scores.math)})</span>
        <span class="px-1.5 py-0.5 rounded text-[10px] font-semibold ${getScoreClass(log.scores.reading)}">Verbal: L${log.originalLevels.reading} &rarr; L${log.newLevels.reading} (${formatScoreText(log.scores.reading)})</span>
        <span class="px-1.5 py-0.5 rounded text-[10px] font-semibold ${getScoreClass(log.scores.sel)}">SEL: L${log.originalLevels.sel} &rarr; L${log.newLevels.sel} (${formatScoreText(log.scores.sel)})</span>
      </div>
    `;

    div.innerHTML = `
      <div class="flex justify-between items-center text-slate-400 text-[10px]">
        <span class="font-semibold text-slate-300">${escapeHtml(dateStr)}</span>
        <span class="font-mono text-[9px] bg-slate-800 px-1 py-0.5 rounded border border-brandBorder/40">Log Entry</span>
      </div>
      ${scoresHtml}
      ${log.comment ? `
        <div class="mt-2 text-slate-300 bg-brandSurface/40 border border-brandBorder/30 p-2 rounded leading-relaxed">
          <span class="font-semibold text-slate-400 block text-[10px]">Observations:</span>
          "${escapeHtml(log.comment)}"
        </div>
      ` : ''}
    `;

    historyContainer.appendChild(div);
  });
}

// Format the code value into human-readable text
function formatScoreText(score) {
  if (score === 'mastered') return 'Mastered';
  if (score === 'hint') return 'Hint';
  return 'Struggled';
}

// Returns appropriate style classes for history badges
function getScoreClass(score) {
  if (score === 'mastered') return 'bg-brandSuccess/10 text-brandSuccess border border-brandSuccess/20';
  if (score === 'hint') return 'bg-slate-800 text-slate-300 border border-brandBorder';
  return 'bg-brandError/10 text-brandError border border-brandError/20';
}

// Compiles the entire session sheet in structured plain text and copies it to clipboard
function copyQuestTextToClipboard() {
  const dateStr = new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  
  let txt = `A CHANG LEARNS: Ada's Daily 15-Minute Quest
==================================================
Date: ${dateStr}
Levels: Math Lvl ${appState.levels.math} | Verbal Lvl ${appState.levels.reading} | SEL Lvl ${appState.levels.sel}
--------------------------------------------------

`;

  // 1. Math block text
  txt += `BLOCK 1: Math & Quantitative Reasoning (${DIFFICULTY_TIERS[appState.levels.math]?.name || `Level ${appState.levels.math}`})\n`;
  txt += `--------------------------------------------------\n`;
  const currentMathIds = appState.currentQuest.mathIds || [];
  currentMathIds.forEach((id, index) => {
    const q = MATH_MATRIX[appState.levels.math]?.find(item => item.id === id);
    if (!q) return;
    txt += `Q${index + 1}. ${q.text}\n`;
    if (q.options) {
      txt += `   Options: ${q.options.join(', ')}\n`;
    }
    txt += `   Parent Prompt: ${q.parentPrompt}\n`;
    txt += `   Elimination Method: ${q.elimination}\n`;
    txt += `   [Parent Answer Key: ${q.answer}]\n\n`;
  });

  // 2. Reading block text
  txt += `BLOCK 2: Reading & Verbal Logic (${DIFFICULTY_TIERS[appState.levels.reading]?.name || `Level ${appState.levels.reading}`})\n`;
  txt += `--------------------------------------------------\n`;
  const currentReadingIds = appState.currentQuest.readingIds || [];
  currentReadingIds.forEach((id, index) => {
    const q = READING_MATRIX[appState.levels.reading]?.find(item => item.id === id);
    if (!q) return;
    txt += `Q${index + 1}. ${q.text}\n`;
    if (showMandarin && q.translation) {
      txt += `   Chinese: ${q.translation.chinese}\n`;
      txt += `   Pinyin: ${q.translation.pinyin}\n`;
    }
    if (q.vocab) {
      txt += `   Vocab Focus: ${q.vocab.word} : "${q.vocab.definition}"`;
      if (showMandarin) {
        txt += ` (${q.vocab.chinese} - ${q.vocab.pinyin})`;
      }
      txt += `\n`;
    }
    if (q.idiom) {
      txt += `   Idiom: ${q.idiom.text}`;
      if (showMandarin) {
        txt += ` (${q.idiom.pinyin})`;
      }
      txt += ` - ${q.idiom.meaning}\n`;
    }
    txt += `   Parent Prompt: ${q.parentPrompt}\n`;
    txt += `   Elimination Method: ${q.elimination}\n`;
    txt += `   [Parent Answer Key: ${q.answer}]\n\n`;
  });

  // 3. SEL block text
  txt += `BLOCK 3: Social-Emotional Intelligence (${DIFFICULTY_TIERS[appState.levels.sel]?.name || `Level ${appState.levels.sel}`})\n`;
  txt += `--------------------------------------------------\n`;
  const qSel = SEL_MATRIX[appState.levels.sel]?.find(item => item.id === appState.currentQuest.selId);
  if (qSel) {
    txt += `Daily Challenge: ${qSel.text}\n`;
    if (showMandarin && qSel.translation) {
      txt += `   Chinese: ${qSel.translation.chinese}\n`;
      txt += `   Pinyin: ${qSel.translation.pinyin}\n`;
    }
    txt += `Parent Guide: ${qSel.prompt}\n`;
    if (qSel.script) {
      txt += `Script English: "${qSel.script.english}"\n`;
      if (showMandarin) {
        txt += `Script Mandarin: "${qSel.script.chinese}"\n`;
        txt += `Script Pinyin: "${qSel.script.pinyin}"\n`;
      }
    }
    txt += `\n`;
  }

  txt += `==================================================\n`;
  txt += `Zero Cloud Cost &bull; Local Storage Session Data`;

  // Copy operation with fallback support
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(txt).then(() => {
      const btn = document.getElementById('btn-copy-quest');
      if (btn) {
        btn.textContent = 'Copied!';
        setTimeout(() => {
          btn.innerHTML = `
            <svg class="w-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H14m0 0l3-3m-3 3l3 3"/></svg>
            Copy Text
          `;
        }, 2000);
      }
    }).catch(err => {
      fallbackCopyText(txt);
    });
  } else {
    fallbackCopyText(txt);
  }
}

// Fallback copy strategy
function fallbackCopyText(text) {
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";  // Avoid scrolling to bottom
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    if (successful) {
      alert("Quest sheet copied to clipboard!");
    } else {
      alert("Failed to copy automatically. Please copy the text from the diagnostics screen.");
    }
  } catch (err) {
    console.error("Fallback copy error:", err);
    alert("Clipboard copy failed. Please print the page instead.");
  }
}

// Escape HTML utility to avoid XSS injections
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Global level adjustment controller
window.adjustLevel = function(type, delta) {
  if (!appState) return;
  const currentLvl = appState.levels[type] || 1;
  const newLvl = Math.max(1, Math.min(5, currentLvl + delta));
  if (newLvl === currentLvl) return; // No change
  
  appState.levels[type] = newLvl;
  generateNewQuest(appState);
  saveState(appState);
  
  // Refresh UI
  updateHeaderLevels();
  renderQuest();
  renderProgress();
};

// Global question appender
window.addMoreQuestions = function(type) {
  if (!appState) return;
  const added = addMoreQuestionsToState(appState, type);
  if (added) {
    renderQuest();
    alert(`Added 5 more questions to ${type === 'math' ? 'Math' : 'Reading'}!`);
  } else {
    alert(`No more unique questions available in the Level ${appState.levels[type]} pool.`);
  }
};
