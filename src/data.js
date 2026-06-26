// Content Matrix calibrated to Naglieri General Abilities Test - Quantitative (NGAT-Q) and Iowa Reading Standards
// Student: Ada Chang | Target: 1st Grade Northshore HiCap Prep (Tested 1 Grade Up: NGAT-Q Level B & Iowa Reading Level 8)
// Tiers: 1 (Advanced K/Early 1st), 2 (Late 1st), 3 (Early 2nd), 4 (Late 2nd/Early 3rd), 5 (HiCap Gifted Elite)

export const DIFFICULTY_TIERS = {
  1: { name: "Level 1: Advanced Foundation", description: "Late K / Early 1st Grade. Counts past 100, crosses decades, isolates simple phonics." },
  2: { name: "Level 2: Intermediate Explorer", description: "Late 1st Grade. Single-digit visual equations, simple 2x2 shape matrices." },
  3: { name: "Level 3: Advanced Analyst", description: "Early 2nd Grade. Double-digit math (regrouping context), multi-variable scales, character motivative recall." },
  4: { name: "Level 4: Scholar Prep", description: "Late 2nd / Early 3rd Grade. Spatial rotations, 3D block counts, multiplication rules, semantic analogies." },
  5: { name: "Level 5: HiCap Gifted Elite", description: "3rd Grade +. Complex multi-attribute matrices, paper-folding geometry, advanced systems of balance, abstract reasoning." }
};

export const MATH_MATRIX = {
  1: [
    { 
      id: "m1_1", 
      text: "Solve this counting sequence:\n107, 108, 109, [ ? ], 111, 112", 
      options: ["A) 110", "B) 100", "C) 120", "D) 109", "E) 119"], 
      answer: "A) 110",
      parentPrompt: "Point to the numbers. Ask: 'What number comes right after 109 when we count?' Guide them to cross the 100-decade boundary correctly.",
      elimination: "Cross out 109 since it is already in the list. 100 is too small and 120 is skip counting too far ahead."
    },
    { 
      id: "m1_2", 
      text: "Solve this counting sequence:\n117, 118, 119, [ ? ], 121, 122", 
      options: ["A) 120", "B) 130", "C) 110", "D) 118", "E) 129"], 
      answer: "A) 120",
      parentPrompt: "Point to the sequence. Ask: 'What number comes right after 119 when we count?' Help them cross from the 110s to the 120s.",
      elimination: "110 is smaller than 117. 130 is too high. Eliminate these obviously wrong choices first."
    },
    { 
      id: "m1_3", 
      text: "Solve this counting sequence:\n98, 99, [ ? ], 101, 102", 
      options: ["A) 100", "B) 90", "C) 110", "D) 97", "E) 103"], 
      answer: "A) 100",
      parentPrompt: "Point to the sequence. Ask: 'What number comes right after 99?' Help them transition from two-digit to three-digit numbers.",
      elimination: "90 is smaller than 98. 110 is too high. Cross them out."
    },
    { 
      id: "m1_4", 
      text: "Solve this skip-counting sequence:\n5, 10, 15, 20, [ ? ], 30", 
      options: ["A) 25", "B) 22", "C) 35", "D) 21", "E) 40"], 
      answer: "A) 25",
      parentPrompt: "Ask: 'We are skip counting by 5s. Let's count together: 5, 10, 15, 20... what comes next?'",
      elimination: "21 and 22 are counting by 1s, not 5s. 40 is too far ahead. Eliminate them."
    },
    { 
      id: "m1_5", 
      text: "Solve this skip-counting sequence:\n10, 20, 30, 40, [ ? ], 60", 
      options: ["A) 50", "B) 45", "C) 70", "D) 41", "E) 80"], 
      answer: "A) 50",
      parentPrompt: "Ask: 'We are counting by 10s. Let's count: 10, 20, 30, 40... what comes next?'",
      elimination: "41 is only one more. 45 is counting by 5s. Cross them out."
    },
    { 
      id: "m1_6", 
      text: "Solve this count-by-2s sequence:\n18, 20, 22, [ ? ], 26", 
      options: ["A) 24", "B) 23", "C) 28", "D) 25", "E) 21"], 
      answer: "A) 24",
      parentPrompt: "Ask: 'We are skip counting by 2s. Let's count: 18, 20, 22... what comes next?'",
      elimination: "21 is smaller than 22. 23 is counting by 1s. Eliminate them."
    },
    { 
      id: "m1_7", 
      text: "Visual Shape Pattern:\n●  ▲  ●  ▲  ●  [ ? ]", 
      options: ["A) ▲ (Triangle)", "B) ● (Circle)", "C) ■ (Square)", "D) ★ (Star)", "E) ⬡ (Hexagon)"], 
      answer: "A) ▲ (Triangle)",
      parentPrompt: "Ask: 'What pattern do you see? Let's say the shapes: circle, triangle, circle, triangle, circle... what is next?'",
      elimination: "Since the pattern alternates between circle and triangle, eliminate options C, D, and E because they are entirely different shapes."
    },
    { 
      id: "m1_8", 
      text: "Visual Shape Pattern:\n■  ■  ●  ■  ■  ●  ■  [ ? ]", 
      options: ["A) ■ (Square)", "B) ● (Circle)", "C) ▲ (Triangle)", "D) ★ (Star)", "E) ✚ (Plus)"], 
      answer: "A) ■ (Square)",
      parentPrompt: "Ask: 'Look at the pattern. We have two squares, then one circle. After that, we have two squares and one circle. Now we have one square... what should complete the pair?'",
      elimination: "The pattern requires a second square to follow the first. Eliminate the circle (B) and the other shapes."
    },
    { 
      id: "m1_9", 
      text: "Visual Shape Pattern:\n▲  ▲▲  ▲▲▲  [ ? ]", 
      options: ["A) ▲▲▲▲ (Four Triangles)", "B) ▲ (One Triangle)", "C) ● (Circle)", "D) ■■ (Two Squares)", "E) ▲▲ (Two Triangles)"], 
      answer: "A) ▲▲▲▲ (Four Triangles)",
      parentPrompt: "Ask: 'Let's count the triangles in each group: 1 triangle, then 2, then 3. How many triangles should be in the next group?'",
      elimination: "We need 4 triangles. Eliminate the circle (C) and groups with the wrong number of shapes."
    },
    { 
      id: "m1_10", 
      text: "Visual Shape Pattern:\n⬠  ⬡  ⬠  ⬡  [ ? ]", 
      options: ["A) ⬠ (Pentagon)", "B) ⬡ (Hexagon)", "C) ● (Circle)", "D) ■ (Square)", "E) ▲ (Triangle)"], 
      answer: "A) ⬠ (Pentagon)",
      parentPrompt: "Ask: 'Look at the shapes. We have a 5-sided pentagon, then a 6-sided hexagon, then a pentagon, then a hexagon. What shape comes next?'",
      elimination: "The pattern alternates. Since the last shape was a hexagon, the next must be a pentagon. Eliminate circle, square, and triangle."
    }
  ],
  2: [
    { 
      id: "m2_1", 
      text: "Symbolic Balance:\n○ + ○ = 12\n○ = [ ? ]", 
      options: ["A) 6", "B) 5", "C) 12", "D) 4", "E) 8"], 
      answer: "A) 6",
      parentPrompt: "Ask: 'Two identical circles add up to 12. What number added to itself makes 12? What is half of 12?'",
      elimination: "12 is the total, so one circle must be smaller than 12. Eliminate 12. 5 + 5 is 10 (too small). Eliminate 5."
    },
    { 
      id: "m2_2", 
      text: "Symbolic Balance:\n△ + △ = 16\n△ = [ ? ]", 
      options: ["A) 8", "B) 6", "C) 10", "D) 12", "E) 4"], 
      answer: "A) 8",
      parentPrompt: "Ask: 'Two identical triangles make 16. What number plus itself makes 16?'",
      elimination: "10 + 10 = 20, which is too big. 6 + 6 = 12, which is too small. Eliminate 10 and 6."
    },
    { 
      id: "m2_3", 
      text: "Symbolic Balance:\n□ + 5 = 15\n□ = [ ? ]", 
      options: ["A) 10", "B) 5", "C) 20", "D) 15", "E) 8"], 
      answer: "A) 10",
      parentPrompt: "Ask: 'What number plus 5 equals 15? If we take 5 away from 15, what is left?'",
      elimination: "The square must be smaller than the total of 15. Eliminate 20 and 15."
    },
    { 
      id: "m2_4", 
      text: "Symbolic Balance:\n★ + ★ = 20\n★ = [ ? ]", 
      options: ["A) 10", "B) 5", "C) 15", "D) 12", "E) 8"], 
      answer: "A) 10",
      parentPrompt: "Ask: 'Two stars make 20. What is half of 20? What double number is 20?'",
      elimination: "5 + 5 is 10 (too small) and 15 + 15 is 30 (too big). Eliminate 5 and 15."
    },
    {
      id: "m2_5",
      text: "Solve this shape matrix:\n\n+---------------+---------------+\n| o (Small Cir) | O (Large Cir) |\n+---------------+---------------+\n| x (Small X)   |     [ ? ]     |\n+---------------+---------------+",
      options: ["A) X (Large X)", "B) x (Small X)", "C) o (Small Cir)", "D) O (Large Cir)", "E) + (Small Plus)"],
      answer: "A) X (Large X)",
      parentPrompt: "Ask: 'Look at the top row. A small circle grows into a large circle. Now look at the bottom row. A small X should grow into what?'",
      elimination: "The shape must remain an X, just larger. Eliminate options C, D, and E because they are wrong shapes."
    },
    {
      id: "m2_6",
      text: "Solve this shape matrix:\n\n+----------------+----------------+\n| ( ) (Empty Cir)| (X) (Shaded Cir)|\n+----------------+----------------+\n| [ ] (Empty Sq) |     [ ? ]      |\n+----------------+----------------+",
      options: ["A) [X] (Shaded Sq)", "B) [ ] (Empty Sq)", "C) (X) (Shaded Cir)", "D) ( ) (Empty Cir)", "E) + (Plus)"],
      answer: "A) [X] (Shaded Sq)",
      parentPrompt: "Ask: 'Look at the top row. The circle gets filled with an X (shaded). Now look at the bottom row. How should the empty square change?'",
      elimination: "The shape must stay a square. Eliminate circle options C and D. It must be shaded, so eliminate empty square B."
    },
    { 
      id: "m2_7", 
      text: "Visual Shape Pattern:\n▲  →  ■  →  ⬠  →  [ ? ]", 
      options: ["A) ⬡ (Hexagon)", "B) ◯ (Circle)", "C) ★ (Star)", "D) ▱ (Parallelogram)", "E) ✚ (Plus)"], 
      answer: "A) ⬡ (Hexagon)",
      parentPrompt: "Ask: 'Let's count the straight sides. Triangle has 3 sides, square has 4 sides, pentagon has 5 sides. How many sides should the next shape have?'",
      elimination: "We need a 6-sided shape. A circle has 0 straight sides. Eliminate circle (B) and star (C)."
    },
    { 
      id: "m2_8", 
      text: "Dot Sequence Progression:\n. (1 dot)  →  .. (2 dots)  →  ... (3 dots)  →  [ ? ]", 
      options: ["A) .... (4 dots)", "B) ..... (5 dots)", "C) . (1 dot)", "D) .. (2 dots)", "E) ... (3 dots)"], 
      answer: "A) .... (4 dots)",
      parentPrompt: "Ask: 'Count the dots in each step. We have 1, 2, 3 dots. What number of dots comes next?'",
      elimination: "We need exactly 4 dots. Eliminate C, D, and E because they repeat numbers we already saw."
    },
    { 
      id: "m2_9", 
      text: "Symbolic Balance:\n♡ - 4 = 6\n♡ = [ ? ]", 
      options: ["A) 10", "B) 2", "C) 8", "D) 12", "E) 4"], 
      answer: "A) 10",
      parentPrompt: "Ask: 'What number minus 4 equals 6? If you have some candies, eat 4, and have 6 left, how many did you start with?'",
      elimination: "The starting number must be larger than 6. Eliminate 2, 4, and 6."
    },
    { 
      id: "m2_10", 
      text: "Symbolic Balance:\n♢ + ♢ = 18\n♢ = [ ? ]", 
      options: ["A) 9", "B) 8", "C) 10", "D) 18", "E) 7"], 
      answer: "A) 9",
      parentPrompt: "Ask: 'Two identical diamonds make 18. What number plus itself makes 18?'",
      elimination: "10 + 10 = 20 (too big) and 8 + 8 = 16 (too small). Eliminate 10 and 8."
    }
  ],
  3: [
    { 
      id: "m3_1", 
      text: "Multi-Variable Balance:\n○ + ○ = 14\n○ + △ = 12\n△ = [ ? ]", 
      options: ["A) 5", "B) 7", "C) 6", "D) 8", "E) 4"], 
      answer: "A) 5",
      parentPrompt: "Ask: 'If two circles make 14, how much is one circle? If one circle is 7, what number added to 7 makes 12?'",
      elimination: "Since the circle is 7, the triangle must be smaller than 12. If the triangle were 8, 7 + 8 would be 15 (too big). Eliminate 8."
    },
    { 
      id: "m3_2", 
      text: "Multi-Variable Balance:\n□ + □ = 20\n□ - ★ = 6\n★ = [ ? ]", 
      options: ["A) 4", "B) 6", "C) 10", "D) 8", "E) 12"], 
      answer: "A) 4",
      parentPrompt: "Ask: 'If two squares make 20, one square is 10. If 10 minus a star is 6, what is the star?'",
      elimination: "The square is 10. 10 minus star is 6, so the star must be smaller than 10. Eliminate 10 and 12."
    },
    { 
      id: "m3_3", 
      text: "Multi-Variable Balance:\n♡ + ♡ = 18\n♡ + ♢ = 14\n♢ = [ ? ]", 
      options: ["A) 5", "B) 9", "C) 4", "D) 8", "E) 6"], 
      answer: "A) 5",
      parentPrompt: "Ask: 'Two hearts equal 18, so one heart is 9. If a heart plus a diamond equals 14, what is the diamond?'",
      elimination: "The heart is 9. 9 + diamond = 14, so the diamond must be less than 9. Eliminate 9."
    },
    { 
      id: "m3_4", 
      text: "Symbolic Addition:\n24 + 9 = [ ? ]", 
      options: ["A) 33", "B) 35", "C) 23", "D) 31", "E) 32"], 
      answer: "A) 33",
      parentPrompt: "Ask: 'Let's solve 24 + 9. What is 24 + 10? Then subtract 1.' or 'Add 4 to 24 to get 30, then add the remaining 5.'",
      elimination: "Adding a positive number to 24 must make it larger than 24. Eliminate 23. 24 + 10 is 34, so 24 + 9 must be one less (33)."
    },
    { 
      id: "m3_5", 
      text: "Symbolic Subtraction:\n35 - 7 = [ ? ]", 
      options: ["A) 28", "B) 27", "C) 32", "D) 29", "E) 26"], 
      answer: "A) 28",
      parentPrompt: "Ask: 'Let's do 35 - 7. Subtract 5 first to get to 30. How many more do we need to subtract?'",
      elimination: "Subtracting 7 from 35 must result in a number smaller than 30. Eliminate 32. 35 - 5 is 30, so 35 - 7 is 28."
    },
    { 
      id: "m3_6", 
      text: "Symbolic Subtraction:\n42 - 8 = [ ? ]", 
      options: ["A) 34", "B) 36", "C) 32", "D) 38", "E) 35"], 
      answer: "A) 34",
      parentPrompt: "Ask: 'Let's do 42 - 8. Take away 2 to get to 40, then take away 6 more.'",
      elimination: "42 - 8 must end in a 4 because 12 - 8 is 4. Eliminate 36, 32, 38, and 35 immediately."
    },
    {
      id: "m3_7",
      text: "Solve this shape matrix:\n\n+-------------------+--------------------+\n| o (Small Circle)  | oo (Two Sm Circles)|\n+-------------------+--------------------+\n| + (Small Plus)    |       [ ? ]        |\n+-------------------+--------------------+",
      options: ["A) ++ (Two Sm Pluses)", "B) + (One Plus)", "C) o (One Circle)", "D) # (Grid)", "E) = (Equals)"],
      answer: "A) ++ (Two Sm Pluses)",
      parentPrompt: "Ask: 'Look at the top row. One circle becomes two circles. Now look at the bottom row. One plus sign should become what?'",
      elimination: "The shape type doesn't change, only the count doubles. The shape must remain plus signs. Eliminate circle option C."
    },
    {
      id: "m3_8",
      text: "Solve this shape matrix:\n\n+-------------------+--------------------+\n| ▲ (Point Up Tri)  | ▼ (Point Dn Tri)   |\n+-------------------+--------------------+\n| L (Letter L)      |       [ ? ]        |\n+-------------------+--------------------+",
      options: ["A) 7 (Inverted L)", "B) L (Normal L)", "C) Γ (Inverted L-flip)", "D) J (Letter J)", "E) ⏶ (Point Up Tri)"],
      answer: "A) 7 (Inverted L)",
      parentPrompt: "Ask: 'Look at the top row. The triangle points up, and then it flips to point down. What should happen to the letter L?'",
      elimination: "The rule is a vertical flip (upside down). The vertical line of the L stays on the left but points down. Eliminate normal L (B)."
    },
    { 
      id: "m3_9", 
      text: "Symbolic Equation:\n△ + △ + △ = 15\n△ = [ ? ]", 
      options: ["A) 5", "B) 3", "C) 6", "D) 10", "E) 4"], 
      answer: "A) 5",
      parentPrompt: "Ask: 'Three identical triangles add up to 15. What number added three times is 15? Let's skip count by 5s: 5, 10, 15...'",
      elimination: "10 + 10 + 10 = 30 (too big) and 3 + 3 + 3 = 9 (too small). Eliminate 10 and 3."
    },
    { 
      id: "m3_10", 
      text: "Multi-Variable Balance:\n★ + ★ + ★ = 30\n★ - ○ = 7\n○ = [ ? ]", 
      options: ["A) 3", "B) 7", "C) 10", "D) 5", "E) 4"], 
      answer: "A) 3",
      parentPrompt: "Ask: 'Three stars make 30, so one star is 10. If 10 minus a circle is 7, what is the circle?'",
      elimination: "The star is 10. 10 minus circle is 7, so the circle must be smaller than 7. Eliminate 7 and 10."
    }
  ],
  4: [
    { 
      id: "m4_1", 
      text: "Scale Balance:\n[🍎🍎🍎🍎] balances [⬡⬡]\nIf ⬡ = 8, 🍎 = [ ? ]", 
      options: ["A) 4", "B) 2", "C) 8", "D) 16", "E) 12"], 
      answer: "A) 4",
      parentPrompt: "Ask: 'Look at the balance. 4 apples balance 2 hexagons. If one hexagon is 8, the right side equals 8 + 8 = 16. What number added 4 times makes 16?'",
      elimination: "The total is 16. Since we divide 16 among 4 apples, each apple must be less than 8. Eliminate 8, 16, and 12."
    },
    { 
      id: "m4_2", 
      text: "Scale Balance:\n[🚗🚗🚗] balances [🚚]\nIf 🚚 = 15, 🚗 = [ ? ]", 
      options: ["A) 5", "B) 3", "C) 6", "D) 10", "E) 4"], 
      answer: "A) 5",
      parentPrompt: "Ask: 'Three toy cars balance one toy truck. If the truck is 15, what number added three times equals 15?'",
      elimination: "Since 3 cars equal 15, one car must be smaller than 15. Eliminate 10. 3 + 3 + 3 = 9 (too small). Eliminate 3."
    },
    {
      id: "m4_3",
      text: "Visual Grouping:\n● ● ●\n● ● ●\nWhich math match fits this group?",
      options: ["A) 2 x 3 = 6", "B) 3 + 3 = 6", "C) 2 + 2 + 2 = 6", "D) 3 x 3 = 9", "E) 2 x 2 = 4"],
      answer: "A) 2 x 3 = 6",
      parentPrompt: "Ask: 'Look at the dots. We have 2 rows, and each row has 3 dots. How do we write this as a multiplication group?'",
      elimination: "Count the total dots: there are 6. Eliminate 3x3=9 and 2x2=4. We want a multiplication equation, so eliminate the addition choice (B)."
    },
    { 
      id: "m4_4", 
      text: "Visual Grouping:\n[●●●●]  [●●●●]  [●●●●]\nTotal = [ ? ]", 
      options: ["A) 12", "B) 7", "C) 8", "D) 16", "E) 10"], 
      answer: "A) 12",
      parentPrompt: "Ask: 'We have 3 boxes, and each box has 4 circles. Let's count them or skip count by 4s: 4, 8, 12...'",
      elimination: "Two boxes alone have 8 circles. The total must be larger than 8. Eliminate 7 and 8."
    },
    { 
      id: "m4_5", 
      text: "Spatial Block Count:\n    +---+ +--+\n    |   | |  |\n+---+ +---+ +---+ +--+\n|   | |   | |   | |  |\n+---+ +---+ +---+ +--+\nTotal blocks = [ ? ]", 
      options: ["A) 6 blocks", "B) 4 blocks", "C) 8 blocks", "D) 5 blocks", "E) 7 blocks"], 
      answer: "A) 6 blocks",
      parentPrompt: "Ask the child to count the blocks in layers: 'How many blocks are on the bottom layer? How many on the top layer? Add them together.'",
      elimination: "There are 4 blocks on the bottom and 2 on top. The total must be larger than 4. Eliminate 4."
    },
    {
      id: "m4_6",
      text: "Solve this shape matrix:\n\n+-------------------+--------------------+\n| O (Large Circle)  | o (Small Circle)   |\n+-------------------+--------------------+\n| [X] (Large Shd Sq)|       [ ? ]        |\n+-------------------+----+---------------+",
      options: ["A) [x] (Small Shaded Sq)", "B) [X] (Large Shaded Sq)", "C) o (Small Circle)", "D) [ ] (Small Empty Sq)", "E) O (Large Circle)"],
      answer: "A) [x] (Small Shaded Sq)",
      parentPrompt: "Ask: 'Look at the top row. A large circle becomes a small circle (it shrinks). What should happen to the large shaded square in the bottom row?'",
      elimination: "The shape must stay a shaded square, only smaller. Eliminate circle C and unshaded square D."
    },
    {
      id: "m4_7",
      text: "Solve this shape matrix:\n\n+-------------------+--------------------+\n| / (Tilt Right)    | \\ (Tilt Left)      |\n+-------------------+--------------------+\n| p (Letter p)      |       [ ? ]        |\n+-------------------+----+---------------+",
      options: ["A) q (Mirrored p)", "B) p (Normal p)", "C) d (Inverted p)", "D) b (Mirrored inverted p)", "E) o (Circle)"],
      answer: "A) q (Mirrored p)",
      parentPrompt: "Ask: 'Look at the top row. The slash tilts right, then tilts left (it is mirrored). What is the mirrored version of the letter p?'",
      elimination: "Mirroring 'p' horizontally flips the loop to the other side, making it a 'q'. Eliminate 'p' (B) and upside-down 'd' (C)."
    },
    { 
      id: "m4_8", 
      text: "Pattern Series:\n3, 6, 12, 24, [ ? ]", 
      options: ["A) 48", "B) 36", "C) 30", "D) 40", "E) 60"], 
      answer: "A) 48",
      parentPrompt: "Ask: 'Look at how the numbers grow. 3 + 3 = 6, 6 + 6 = 12, 12 + 12 = 24. We are doubling the number. What is double 24?'",
      elimination: "The next number must be larger than 24. 30 and 36 are too small (not double). Eliminate them."
    },
    { 
      id: "m4_9", 
      text: "Pattern Series:\n1, 4, 9, 16, [ ? ]", 
      options: ["A) 25", "B) 20", "C) 30", "D) 36", "E) 24"], 
      answer: "A) 25",
      parentPrompt: "Ask: 'Look at the gaps. From 1 to 4 is +3. From 4 to 9 is +5. From 9 to 16 is +7. The gap grows by 2 each time (+3, +5, +7). What should we add next?'",
      elimination: "The gap is growing. We need to add 9 to 16. The result must be greater than 20. Eliminate 20 and 24."
    },
    { 
      id: "m4_10", 
      text: "Multi-Variable Balance:\n▲ + ▲ = 12\n▲ - ■ = 2\n■ = [ ? ]", 
      options: ["A) 4", "B) 6", "C) 2", "D) 8", "E) 5"], 
      answer: "A) 4",
      parentPrompt: "Ask: 'Two triangles make 12, so one triangle is 6. If 6 minus a square is 2, what is the square?'",
      elimination: "The triangle is 6. 6 minus square is 2, so the square must be smaller than 6. Eliminate 6 and 8."
    }
  ],
  5: [
    {
      id: "m5_1",
      text: "Mental Paper Folding:\n[⬜] (Square sheet)\n↓ (Fold top to bottom)\n[▭] (Rectangle)\n↓ (Fold left to right)\n[◪] (Small square)\n↓ (Cut triangle in bottom-right corner, punch circle hole in top-left)\nWhat does the unfolded paper look like?",
      options: [
        "A) A single diamond cut in the center, and four circle holes (one in each of the four outer corners).",
        "B) A single diamond cut in the center, and one circle hole in the top-left corner.",
        "C) Four triangles cut in the corners, and one circle in the center.",
        "D) A square cut in the center, and two circle holes in the top-left.",
        "E) Four diamond cuts in the corners, and zero circles."
      ],
      answer: "A) A single diamond cut in the center, and four circle holes (one in each of the four outer corners).",
      parentPrompt: "Ask the child to trace the folds. 'The bottom-right corner of the small square was the center of the big paper. A cut triangle there unfolds into a center diamond. The top-left corner was the outer corners of the paper. A hole there appears in all four corners.'",
      elimination: "Because the paper was folded twice, any cut on the outer corner must repeat 4 times when unfolded. Eliminate option B (which has only 1 circle hole)."
    },
    {
      id: "m5_2",
      text: "Figure Classification:\nLook at these figures:\n1) ▲ containing 3 stars\n2) ■ containing 4 stars\n3) ⬠ containing 5 stars\nWhich figure belongs to this group?",
      options: [
        "A) ⬡ (Hexagon) containing 6 stars",
        "B) ◯ (Circle) containing 5 stars",
        "C) ▭ (Rectangle) containing 5 stars",
        "D) ⬢ (Octagon) containing 6 stars",
        "E) ▲ (Triangle) containing 4 stars"
      ],
      answer: "A) ⬡ (Hexagon) containing 6 stars",
      parentPrompt: "Ask: 'Count the sides of the shape and the number of stars inside. 3 sides have 3 stars, 4 sides have 4 stars, 5 sides have 5 stars. What is the rule?'",
      elimination: "The number of sides must equal the number of stars. A hexagon has 6 sides and needs 6 stars. Eliminate circle (B) and rectangle (C)."
    },
    {
      id: "m5_3",
      text: "Solve this shape matrix:\n\n+-------------------------+-------------------------+\n| o . (Circle, dot right) | . o (Circle, dot left)  |\n+-------------------------+-------------------------+\n| [ ] . (Square, dot R)   |           [ ? ]         |\n+-------------------------+-------------------------+",
      options: [
        "A) . [ ] (Square, dot left)",
        "B) [ ] . (Square, dot right)",
        "C) . o (Circle, dot left)",
        "D) o . (Circle, dot right)",
        "E) [ ] (Square, no dot)"
      ],
      answer: "A) . [ ] (Square, dot left)",
      parentPrompt: "Ask: 'Look at the top row. The dot moves from the right side of the circle to the left side (horizontal flip). What should happen to the dot next to the square in the bottom row?'",
      elimination: "The shape must stay a square. Eliminate circle options C and D. The dot must flip sides. Eliminate B."
    },
    {
      id: "m5_4",
      text: "Advanced Balance:\n● = ■ + ■\n■ = ▲ + ▲ + ▲\n● = [ ? ]",
      options: ["A) 6 ▲ (Six Cones)", "B) 5 ▲ (Five Cones)", "C) 8 ▲ (Eight Cones)", "D) 4 ▲ (Four Cones)", "E) 9 ▲ (Nine Cones)"],
      answer: "A) 6 ▲ (Six Cones)",
      parentPrompt: "Ask: 'One sphere equals two cubes. Each cube equals three cones. If we replace both cubes with cones, how many cones do we need?'",
      elimination: "Since 1 cube is 3 cones, 2 cubes must be double that. The answer must be larger than 3. Eliminate 4."
    },
    {
      id: "m5_5",
      text: "Quantitative Classification:\nLook at these groups:\nGroup 1: ▲▲▲  ◯\nGroup 2: ▲▲▲▲  ◯◯\nGroup 3: ▲▲▲▲▲  ◯◯◯\nWhat is the rule?",
      options: [
        "A) The number of triangles is always 2 more than the number of circles.",
        "B) The number of circles is double the triangles.",
        "C) The number of triangles is equal to circles.",
        "D) The number of circles is 3 more than triangles.",
        "E) There is no numerical relationship."
      ],
      answer: "A) The number of triangles is always 2 more than the number of circles.",
      parentPrompt: "Ask: 'Let's count: Group 1 has 3 triangles and 1 circle. Group 2 has 4 and 2. Group 3 has 5 and 3. How many more triangles than circles are in each group?'",
      elimination: "Triangles: 3, 4, 5. Circles: 1, 2, 3. Triangles are always more. Eliminate B and C."
    },
    {
      id: "m5_6",
      text: "Solve this shape matrix:\n\n+--------------------+---------------------+\n| ▲ (Shaded Point Up)| ▶ (Shaded Point R)  |\n+--------------------+---------------------+\n| ▽ (Empty Point Dn) |        [ ? ]        |\n+--------------------+---------------------+",
      options: [
        "A) ◀ (Empty Point L)",
        "B) ▶ (Shaded Point R)",
        "C) ◀ (Shaded Point L)",
        "D) ▲ (Empty Point Up)",
        "E) ▼ (Shaded Point Dn)"
      ],
      answer: "A) ◀ (Empty Point L)",
      parentPrompt: "Ask: 'Look at the top row. The triangle rotates 90 degrees clockwise (up to right). Now look at the bottom row. If the empty triangle pointing down rotates 90 degrees clockwise, where will it point?'",
      elimination: "The triangle in the bottom row is empty, so the answer must be empty. Eliminate B, C, and E. Rotating pointing down 90 degrees clockwise points left."
    },
    {
      id: "m5_7",
      text: "Sequence Progression:\n2, 4, 8, 14, 22, [ ? ]",
      options: ["A) 32", "B) 30", "C) 34", "D) 28", "E) 36"],
      answer: "A) 32",
      parentPrompt: "Ask: 'Look at how much we add: from 2 to 4 is +2. From 4 to 8 is +4. From 8 to 14 is +6. From 14 to 22 is +8. The number we add goes up by 2 each time. What should we add to 22?'",
      elimination: "We added +2, +4, +6, +8. Next we must add +10. 22 + 10 is 32. Eliminate 28 and 30."
    },
    {
      id: "m5_8",
      text: "3D Spatial Reasoning:\nA large solid cube is made of 3x3x3 smaller blocks (27 blocks in total). If the outside of the entire large cube is painted red, how many of the small blocks have NO paint on them at all?",
      options: ["A) 1 block", "B) 8 blocks", "C) 0 blocks", "D) 2 blocks", "E) 4 blocks"],
      answer: "A) 1 block",
      parentPrompt: "Ask: 'Imagine a Rubik's cube. If we paint the outside, which block is completely protected from the paint?' Guide them to see that only the single block in the exact center is unpainted.",
      elimination: "All blocks on the outside touch at least one face. There is only 1 block buried in the center. Eliminate 0 and 8."
    },
    {
      id: "m5_9",
      text: "Advanced Numerical Pattern:\nLook at these pairs: (3, 9), (5, 25), (7, 49). Which pair belongs to the same pattern?",
      options: ["A) (9, 81)", "B) (8, 60)", "C) (10, 50)", "D) (6, 30)", "E) (4, 12)"],
      answer: "A) (9, 81)",
      parentPrompt: "Ask: 'Look at the pairs. 3 times 3 is 9. 5 times 5 is 25. 7 times 7 is 49. We are multiplying the number by itself. Which choice does this?'",
      elimination: "10 times 10 is 100, not 50. 6 times 6 is 36, not 30. Eliminate C and D."
    },
    {
      id: "m5_10",
      text: "Advanced Balance:\n🍎 + 🍌 = 12\n🍎 + 🍎 + 🍌 = 19\n🍌 = [ ? ]",
      options: ["A) 5", "B) 7", "C) 8", "D) 6", "E) 4"],
      answer: "A) 5",
      parentPrompt: "Ask: 'Look at the equations. An apple and a banana make 12. If we add another apple, it becomes 19. How much did the extra apple add? If the apple is 7, what is the banana?'",
      elimination: "The extra apple is 19 - 12 = 7. Since apple is 7 and apple + banana is 12, banana must be less than 7. Eliminate 7 and 8."
    }
  ]
};

export const READING_MATRIX = {
  1: [
    { 
      id: "r1_1", 
      text: "Phonics (Rhyming):\nWhich word rhymes with CAT and starts with the sound /b/?", 
      options: ["A) Bat", "B) Bag", "C) Car", "D) Hat"], 
      answer: "A) Bat",
      parentPrompt: "Ask: 'Which word rhymes with cat? Bat or bag? Let's check the starting sound /b/.'",
      elimination: "Bag starts with /b/ but does not rhyme. Hat rhymes but starts with /h/. Eliminate B and D.",
      translation: {
        chinese: "语音（押韵）：\n哪一个单词和 CAT（猫）押韵，并且以 /b/ 的音开头？",
        pinyin: "Yǔyīn (yāyùn):\nNǎ yīgè dāncí hé CAT (māo) yāyùn, bìngqiě yǐ /b/ de yīn kāitǒu?"
      }
    },
    { 
      id: "r1_2", 
      text: "Phonics (Consonant Blend):\nIn the word FLAG, what is the beginning blend sound you hear?", 
      options: ["A) /fl/", "B) /fg/", "C) /fa/", "D) /lh/"], 
      answer: "A) /fl/",
      parentPrompt: "Ask: 'Listen to the word FLAG. What two letter sounds do you hear blended at the start?'",
      elimination: "/fa/ is a vowel sound blend. /fg/ is not a real blend. Eliminate B and C.",
      translation: {
        chinese: "语音（辅音连缀）：\n在 FLAG（旗帜）这个单词中，你听到的开头双辅音发音是什么？",
        pinyin: "Yǔyīn (fǔyīn liánzhuì):\nZài FLAG (qízhì) zhège dāncí zhōng, nǐ tīngdào de kāitǒu shuāng fǔyīn fāyīn shì shénme?"
      }
    },
    { 
      id: "r1_3", 
      text: "Phonics (Syllable Segmentation):\nHow many parts (syllables) do you hear in the word REPTILE?", 
      options: ["A) 2 parts", "B) 1 part", "C) 3 parts", "D) 4 parts"], 
      answer: "A) 2 parts",
      parentPrompt: "Ask: 'Let's clap the word REP-TILE. How many claps did we make?'",
      elimination: "The word has two vowels sounds (rep-tile). It cannot be 1 part. Eliminate B.",
      translation: {
        chinese: "语音（音节拆分）：\n在 REPTILE（爬行动物）这个单词中，你听到了几个音节（部分）？",
        pinyin: "Yǔyīn (yīnjié chāifēn):\nZài REPTILE (páxíng dòngwù) zhège dāncí zhōng, nǐ tīngdàole jǐ gè yīnjié (bùfèn)?"
      }
    },
    { 
      id: "r1_4", 
      text: "Phonics (Letter Sound Substitution):\nIf you take the sound /c/ away from COLD, and add the sound /g/, what new word do you get?", 
      options: ["A) Gold", "B) Fold", "C) Told", "D) Bold"], 
      answer: "A) Gold",
      parentPrompt: "Ask: 'Say COLD without the /c/ sound. Now put /g/ at the beginning. What word is it?'",
      elimination: "Fold, Told, and Bold rhyme but start with the wrong sounds (/f/, /t/, /b/). Eliminate them.",
      translation: {
        chinese: "语音（首音替换）：\n如果你把 COLD（冷）开头的 /c/ 音去掉，换成 /g/ 音，你会得到什么新单词？",
        pinyin: "Yǔyīn (shǒuyīn tìhuàn):\nRúguǒ nǐ bǎ COLD (lěng) kāitǒu de /c/ yīn qùdiào, huàn chéng /g/ yīn, nǐ huì dédào shénme xīn dāncí?"
      }
    },
    {
      id: "r1_5",
      text: "Phonics (Phoneme Segmentation):\nWhat is the correct way to break the word JUMP into its individual sounds?",
      options: ["A) /j/-/u/-/m/-/p/", "B) /ju/-/mp/", "C) /j/-/ump/", "D) /jum/-/p/"],
      answer: "A) /j/-/u/-/m/-/p/",
      parentPrompt: "Ask: 'Let's count the sounds in JUMP on our fingers. /j/... /u/... /m/... /p/. How many sounds?'",
      elimination: "We need individual sounds. Options B, C, and D group letters together. Eliminate them.",
      translation: {
        chinese: "语音（音素分读）：\n将单词 JUMP（跳跃）拆分为单个发音的正确方法是什么？",
        pinyin: "Yǔyīn (yīnsù fēndú):\nJiāng dāncí JUMP (tiàoyuè) chāifēn wéi dāngè fāyīn de zhèngquè fāngfǎ shì shénme?"
      }
    },
    { 
      id: "r1_6", 
      text: "Story: Maya saw a small black puppy shivering by the garden gate. She carried it inside and wrapped it in a warm blue towel.\nQuestion: What did Maya find by the gate, and what did she wrap it in?", 
      options: ["A) A puppy; a warm blue towel.", "B) A kitten; a red blanket.", "C) A rabbit; a yellow towel.", "D) A bird; a brown nest."], 
      answer: "A) A puppy; a warm blue towel.",
      parentPrompt: "Ask your child to listen to the story, then ask: 'What animal was by the gate? What color was the towel?'",
      elimination: "The story says 'puppy' and 'blue towel'. Eliminate B (kitten) and C (rabbit) immediately.",
      translation: {
        chinese: "故事：玛雅在花园门口看到一只冻得发抖的小黑狗。她把它抱进屋里，用一条温暖的蓝色毛巾裹起来。\n问题：玛雅在门口发现了什么，她用什么裹着它？",
        pinyin: "Gùshì: Mǎyǎ zài huāyuán ménkǒu kàndào yī zhī dòng de fādǒu de xiǎo hēigǒu. Tā bǎ tā bào jìn wū lǐ, yòng yī tiáo wēnnuǎn de lánsè máojīn guǒ qǐlái.\nWèntí: Mǎyǎ zài ménkǒu fāxiànle shénme, tā yòng shénme guǒzhe tā?"
      }
    },
    { 
      id: "r1_7", 
      text: "Story: Liam and his dad built a birdhouse. They painted it bright green and hung it on the maple tree.\nQuestion: What did Liam build, and where did they hang it?", 
      options: ["A) A birdhouse; on the maple tree.", "B) A doghouse; under the porch.", "C) A swing; on the oak tree.", "D) A slide; near the fence."], 
      answer: "A) A birdhouse; on the maple tree.",
      parentPrompt: "Ask: 'What did Liam build? Where did they put it?'",
      elimination: "The story mentions 'birdhouse' and 'maple tree'. Eliminate B (doghouse) and D (slide).",
      translation: {
        chinese: "故事：利亚姆和爸爸建了一个鸟屋。他们把它漆成亮绿色，挂在枫树上。\n问题：利亚姆建了什么，他们把它挂在哪里？",
        pinyin: "Gùshì: Lìyǎmǔ hé bàba jiànle yīgè niǎowū. Tāmen bǎ tā qī chéng liàng lǜsè, guà zài fēngshù shàng.\nWèntí: Lìyǎmǔ jiànle shénme, tāmen bǎ tā guà zài nǎlǐ?"
      }
    },
    { 
      id: "r1_8", 
      text: "Iowa Analogy:\nA glove is to a hand as a sock is to a... [ ? ]", 
      options: ["A) foot", "B) head", "C) ear", "D) hand"], 
      answer: "A) foot",
      parentPrompt: "Ask: 'A glove goes on a hand. Where does a sock go?'",
      elimination: "Socks do not go on your head or ear. Eliminate B and C.",
      translation: {
        chinese: "概念类比：\n手套之于手，正如袜子之于…… [ ? ]",
        pinyin: "Gàiniàn lèibǐ:\nShǒutào zhī yú shǒu, zhèngrú wàzi zhī yú... [ ? ]"
      }
    },
    { 
      id: "r1_9", 
      text: "Iowa Analogy:\nA wheel is to a car as a wing is to an... [ ? ]", 
      options: ["A) airplane", "B) train", "C) boat", "D) bicycle"], 
      answer: "A) airplane",
      parentPrompt: "Ask: 'A car uses wheels to move. What uses wings to fly?'",
      elimination: "Trains, boats, and bicycles do not have wings. Eliminate B, C, and D.",
      translation: {
        chinese: "概念类比：\n车轮之于汽车，正如机翼之于…… [ ? ]",
        pinyin: "Gàiniàn lèibǐ:\nChēlún zhī yú qìchē, zhèngrú jīyì zhī yú... [ ? ]"
      }
    },
    { 
      id: "r1_10", 
      text: "Iowa Analogy:\nA key is to a lock as a coin is to a... [ ? ]", 
      options: ["A) piggy bank", "B) door", "C) letter box", "D) wallet"], 
      answer: "A) piggy bank",
      parentPrompt: "Ask: 'A key goes inside a lock. Where does a coin go inside?'",
      elimination: "A coin goes inside a piggy bank. A door and letter box are wrong. Eliminate B and C.",
      translation: {
        chinese: "概念类比：\n钥匙之于锁，正如硬币之于…… [ ? ]",
        pinyin: "Gàiniàn lèibǐ:\nYàoshi zhī yú suǒ, zhèngrú yìngbì zhī yú... [ ? ]"
      }
    }
  ],
  2: [
    {
      id: "r2_1",
      text: "Story: Oliver felt TIMID when he walked into the new classroom, so he held tightly onto his mom's hand.\nQuestion: What does the word 'timid' mean in this story?",
      vocab: { word: "timid", chinese: "胆怯的 / 羞怯的", pinyin: "dǎnxiǎo de / xiūqiè de", definition: "Shy, nervous, or easily frightened." },
      options: ["A) Shy and nervous", "B) Brave and excited", "C) Loud and playful", "D) Angry and mean"],
      answer: "A) Shy and nervous",
      parentPrompt: "Ask: 'Oliver held his mom's hand tightly in the new room. Do you think he felt brave or nervous?'",
      elimination: "Holding a parent's hand tightly shows he is not feeling 'brave' or 'loud'. Eliminate B and C.",
      translation: {
        chinese: "故事：当奥利弗走进新教室时，他感到胆怯（TIMID），因此紧紧抓着妈妈的手。\n问题：在这个故事中，'timid'是什么意思？",
        pinyin: "Gùshì: Dāng Àolìfú zǒujìn xīn jiàoshì shí, tā gǎndào dǎnqiè (TIMID), yīncǐ jǐnjǐn zhuāzhe māmā de shǒu.\nWèntí: Zài zhège gùshì zhōng, 'timid' shì shénme yìsi?"
      }
    },
    {
      id: "r2_2",
      text: "Story: The curious kitten spent the whole morning exploring the dark cupboards and corners.\nQuestion: What does the word 'curious' mean in this story?",
      vocab: { word: "curious", chinese: "好奇的", pinyin: "hàoqí de", definition: "Eager to know or learn about something." },
      options: ["A) Eager to learn or discover", "B) Lazy and sleepy", "C) Scared of everything", "D) Hungry for food"],
      answer: "A) Eager to learn or discover",
      parentPrompt: "Ask: 'The kitten is exploring cupboards and corners. Why do kittens explore? Because they want to find out what is there!'",
      elimination: "Exploring requires moving around, so the kitten is not 'lazy' or 'sleepy'. Eliminate B.",
      translation: {
        chinese: "故事：那只好奇（CURIOUS）的小猫花了一整个上午探索黑暗的柜子和角落。\n问题：在这个故事中，'curious'是什么意思？",
        pinyin: "Gùshì: Nà zhī hàoqí (CURIOUS) de xiǎomāo huāle yī zhěnggè shàngwǔ tànsuǒ hēi'àn de guìzi hé jiǎoluò.\nWèntí: Zài zhège gùshì zhōng, 'curious' shì shénme yìsi?"
      }
    },
    {
      id: "r2_3",
      text: "Story: Each snowflake has a UNIQUE pattern. No two snowflakes are exactly the same.\nQuestion: What does the word 'unique' mean in this story?",
      vocab: { word: "unique", chinese: "独特的", pinyin: "dútè de", definition: "Being the only one of its kind; special and different." },
      options: ["A) One of a kind; special", "B) Normal and common", "C) Cold and icy", "D) Heavy and hard"],
      answer: "A) One of a kind; special",
      parentPrompt: "Ask: 'If no two snowflakes are exactly the same, what does that mean about them? They are all special and different.'",
      elimination: "Since they are not the same, they are not 'normal' or 'common'. Eliminate B.",
      translation: {
        chinese: "故事：每片雪花都有独特（UNIQUE）的图案。没有两片雪花是完全相同的。\n问题：在这个故事中，'unique'是什么意思？",
        pinyin: "Gùshì: Měi piàn xuěhuā dōu yǒu dútè (UNIQUE) de tú'àn. Méiyǒu liǎng piàn xuěhuā shì wánquán xiāngtóng de.\nWèntí: Zài zhège gùshì zhōng, 'unique' shì shénme yìsi?"
      }
    },
    { 
      id: "r2_4", 
      text: "Iowa Analogy (Antonym):\nHot is to cold as big is to... [ ? ]", 
      options: ["A) small", "B) heavy", "C) warm", "D) soft"], 
      answer: "A) small",
      parentPrompt: "Ask: 'Hot and cold are opposites. What is the opposite of big?'",
      elimination: "Heavy is about weight, and soft is about touch. We need the opposite of size. Eliminate B and D.",
      translation: {
        chinese: "概念类比（反义）：\n热之于冷，正如大之于…… [ ? ]",
        pinyin: "Gàiniàn lèibǐ (fǎnyì):\nRè zhī yú lěng, zhèngrú dà zhī yú... [ ? ]"
      }
    },
    { 
      id: "r2_5", 
      text: "Iowa Analogy (Synonym):\nHappy is to cheerful as sad is to... [ ? ]", 
      options: ["A) gloomy", "B) excited", "C) angry", "D) tired"], 
      answer: "A) gloomy",
      parentPrompt: "Ask: 'Happy and cheerful mean the same thing. What word means the same as sad?'",
      elimination: "Excited is the opposite of sad. Angry is a different emotion. Eliminate B and C.",
      translation: {
        chinese: "概念类比（同义）：\n高兴之于开朗，正如悲伤之于…… [ ? ]",
        pinyin: "Gàiniàn lèibǐ (tóngyì):\nGāoxìng zhī yú kāilǎng, zhèngrú bēishāng zhī yú... [ ? ]"
      }
    },
    { 
      id: "r2_6", 
      text: "Iowa Analogy (Object-Covering):\nA scale is to a fish as a feather is to a... [ ? ]", 
      options: ["A) bird", "B) dog", "C) horse", "D) snake"], 
      answer: "A) bird",
      parentPrompt: "Ask: 'A fish's body is covered in scales. What animal's body is covered in feathers?'",
      elimination: "Dogs have fur, and snakes have scales. Eliminate B and D.",
      translation: {
        chinese: "概念类比（特征覆盖）：\n鱼鳞之于鱼，正如羽毛之于…… [ ? ]",
        pinyin: "Gàiniàn lèibǐ (tèzhēng fùgài):\nYúlín zhī yú yú, zhèngrú yǔmáo zhī yú... [ ? ]"
      }
    },
    { 
      id: "r2_7", 
      text: "Iowa Analogy (Category):\nAn apple is to fruit as a carrot is to a... [ ? ]", 
      options: ["A) vegetable", "B) meat", "C) grain", "D) dairy"], 
      answer: "A) vegetable",
      parentPrompt: "Ask: 'An apple is a type of fruit. What type of food is a carrot?'",
      elimination: "A carrot grows in the ground and is not meat or dairy. Eliminate B and D.",
      translation: {
        chinese: "概念类比（类别）：\n苹果之于水果，正如胡萝卜之于…… [ ? ]",
        pinyin: "Gàiniàn lèibǐ (lèibié):\nPíngguǒ zhī yú shuǐguǒ, zhèngrú húluóbo zhī yú... [ ? ]"
      }
    },
    {
      id: "r2_8",
      text: "Story: The playroom was in complete CHAOS after the party, with toys, boxes, and paper scattered everywhere.\nQuestion: What does the word 'chaos' mean in this story?",
      vocab: { word: "chaos", chinese: "混乱 / 杂乱", pinyin: "hùnluàn / záluàn", definition: "Complete disorder or confusion." },
      options: ["A) Complete disorder or mess", "B) Clean and organized", "C) Quiet and peaceful", "D) Bright and sunny"],
      answer: "A) Complete disorder or mess",
      parentPrompt: "Ask: 'If toys and papers are scattered everywhere, is the room clean or messy?'",
      elimination: "Scattered toys are the opposite of 'clean' or 'quiet'. Eliminate B and C.",
      translation: {
        chinese: "故事：聚会后，游戏室里一片混乱（CHAOS），玩具、盒子和纸张散落得满地都是。\n问题：在这个故事中，'chaos'是什么意思？",
        pinyin: "Gùshì: Jùhuì hòu, yóuxìshì lǐ yīpiàn hùnluàn (CHAOS), wánjù, hézi hé zhǐzhāng sànluò de mǎndì dōu shì.\nWèntí: Zài zhège gùshì zhōng, 'chaos' shì shénme yìsi?"
      }
    },
    {
      id: "r2_9",
      text: "Story: The water in the lake was TRANQUIL, looking like a smooth, quiet sheet of glass.\nQuestion: What does the word 'tranquil' mean in this story?",
      vocab: { word: "tranquil", chinese: "平静的 / 宁静的", pinyin: "píngjìng de / níngjìng de", definition: "Calm, quiet, and peaceful." },
      options: ["A) Calm and peaceful", "B) Wild and wavy", "C) Freezing cold", "D) Hot and sticky"],
      answer: "A) Calm and peaceful",
      parentPrompt: "Ask: 'The water looks like smooth, quiet glass. Does that sound calm or wavy?'",
      elimination: "'Smooth' and 'quiet' mean it cannot be 'wild' or 'wavy'. Eliminate B.",
      translation: {
        chinese: "故事：湖水十分平静（TRANQUIL），看起来像一面光滑、宁静的镜子。\n问题：在这个故事中，'tranquil'是什么意思？",
        pinyin: "Gùshì: Húshuǐ shífēn píngjìng (TRANQUIL), kàn qǐlái xiàng yī miàn guānghuá, níngjìng de jìngzi.\nWèntí: Zài zhège gùshì zhōng, 'tranquil' shì shénme yìsi?"
      }
    },
    { 
      id: "r2_10", 
      text: "Iowa Analogy (Antonym):\nDay is to night as start is to... [ ? ]", 
      options: ["A) finish", "B) begin", "C) play", "D) run"], 
      answer: "A) finish",
      parentPrompt: "Ask: 'Day and night are opposites. What is the opposite of start?'",
      elimination: "Begin means the same as start. Play and run are actions. Eliminate B, C, and D.",
      translation: {
        chinese: "概念类比（反义）：\n白天之于黑夜，正如开始之于…… [ ? ]",
        pinyin: "Gàiniàn lèibǐ (fǎnyì):\nBáitiān zhī yú hēiyè, zhèngrú kāishǐ zhī yú... [ ? ]"
      }
    }
  ],
  3: [
    {
      id: "r3_1",
      text: "Story: Joy saw a girl at the park fall off her scooter. Joy immediately ran over, helped the girl stand up, and brushed the dirt off her knees. Joy offered to walk back with her to her parents.\nQuestion: Why did Joy run over to the girl?",
      options: [
        "A) To help her because she fell and was hurt.",
        "B) To ask to borrow her scooter.",
        "C) To play tag with her friends.",
        "D) To tell her to leave the park."
      ],
      answer: "A) To help her because she fell and was hurt.",
      parentPrompt: "Ask your child to retell the story first. Ask: 'What did Joy do when the girl fell? Why did she brush the dirt off?'",
      elimination: "The story doesn't mention tag or borrowing. Eliminate B and C. Joy's actions were kind, not mean. Eliminate D.",
      translation: {
        chinese: "故事：乔伊看到一个小女孩在公园里从滑板车上摔了下来。乔伊立刻跑过去，扶起那个女孩，并拍掉了她膝盖上的泥土。乔伊还提出陪她一起走回父母身边。\n问题：为什么乔伊跑向那个女孩？",
        pinyin: "Gùshì: Qiáoyī kàndào yīgè xiǎo nǚhái zài gōngyuán lǐ cóng huábǎnchē shàng shuāile xiàlái. Qiáoyī lìkè pǎo guòqù, fú qǐ nàgè nǚhái, bìng pāidiàole tā xīgài shàng de nítǔ. Qiáoyī hái tíchū péi tā yīqǐ zǒu huí fùmǔ shēnbiān.\nWèntí: Wèishéme Qiáoyī pǎo xiàng nàgè nǚhái?"
      }
    },
    {
      id: "r3_2",
      text: "Story: Toby desperately wanted to join the soccer game. He stood on the edge of the field for ten minutes, kicking a ball against the fence and looking at the players. When the coach called him over, Toby's face lit up.\nQuestion: Why was Toby kicking the ball against the fence?",
      options: [
        "A) He wanted the players or coach to notice him and invite him to play.",
        "B) He was angry at the soccer ball.",
        "C) He was practicing scoring goals by himself.",
        "D) The coach told him he couldn't play soccer."
      ],
      answer: "A) He wanted the players or coach to notice him and invite him to play.",
      parentPrompt: "Ask: 'Why was Toby standing on the edge looking at the players? What did he want?'",
      elimination: "His face 'lit up' when called over, so he wasn't angry. Eliminate B. He was looking at the players, not just training. Eliminate C.",
      translation: {
        chinese: "故事：托比非常渴望加入足球比赛。他在球场边缘站了十分钟，一边把球踢向围栏，一边看着队员们。当教练把他叫过去时，托比的脸立刻亮了起来。\n问题：为什么托比把球踢向围栏？",
        pinyin: "Gùshì: Tuōbǐ fēicháng kěwàng jiārù zúqiú bǐsài. Tā zài qiúchǎng biānyuán zhànle shífēnzhōng, yībiān bǎ qiú tī xiàng wéilán, yībiān kànzhe duìyuánmen. Dāng jiàoliàn bǎ tā jiào guòqù shí, Tuōbǐ de liǎn lìkè liàng le qǐlái.\nWèntí: Wèishéme Tuōbǐ bǎ qiú tī xiàng wéilán?"
      }
    },
    {
      id: "r3_3",
      text: "Story: Maya worked for an hour building a house out of cards. Just as she finished, the front door opened, a gust of wind blew in, and the card house collapsed. Maya sighed, sat down, and began putting the cards back into piles to start again.\nQuestion: Why did the card house collapse?",
      options: [
        "A) A gust of wind blew in from the open front door.",
        "B) Maya knocked it down because she was angry.",
        "C) Her baby brother crawled by and bumped it.",
        "D) The cards were too old and slippery."
      ],
      answer: "A) A gust of wind blew in from the open front door.",
      parentPrompt: "Ask: 'What happened right before the card house fell down?'",
      elimination: "The text says 'a gust of wind blew in, and the card house collapsed'. Brother is not in the story. Eliminate C.",
      translation: {
        chinese: "故事：玛雅花了一个小时用纸牌搭建了一座小房子。就在她刚完成的时候，前门开了，一阵大风吹进来，纸牌屋倒塌了。玛雅叹了口气，坐下来，开始把纸牌重新叠好，准备重新开始。\n问题：为什么纸牌屋倒塌了？",
        pinyin: "Gùshì: Mǎyǎ huāle yīgè xiǎoshí yòng zhǐpái dàjiànle yīzuò xiǎo fángzi. Jiù zài tā gāng wánchéng de shíhòu, qiánmén kāile, yīzhèn dàfēng chuī jìnlái, zhǐpái wū dǎotāle. Mǎyǎ tànle kǒu qì, zuò xiàlái, kāishǐ bǎ zhǐpái chóngxīn dié hǎo, zhǔnbèi chóngxīn kāishǐ.\nWèntí: Wèishéme zhǐpái wū dǎotāle?"
      }
    },
    {
      id: "r3_4",
      text: "Story: Leo was RELUCTANT to try the new food, but after taking a tiny bite, he smiled and asked for a full plate.\nQuestion: What does 'reluctant' mean in this story?",
      vocab: { word: "reluctant", chinese: "不情愿的", pinyin: "bù qíngyuàn de", definition: "Unwilling and hesitant; not wanting to do something." },
      options: [
        "A) Unwilling and hesitant.",
        "B) Happy and hungry.",
        "C) Fast and noisy.",
        "D) Sleepy and tired."
      ],
      answer: "A) Unwilling and hesitant.",
      parentPrompt: "Ask: 'Leo only took a tiny bite at first, but then he asked for a full plate. How did he feel about trying it at the start?'",
      elimination: "He only took a tiny bite, so he wasn't 'happy and hungry' at first. Eliminate B.",
      translation: {
        chinese: "故事：里奥对尝试这种新食物感到有些不情愿（RELUCTANT），但尝了一小口后，他笑了，并要了满满一盘。\n问题：在这个故事中，'reluctant'是什么意思？",
        pinyin: "Gùshì: Lǐ'ào duì chángshì zhèzhǒng xīn shíwù gǎndào yǒuxiē bù qíngyuàn (RELUCTANT), dàn chángle yī xiǎokǒu hòu, tā xiàole, bìng yàole mǎnmǎn yī pán.\nWèntí: Zài zhège gùshì zhōng, 'reluctant' shì shénme yìsi?"
      }
    },
    {
      id: "r3_5",
      text: "Story: The children were ECSTATIC when they saw the first snowflakes of winter falling outside the school window.\nQuestion: What does 'ecstatic' mean in this story?",
      vocab: { word: "ecstatic", chinese: "狂喜 / 极其兴奋", pinyin: "kuángxǐ / jíqí xīngfèn", definition: "Overwhelmingly happy or excited." },
      options: [
        "A) Extremely happy or excited.",
        "B) Angry and disappointed.",
        "C) Cold and shivering.",
        "D) Quiet and bored."
      ],
      answer: "A) Extremely happy or excited.",
      parentPrompt: "Ask: 'How do kids feel when they see the first snow? They get excited!'",
      elimination: "Snow brings excitement, not boredom or anger. Eliminate B and D.",
      translation: {
        chinese: "故事：当孩子们看到今年冬天的第一片雪花从学校窗外飘落时，他们感到狂喜（ECSTATIC）。\n问题：在这个故事中，'ecstatic'是什么意思？",
        pinyin: "Gùshì: Dāng háizimen kàndào jīnnián dōngtiān de dì-yī piàn xuěhuā cóng xuéxiào chuāngwài piāoluò shí, tāmen gǎndào kuángxǐ (ECSTATIC).\nWèntí: Zài zhège gùshì zhōng, 'ecstatic' shì shénme yìsi?"
      }
    },
    {
      id: "r3_6",
      text: "Story: Ethan was COOPERATIVE during the group project, making sure everyone got a turn to write and color.\nQuestion: What does 'cooperative' mean in this story?",
      vocab: { word: "cooperative", chinese: "合作的 / 愿意配合的", pinyin: "hézuò de / yuànyì pèihé de", definition: "Working well together with others toward a common goal." },
      options: [
        "A) Working well together.",
        "B) Arguing and fighting.",
        "C) Working completely alone.",
        "D) Fast and sloppy."
      ],
      answer: "A) Working well together.",
      parentPrompt: "Ask: 'Ethan made sure everyone got a turn. Is he working alone or working with others?'",
      elimination: "Giving everyone a turn is the opposite of 'working completely alone' or 'arguing'. Eliminate B and C.",
      translation: {
        chinese: "故事：伊桑在小组活动中表现得非常合作（COOPERATIVE），确保每个人都有机会写字和涂色。\n问题：在这个故事中，'cooperative'是什么意思？",
        pinyin: "Gùshì: Yīsāng zài xiǎozǔ huódòng zhōng biǎoxiàn de fēicháng hézuò (COOPERATIVE), quèbǎo měigè rén dōu yǒu jīhuì xiězì hé túsè.\nWèntí: Zài zhège gùshì zhōng, 'cooperative' shì shénme yìsi?"
      }
    },
    {
      id: "r3_7",
      text: "Story: Zoe saw a lost dog in the park. She stood very still, kept her voice quiet, and slowly held out her hand for the dog to sniff. After a moment, the dog licked her finger, and Zoe smiled.\nQuestion: Why did Zoe stand very still and speak quietly?",
      options: [
        "A) She didn't want to frighten the lost dog.",
        "B) She was frozen with fear of the dog.",
        "C) Her father told her to play a game of freeze.",
        "D) She was trying to hide behind a tree."
      ],
      answer: "A) She didn't want to frighten the lost dog.",
      parentPrompt: "Ask: 'Why would someone be gentle and quiet around a lost dog?'",
      elimination: "Zoe smiled at the end, so she wasn't 'frozen with fear'. Eliminate B. Father is not in the story. Eliminate C.",
      translation: {
        chinese: "故事：佐伊在公园里看到一只迷路的小狗。她静静地站着，声音放得很低，慢慢地伸出右手让狗闻。过了一会儿，小狗舔了舔她的手指，佐伊笑了。\n问题：为什么佐伊要静静地站着，并且小声说话？",
        pinyin: "Gùshì: Zuǒyī zài gōngyuán lǐ kàndào yī zhī mílù de xiǎogǒu. Tā jìngjìng de zhànzhe, shēngyīn fàng de hěn dī, mànmàn de shēn chū yòushǒu ràng gǒu wén. Guòle yīhuǐ'er, xiǎogǒu tiǎnle tiǎn tā de shǒuzhǐ, Zuǒyī xiàole.\nWèntí: Wèishéme Zuǒyī yào jìngjìng de zhànzhe, bìngqiě xiǎoshēng shuōhuà?"
      }
    },
    {
      id: "r3_8",
      text: "Story: Clara's teacher noticed that Clara was DILIGENT because she always checked her math work twice before turning it in.\nQuestion: What does 'diligent' mean in this story?",
      vocab: { word: "diligent", chinese: "勤奋的 / 认真细致的", pinyin: "qínfèn de / rènzhēn xìzhì de", definition: "Showing care and hard-working effort in one's work." },
      options: [
        "A) Hard-working and careful.",
        "B) Lazy and distracted.",
        "C) Fast and noisy.",
        "D) Funny and silly."
      ],
      answer: "A) Hard-working and careful.",
      parentPrompt: "Ask: 'Clara checks her work twice. Does that make her lazy or careful?'",
      elimination: "Checking twice shows she is not 'lazy' or 'distracted'. Eliminate B.",
      translation: {
        chinese: "故事：克拉拉的老师注意到克拉拉非常勤奋（DILIGENT），因为她总是在交卷前仔细检查两次数学作业。\n问题：在这个故事中，'diligent'是什么意思？",
        pinyin: "Gùshì: Kèlālā de lǎoshī zhùyì dào Kèlālā fēicháng qínfèn (DILIGENT), yīnwèi tā zǒngshì zài jiāojuàn qián zǐxì jiǎnchá liǎng cì shùxué zuòyè.\nWèntí: Zài zhège gùshì zhōng, 'diligent' shì shénme yìsi?"
      }
    },
    {
      id: "r3_9",
      text: "Story: The giant oak tree in the town square was ANCIENT. It had stood there since the town was first built.\nQuestion: What does 'ancient' mean in this story?",
      vocab: { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de", definition: "Very old; belonging to times long past." },
      options: [
        "A) Very old.",
        "B) Young and small.",
        "C) Shiny and new.",
        "D) Tall and green."
      ],
      answer: "A) Very old.",
      parentPrompt: "Ask: 'The tree has been there since the town was first built. Does that make it new or old?'",
      elimination: "'Since the town was first built' means it cannot be 'shiny and new'. Eliminate C.",
      translation: {
        chinese: "故事：小镇广场上的那棵巨大橡树非常古老（ANCIENT）。自从这个小镇刚建立起它就耸立在那了。\n问题：在这个故事中，'ancient'是什么意思？",
        pinyin: "Gùshì: Xiǎozhèn guǎngchǎng shàng de nà kē jùdà xiàngshù fēicháng gǔlǎo (ANCIENT). Zìcóng zhège xiǎozhèn gāng jiànlì qǐ tā jiù sǒnglì zài nà le.\nWèntí: Zài zhège gùshì zhōng, 'ancient' shì shénme yìsi?"
      }
    },
    {
      id: "r3_10",
      text: "Story: Maya showed COMPASSION by helping a crying classmate find his lost lunch box at the playground.\nQuestion: What does 'compassion' mean in this story?",
      vocab: { word: "compassion", chinese: "同情心 / 关怀", pinyin: "tóngqíngxīn / guānhuái", definition: "Empathy and care for the sufferings or difficulties of others." },
      options: [
        "A) Empathy and care for others.",
        "B) Anger and jealousy.",
        "C) Selfishness and greed.",
        "D) Fear and worry."
      ],
      answer: "A) Empathy and care for others.",
      parentPrompt: "Ask: 'Maya helped a crying classmate. What kind of feeling makes someone help a crying friend?'",
      elimination: "Helping someone shows care, not 'selfishness' or 'anger'. Eliminate B and C.",
      translation: {
        chinese: "故事：玛雅通过帮助操场上哭泣的同班同学寻找丢失的午餐盒，展现了她的关怀（COMPASSION）。\n问题：在这个故事中，'compassion'是什么意思？",
        pinyin: "Gùshì: Mǎyǎ tōngguò bāngzhù cāochǎng shàng kūqì de tóngbān tóngxué xúnzhǎo diūshī de wǔcānhé, zhǎnxiànle tā de guānhuái (COMPASSION).\nWèntí: Zài zhège gùshì zhōng, 'compassion' shì shénme yìsi?"
      }
    }
  ],
  4: [
    { 
      id: "r4_1", 
      text: "Iowa Analogy:\nMicroscope is to tiny as Telescope is to... [ ? ]", 
      options: ["A) distant", "B) nearby", "C) colorful", "D) shiny"], 
      answer: "A) distant",
      parentPrompt: "Ask: 'A microscope helps us see tiny things. A telescope helps us see what kind of things?'",
      elimination: "Telescopes look at stars and planets, which are very far away (distant). Eliminate B (nearby).",
      translation: {
        chinese: "概念类比：\n显微镜之于微小，正如望远镜之于…… [ ? ]",
        pinyin: "Gàiniàn lèibǐ:\nXiǎowēijìng zhī yú wēixiǎo, zhèngrú wàngyuǎnjìng zhī yú... [ ? ]"
      }
    },
    { 
      id: "r4_2", 
      text: "Iowa Analogy:\nChef is to knife as Painter is to... [ ? ]", 
      options: ["A) brush", "B) hammer", "C) stove", "D) scale"], 
      answer: "A) brush",
      parentPrompt: "Ask: 'A chef uses a knife to cut. What tool does a painter use?'",
      elimination: "A painter does not use a hammer or scale. Eliminate B and D.",
      translation: {
        chinese: "概念类比：\n厨师之于刀具，正如画家之于…… [ ? ]",
        pinyin: "Gàiniàn lèibǐ:\nChúshī zhī yú dāojù, zhèngrú huàjiā zhī yú... [ ? ]"
      }
    },
    { 
      id: "r4_3", 
      text: "Iowa Analogy:\nFinger is to hand as Leaf is to... [ ? ]", 
      options: ["A) branch", "B) root", "C) bark", "D) dirt"], 
      answer: "A) branch",
      parentPrompt: "Ask: 'A finger is a small part of a hand. A leaf is a small part of what?'",
      elimination: "Leaves grow on branches, not roots or bark. Eliminate B and C.",
      translation: {
        chinese: "概念类比（局部与整体）：\n手指之于手，正如树叶之于…… [ ? ]",
        pinyin: "Gàiniàn lèibǐ (júbù yǔ zhěngtǐ):\nShǒuzhǐ zhī yú shǒu, zhèngrú shùyè zhī yú... [ ? ]"
      }
    },
    { 
      id: "r4_4", 
      text: "Iowa Analogy:\nSeed is to plant as Egg is to... [ ? ]", 
      options: ["A) bird", "B) nest", "C) shell", "D) feather"], 
      answer: "A) bird",
      parentPrompt: "Ask: 'A plant grows from a seed. What grows from an egg?'",
      elimination: "A nest and shell are parts or homes, but not what grows out of the egg. Eliminate B and C.",
      translation: {
        chinese: "概念类比（来源与产物）：\n种子之于植物，正如卵/蛋之于…… [ ? ]",
        pinyin: "Gàiniàn lèibǐ (láiyuán yǔ chǎnwù):\nZhǒngzǐ zhī yú zhíwù, zhèngrú luǎn/dàn zhī yú... [ ? ]"
      }
    },
    { 
      id: "r4_5", 
      text: "Iowa Analogy:\nRain is to flood as Spark is to... [ ? ]", 
      options: ["A) fire", "B) water", "C) smoke", "D) ash"], 
      answer: "A) fire",
      parentPrompt: "Ask: 'A lot of rain causes a flood. A small spark can cause a what?'",
      elimination: "Spark is hot and relates to fire. Water is the opposite. Eliminate B.",
      translation: {
        chinese: "概念类比（因果）：\n下雨之于洪水，正如火星之于…… [ ? ]",
        pinyin: "Gàiniàn lèibǐ (yīnguǒ):\nXiàyǔ zhī yú hóngshuǐ, zhèngrú huǒxīng zhī yú... [ ? ]"
      }
    },
    {
      id: "r4_6",
      text: "Passage: Honeybees are amazing builders. They make honeycombs using wax from their bodies. The honeycomb has many tiny six-sided rooms called cells, which are used to store honey and raise baby bees.\nQuestion: What is the main idea of this passage?",
      options: [
        "A) Honeybees build honeycombs to store honey and raise babies.",
        "B) Honeybees make honeycombs out of wood from trees.",
        "C) Honeybees are scary insects that sting.",
        "D) Honeybees fly around colorful flowers in spring."
      ],
      answer: "A) Honeybees build honeycombs to store honey and raise babies.",
      parentPrompt: "Ask: 'What is this short story mostly about? Is it about bees building honeycombs, or about wood?'",
      elimination: "The story says they use wax, not wood. Eliminate B. Stinging is not mentioned. Eliminate C.",
      translation: {
        chinese: "短文：蜜蜂是了不起的建筑师。它们用身体分泌的蜡来制作蜂巢。蜂巢有许多微小的六角形房间，称为巢房，用来储存蜂蜜和抚育小蜜蜂。\n问题：这篇短文的主要意思是什么？",
        pinyin: "Duǎnwén: Mìfēng shì liǎobùqǐ de jiànzhùshī. Tāmen yòng shēntǐ fēnmì de là lái zhìzuò fēngcháo. Fēngcháo yǒu xǔduō wēixiǎo de liùjiǎoxíng fángjiān, chēnwéi cháofáng, yònglái chǔncún fēngmì hé fǔyù xiǎo mìfēng.\nWèntí: Zhè piān duǎnwén de zhǔyào yìsi shì shénme?"
      }
    },
    {
      id: "r4_7",
      text: "Passage: Seeds travel in different ways. Some seeds, like dandelions, have fluffy hairs and travel on the wind. Other seeds are inside sweet fruit that animals eat; the animals drop the seeds in new places.\nQuestion: What is the main idea of this passage?",
      options: [
        "A) How seeds travel to new places in different ways.",
        "B) Why animals love to eat sweet fruit seeds.",
        "C) Dandelions are weeds that grow in gardens.",
        "D) Wind is very strong in the spring season."
      ],
      answer: "A) How seeds travel to new places in different ways.",
      parentPrompt: "Ask: 'What is the first sentence? It says: Seeds travel in different ways. The rest explains how.'",
      elimination: "The passage talks about both wind and animals, so the main idea must cover both. Eliminate B (only animals) and D (only wind).",
      translation: {
        chinese: "短文：种子以不同的方式传播。有些种子，比如蒲公英，有毛茸茸的细丝，随风飘动。其他种子长在甜美的水果中被动物吃掉，动物会将种子排泄在新的地方。\n问题：这篇短文的主要意思是什么？",
        pinyin: "Duǎnwén: Zhǒngzǐ yǐ bùtóng de fāngshì chuánbō. Yǒuxiē zhǒngzǐ, bǐrú púgōngyīng, yǒu máoróngróng de xìsī, suí fēng piāodòng. Qítā zhǒngzǐ zhǎng zài tiánměi de shuǐguǒ zhōng bèi dòngwù chī diào, dòngwù huì jiāng zhǒngzǐ páixiè zài xīn de dìfāng.\nWèntí: Zhè piān duǎnwén de zhǔyào yìsi shì shénme?"
      }
    },
    {
      id: "r4_8",
      text: "Situation: A farmer was impatient for his crops to grow, so he pulled on the seedlings to help them grow taller. The next day, all the plants had withered and died.\nIdiom: 拔苗助长 (bá miáo zhù zhǎng) - literally 'pulling up seedlings to help them grow.' It means spoiling things by forcing rapid progress.\nQuestion: Explain how the farmer's action matches this idiom.",
      idiom: { text: "拔苗助长", pinyin: "bá miáo zhù zhǎng", meaning: "Pulling up seedlings to help them grow; spoiling things by impatience." },
      options: [
        "A) The farmer ruined the crops by trying to force them to grow instead of letting them grow naturally.",
        "B) The farmer was a hard worker who helped the crops grow faster.",
        "C) The farmer watered the plants too much.",
        "D) The farmer cut down the crops before winter."
      ],
      answer: "A) The farmer ruined the crops by trying to force them to grow instead of letting them grow naturally.",
      parentPrompt: "Ask: 'What did the farmer do? He pulled them. What happened? They died. Why did they die? Because he forced them.'",
      elimination: "The plants died, so he did not 'help' them. Eliminate B. Water is not mentioned. Eliminate C.",
      translation: {
        chinese: "情境：一个农民急着让庄稼长大，于是把禾苗往上拔以帮它们长高。第二天，所有植物都枯死萎缩了。\n成语：拔苗助长 (bá miáo zhù zhǎng)\n问题：农民的行为如何契合这个成语的意思？",
        pinyin: "Qíngjìng: Yīgè nóngmín jízhe ràng zhuāngjià zhǎngdà, yúshì bǎ hémiáo wǎng shàng bá yǐ bāng tāmen zhǎnggāo. Dì-èrtiān, suǒyǒu zhíwù dōu kū sǐ wēisuō le.\nChéngyǔ: Bá miáo zhù zhǎng\nWèntí: Nóngmín de xíngwéi rúhé qìhé zhège chéngyǔ de yìsi?"
      }
    },
    {
      id: "r4_9",
      text: "Situation: Joy spent hours drawing a beautiful picture, but then she kept adding more paint and details until the paper tore and the drawing was ruined.\nIdiom: 画蛇添足 (huà shé tiān zú) - literally 'to draw a snake and add feet.' It means to ruin something by adding unnecessary details.\nQuestion: Explain how Joy's situation matches this idiom.",
      idiom: { text: "画蛇添足", pinyin: "huà shé tiān zú", meaning: "To draw a snake and add feet; to ruin something by overdoing it." },
      options: [
        "A) Joy ruined her picture by adding unnecessary details, just like drawing feet on a snake.",
        "B) Joy drew a beautiful snake that had four little green feet.",
        "C) Joy worked hard and created a perfect painting.",
        "D) Joy used too much water to clean her brushes."
      ],
      answer: "A) Joy ruined her picture by adding unnecessary details, just like drawing feet on a snake.",
      parentPrompt: "Ask: 'Joy's picture was ruined because she kept adding too many details. How is that like adding feet to a snake?'",
      elimination: "Her painting was ruined, not perfect. Eliminate C. Snakes do not have feet, so adding them ruins the drawing. Eliminate B.",
      translation: {
        chinese: "情境：乔伊花了几个小时画了一幅美丽的画，但随后她不停地添加更多颜料和细节，直到纸张破裂，画作被毁。\n成语：画蛇添足 (huà shé tiān zú)\n问题：乔伊的遭遇如何契合这个成语的意思？",
        pinyin: "Qíngjìng: Qiáoyī huāle jǐ gè xiǎoshí huàle yīfú měilì de huà, dàn suíhòu tā bùtíng de tiānjiā gèngduō yánliào hé xìjié, zhídào zhǐzhāng pòliè, huàzuò bèi huǐ.\nChéngyǔ: Huà shé tiān zú\nWèntí: Qiáoyī de zāoyù rúhé qìhé zhège chéngyǔ de yìsi?"
      }
    },
    { 
      id: "r4_10", 
      text: "Iowa Analogy:\nIce is to solid as Water is to... [ ? ]", 
      options: ["A) liquid", "B) gas", "C) vapor", "D) cloud"], 
      answer: "A) liquid",
      parentPrompt: "Ask: 'Ice is a solid form of water. What form is normal drinking water?'",
      elimination: "Water is not gas or vapor. Eliminate B and C.",
      translation: {
        chinese: "概念类比：\n冰之于固体，正如水之于…… [ ? ]",
        pinyin: "Gàiniàn lèibǐ:\nBīng zhī yú gùtǐ, zhèngrú shuǐ zhī yú... [ ? ]"
      }
    }
  ],
  5: [
    {
      id: "r5_1",
      text: "Which word does NOT belong in this group:\nCircle, Triangle, Sphere, Square?\nExplain why.",
      options: ["A) Sphere", "B) Circle", "C) Square", "D) Triangle"],
      answer: "A) Sphere",
      parentPrompt: "Ask: 'Look at Circle, Triangle, and Square. They are all flat (2D) shapes. What kind of shape is a Sphere (like a ball)?'",
      elimination: "Sphere is 3D, while the others are flat 2D shapes. Eliminate flat shapes.",
      translation: {
        chinese: "排异找不同：\n哪一个单词不属于这一组：圆形、三角形、球体、正方形？请解释原因。",
        pinyin: "Páiyì zhǎo bùtóng:\nNǎ yīgè dāncí bù shǔyú zhè yī zǔ: Yuánxíng, Sānjiǎoxíng, Qiútǐ, Zhèngfāngxíng? Qǐng jiěshì yuányīn."
      }
    },
    {
      id: "r5_2",
      text: "Which word does NOT belong in this group:\nRobin, Eagle, Butterfly, Penguin?\nExplain why.",
      options: ["A) Butterfly", "B) Penguin", "C) Eagle", "D) Robin"],
      answer: "A) Butterfly",
      parentPrompt: "Ask: 'Robin, Eagle, and Penguin are all birds. Is a butterfly a bird?'",
      elimination: "Robin, Eagle, and Penguin have feathers and are birds. Butterfly is an insect. Eliminate birds.",
      translation: {
        chinese: "排异找不同：\n哪一个单词不属于这一组：知更鸟、老鹰、蝴蝶、企鹅？请解释原因。",
        pinyin: "Páiyì zhǎo bùtóng:\nNǎ yīgè dāncí bù shǔyú zhè yī zǔ: Zhīgēngniǎo, Lǎoyīng, Húdié, Qǐ'é? Qǐng jiěshì yuányīn."
      }
    },
    {
      id: "r5_3",
      text: "Which word does NOT belong in this group:\nCrocodile, Frog, Snake, Lizard?\nExplain why.",
      options: ["A) Frog", "B) Snake", "C) Lizard", "D) Crocodile"],
      answer: "A) Frog",
      parentPrompt: "Ask: 'Crocodile, Snake, and Lizard are reptiles. What is a frog?'",
      elimination: "A frog is an amphibian (starts life in water). The others are reptiles with scales. Eliminate reptiles.",
      translation: {
        chinese: "排异找不同：\n哪一个单词不属于这一组：鳄鱼、青蛙、蛇、蜥蜴？请解释原因。",
        pinyin: "Páiyì zhǎo bùtóng:\nNǎ yīgè dāncí bù shǔyú zhè yī zǔ: Èyú, Qīngwā, Shé, Xīyì? Qǐng jiěshì yuányīn."
      }
    },
    {
      id: "r5_4",
      text: "Which word does NOT belong in this group:\nSadness, Anger, Sleepiness, Joy?\nExplain why.",
      options: ["A) Sleepiness", "B) Anger", "C) Joy", "D) Sadness"],
      answer: "A) Sleepiness",
      parentPrompt: "Ask: 'Sadness, Anger, and Joy are emotions. Is sleepiness an emotion?'",
      elimination: "Sleepiness is a physical state (tired), not a feeling/emotion. Eliminate emotions.",
      translation: {
        chinese: "排异找不同：\n哪一个单词不属于这一组：悲伤、愤怒、困倦、喜悦？请解释原因。",
        pinyin: "Páiyì zhǎo bùtóng:\nNǎ yīgè dāncí bù shǔyú zhè yī zǔ: Bēishāng, Fènnù, Kùnjuàn, Xǐyuè? Qǐng jiěshì yuányīn."
      }
    },
    {
      id: "r5_5",
      text: "Situation: Ken practiced playing the piano for ten minutes every single day. Over a year, he went from playing simple notes to performing a beautiful song.\nIdiom: 滴水穿石 (dī shuǐ chuān shí) - literally 'dripping water wears through stone.' It means persistent, small efforts lead to great success.\nQuestion: Explain how Ken's practice matches this idiom.",
      idiom: { text: "滴水穿石", pinyin: "dī shuǐ chuān shí", meaning: "Dripping water wears through stone; persistence leads to success." },
      options: [
        "A) Ken's small daily practice accumulated over time to achieve a big result, like water drops wearing down stone.",
        "B) Ken was playing water drop music on the piano keys.",
        "C) Ken gave up when his practice got boring.",
        "D) Ken wore through the piano keys with his fingers."
      ],
      answer: "A) Ken's small daily practice accumulated over time to achieve a big result, like water drops wearing down stone.",
      parentPrompt: "Ask: 'How does dripping water break a hard stone? By doing it over and over. How did Ken learn the song? By practicing a little bit every day.'",
      elimination: "Ken didn't give up. Eliminate C. The stone represents the hard goal, not actual physical keys. Eliminate D.",
      translation: {
        chinese: "情境：肯每天坚持练习弹钢琴十分钟。一年的时间，他从只能弹奏简单的音符，到能演奏出一首美妙的乐曲。\n成语：滴水穿石 (dī shuǐ chuān shí)\n问题：肯的练习如何契合这个成语的意思？",
        pinyin: "Qíngjìng: Kěn měitiān jiānchí liànxí tán gāngqín shífēnzhōng. Yīnián de shíjiān, tā cóng zhǐnéng tánzòu jiǎndān de yīnfú, dào néng yǎnzòuchū yī shǒu měimiào de yuèqǔ.\nChéngyǔ: Dī shuǐ chuān shí\nWèntí: Kěn de liànxí rúhé qìhé zhège chéngyǔ de yìsi?"
      }
    },
    {
      id: "r5_6",
      text: "Situation: A boy was so scared of failing his spelling test that he refused to study or write any words down, which caused him to fail anyway.\nIdiom: 杞人忧天 (qǐ rén yōu tiān) - literally 'the man of Qi worries about the sky collapsing.' It means having groundless, unnecessary worries that lead to self-harm.\nQuestion: How does the boy's situation relate to this idiom?",
      idiom: { text: "杞人忧天", pinyin: "qǐ rén yōu tiān", meaning: "Unnecessary or groundless worries that lead to self-harm." },
      options: [
        "A) He worried so much about failing that his worry made him refuse to prepare, creating the very failure he feared.",
        "B) He studied hard but failed the test because it was too difficult.",
        "C) He worried about the sky falling on his head during the test.",
        "D) He forgot his pencil on the day of the test."
      ],
      answer: "A) He worried so much about failing that his worry made him refuse to prepare, creating the very failure he feared.",
      parentPrompt: "Ask: 'What did the boy worry about? Failing. Did his worry help him? No, it made him not study and fail anyway.'",
      elimination: "He did not study, so eliminate B. The sky falling is a metaphor, not real. Eliminate C.",
      translation: {
        chinese: "情境：一个男孩非常害怕拼写考试不及格，因此他拒绝学习和动笔写字，结果最终真的还是不及格。\n成语：杞人忧天 (qǐ rén yōu tiān)\n问题：男孩的处境如何与这个成语相联系？",
        pinyin: "Qíngjìng: Yīgè nánhái fēicháng hàipà pīnxiě kǎoshì bù jígé, yīncǐ tā jùjué xuéxí hé dòngbǐ xiězì, jiéguǒ zuìzhōng zhēnde háishì bù jígé.\nChéngyǔ: Qǐ rén yōu tiān\nWèntí: Nánhái de chǔjìng rúhé yǔ zhège chéngyǔ xiāng liánxì?"
      }
    },
    { 
      id: "r5_7", 
      text: "Iowa Analogy:\nDusk is to night as Dawn is to... [ ? ]", 
      options: ["A) day", "B) twilight", "C) sunset", "D) midnight"], 
      answer: "A) day",
      parentPrompt: "Ask: 'Dusk is the beginning of the night. Dawn is the beginning of what?'",
      elimination: "Dawn occurs in the morning. Midnight and sunset are at night. Eliminate C and D.",
      translation: {
        chinese: "概念类比：\n黄昏之于夜晚，正如黎明之于…… [ ? ]",
        pinyin: "Gàiniàn lèibǐ:\nHuánghūn zhī yú yèwǎn, zhèngrú límíng zhī yú... [ ? ]"
      }
    },
    { 
      id: "r5_8", 
      text: "Iowa Analogy:\nFeather is to light as Rock is to... [ ? ]", 
      options: ["A) heavy", "B) hard", "C) soft", "D) sharp"], 
      answer: "A) heavy",
      parentPrompt: "Ask: 'A feather is known for being light. A rock is known for being...?'",
      elimination: "A rock is hard, but we are looking for a weight comparison (light vs heavy). Eliminate B.",
      translation: {
        chinese: "概念类比（特征）：\n羽毛之于轻盈，正如岩石之于…… [ ? ]",
        pinyin: "Gàiniàn lèibǐ (tèzhēng):\nYǔmáo zhī yú qīngyíng, zhèngrú yánshí zhī yú... [ ? ]"
      }
    },
    { 
      id: "r5_9", 
      text: "Iowa Analogy:\nMirror is to reflection as Echo is to... [ ? ]", 
      options: ["A) sound", "B) voice", "C) repeat", "D) light"], 
      answer: "A) sound",
      parentPrompt: "Ask: 'A mirror bounces back light to make a reflection. An echo bounces back what?'",
      elimination: "Mirror bounces light, echo bounces sound waves. Eliminate D.",
      translation: {
        chinese: "概念类比：\n镜子之于反射/映像，正如回声之于…… [ ? ]",
        pinyin: "Gàiniàn lèibǐ:\nJìngzi zhī yú fǎnshè/yìngxiàng, zhèngrú huíshēng zhī yú... [ ? ]"
      }
    },
    { 
      id: "r5_10", 
      text: "Iowa Analogy:\nScale is to weight as Thermometer is to... [ ? ]", 
      options: ["A) temperature", "B) pressure", "C) time", "D) distance"], 
      answer: "A) temperature",
      parentPrompt: "Ask: 'A scale measures weight. A thermometer measures what?'",
      elimination: "Thermometers do not measure distance or time. Eliminate C and D.",
      translation: {
        chinese: "概念类比：\n天平之于重量，正如温度计之于…… [ ? ]",
        pinyin: "Gàiniàn lèibǐ:\nTiānpíng zhī yú zhòngliàng, zhèngrú wēndùjì zhī yú... [ ? ]"
      }
    }
  ]
};

export const SEL_MATRIX = {
  1: [
    { 
      id: "s1_1", 
      text: "If your friend dropped their lunch tray and felt embarrassed, how would you feel? What could you do or say to help them?", 
      prompt: "Empathy check: Elicit caring response and offer of help.",
      translation: {
        chinese: "如果你的朋友掉落了他们的午餐盘并感到尴尬，你会有什么感觉？你可以做些什么或说些什么来帮助他们？",
        pinyin: "Rúguǒ nǐ de péngyǒu diàoluòle tāmen de wǔcān pán bìng gǎndào gāngà, nǐ huì yǒu shénme gǎnjué? Nǐ kěyǐ zuò xiē shénme huò shuō xiē shénme lái bāngzhù tāmen?"
      }
    },
    { 
      id: "s1_2", 
      text: "Practice Whole Body Listening: Keep your eyes on the speaker, your hands and feet still, and your ears open for 3 minutes while your parent reads a story. Answer two questions about it at the end.", 
      prompt: "Whole Body Listening grow: Target posture and stillness.",
      translation: {
        chinese: "全身倾听练习：当父母读故事时，双眼注视讲故事的人，手脚保持不动，认真听3分钟。结束后回答两个关于故事的问题。",
        pinyin: "Quánshēn qīngtīng liànxí: Dāng fùmǔ dú gùshì shí, shuāngyǎn zhùshì jiǎng gùshì de rén, shǒujiǎo bǎochí bùdòng, rènzhēn tīng 3 fēnzhōng. Jiéshù hòu huídá liǎng gè guānyú gùshì de wèn-tí."
      }
    },
    { 
      id: "s1_3", 
      text: "If a teacher is speaking in class, how do you show them you are listening? Practice demonstrating it now to your parent.", 
      prompt: "Whole Body Listening: Visual demonstration of eye contact and body calmness.",
      translation: {
        chinese: "如果在课堂上老师在说话，你如何向他们表明你在听？现在向父母演示一下。",
        pinyin: "Rúguǒ zài kètáng shàng lǎoshī zài shuōhuà, nǐ rúhé xiàng tāmen biǎomíng nǐ zài tīng? Xiànzài xiàng fùmǔ yǎnshì yīxià."
      }
    },
    { 
      id: "s1_4", 
      text: "How do you feel when someone interrupts you while you are speaking? Why is it important to wait for others to finish?", 
      prompt: "Conversational turn-taking: Reflect on frustration of being cut off.",
      translation: {
        chinese: "当你说话时被别人打断，你有什么感觉？为什么等待别人说完很重要？",
        pinyin: "Dāng nǐ shuōhuà shí bèi biérén dǎduàn, nǐ yǒu shénme gǎnjué? Wèishéme děngdài biérén shuōwán hěn zhòngyào?"
      }
    },
    { 
      id: "s1_5", 
      text: "Practice: Sit in a comfortable listening posture. Close your eyes and listen to the sounds in the room for 1 minute. Tell your parent three sounds you heard.", 
      prompt: "Mindful listening: Focus on auditory isolation and focus.",
      translation: {
        chinese: "练习：以舒服的姿势坐好。闭上眼睛，静听房间里的声音1分钟。告诉父母你听到的三种声音。",
        pinyin: "Liànxí: Yǐ shūfú de zīshì zuòhǎo. Bì shàng yǎnjing, jìngtīng fángjiān lǐ de shēngyīn 1 fēnzhōng. Gàosù fùmǔ nǐ tīngdào de sān zhǒng shēngyīn."
      }
    },
    { 
      id: "s1_6", 
      text: "If you see a classmate sitting alone at recess, what is one polite way to invite them to play?", 
      prompt: "Recess inclusion: Practice asking 'Would you like to play with us?'",
      translation: {
        chinese: "如果你在下课休息时看到一位同学独自坐着，邀请他们一起玩的一种礼貌方式是什么？",
        pinyin: "Rúguǒ nǐ zài xiàkè xiūxī shí kàndào yī wèi tóngxué dúzì zuòzhe, yāoqǐng tāmen yīqǐ wán de yī zhǒng lǐmào fāngshì shì shénme?"
      }
    },
    { 
      id: "s1_7", 
      text: "How do you know when your parent is happy or proud? What do their eyes, mouth, and shoulders do?", 
      prompt: "Body language recognition: Connecting facial cues to emotions.",
      translation: {
        chinese: "你如何知道父母什么时候高兴或为你感到骄傲？他们的眼睛、嘴巴和肩膀会做什么动作？",
        pinyin: "Nǐ rúhé zhīdào fùmǔ shénme shíhòu gāoxìng huò wèi nǐ gǎndào jiāo'ào? Tāmen de yǎnjing, zuǐba hé jiānbǎng huì zuò shénme dòngzuò?"
      }
    },
    { 
      id: "s1_8", 
      text: "If someone bumps into you by accident and says 'sorry', how should you respond?", 
      prompt: "Apology acceptance: Responding with 'That's okay' or 'Thank you'.",
      translation: {
        chinese: "如果有人不小心撞到你并说“对不起”，你应该如何回应？",
        pinyin: "Rúguǒ yǒurén bù xiǎoxīn zhuàng dào nǐ bìng shuō “duìbùqǐ”, nǐ yīnggāi rúhé huíyìng?"
      }
    },
    { 
      id: "s1_9", 
      text: "Why do we share toys? How does it feel when someone shares with you?", 
      prompt: "Prosocial reflection: Connect sharing to friendship and positive feelings.",
      translation: {
        chinese: "我们为什么要分享玩具？当别人与你分享时，你有什么感觉？",
        pinyin: "Wǒmen wèishéme yào fēnxiǎng wánjù? Dāng biérén yǔ nǐ fēnxiǎng shí, nǐ yǒu shénme gǎnjué?"
      }
    },
    { 
      id: "s1_10", 
      text: "What is one kind thing you did or saw someone do at school today?", 
      prompt: "Observational empathy: Recalling daily positive actions.",
      translation: {
        chinese: "你今天在学校做过或看到别人做过的一件友善的事情是什么？",
        pinyin: "Nǐ jīntiān zài xuéxiào zuòguò huò kàndào biérén zuòguò de yī jiàn yǒushàn de shìqing shì shénme?"
      }
    }
  ],
  2: [
    { 
      id: "s2_1", 
      text: "Practice looking at your parent in the eyes, standing tall, and speaking clearly:\n'My favorite book is [ ? ] because [ ? ]'\n(Make sure your voice is loud enough to be heard across the room).", 
      prompt: "Voice projection grow: Ensure audible volume, no whispering.",
      translation: {
        chinese: "练习看着父母的眼睛，挺胸站直，清晰地说道：\n“我最喜欢的书是 [ ? ]，因为 [ ? ]”\n（确保你的声音足够大，大到可以让整个房间都听到）。",
        pinyin: "Liànxí kànzhe fùmǔ de yǎnjing, tǐngxiōng zhànzhí, qīngxī de shuōdào:\n'Wǒ zuì xǐhuan de shū shì [ ? ], yīnwèi [ ? ]'\n(Quèbǎo nǐ de shēngyīn zúgòu dà, dà dào kěyǐ ràng zhěnggè fángjiān dōu tīngdào)."
      }
    },
    { 
      id: "s2_2", 
      text: "Stand with your feet shoulder-width apart, take a deep breath, and say in a strong, clear voice:\n'I am ready to learn and do my best today!'", 
      prompt: "Vocal confidence: Grade on posture, open chest, and positive delivery.",
      translation: {
        chinese: "双脚分开与肩同宽站立，深吸一口气，用坚定、清晰的声音说：\n“我已经准备好学习，今天我会尽最大努力！”",
        pinyin: "Shuāng jiǎo fēnkāi yǔ jiān tóng kuān zhànlì, shēn xī yī kǒu qì, yòng jiāndìng, qīngxī de shēngyīn shuō:\n'Wǒ yǐjīng zhǔnbèi hǎo xuéxí, jīntiān wǒ huì jìn zuìdà nǔlì!'"
      }
    },
    { 
      id: "s2_3", 
      text: "Imagine you are sharing your favorite drawing with the class. Practice saying in a loud, proud voice:\n'This is my drawing, and I chose these colors because [ ? ]'", 
      prompt: "Presentation skill: Ensure voice projects cleanly.",
      translation: {
        chinese: "想象你在班上分享你最喜欢的画作。练习用响亮、自豪的声音说：\n“这是我的画，我选择这些颜色是因为 [ ? ]”",
        pinyin: "Xiǎngxiàng nǐ zài bān shàng fēnxiǎng nǐ zuì xǐhuan de huàzuò. Liànxí yòng xiǎngliàng, zìháo de shēngyīn shuō:\n'Zhè shì wǒ de huàzuò, wǒ xuǎnzé zhèxiē yánsè yīnwèi [ ? ]'"
      }
    },
    { 
      id: "s2_4", 
      text: "Practice introducing yourself to an imaginary classmate:\n'Hi, my name is Ada. What is your name?'\n(Speak clearly, smile, and look at their eyes).", 
      prompt: "Social interaction: Eye contact, voice clarity, and handshake gesture.",
      translation: {
        chinese: "练习向一位虚构的同学介绍自己：\n“你好，我叫 Ada。你叫什么名字？”\n（清晰地说话，微笑，并看着对方的眼睛）。",
        pinyin: "Liànxí xiàng yī wèi xūgòu de tóngxué jièshào zìjǐ:\n'Nǐ hǎo, wǒ jiào Ada. Nǐ jiào shénme míngzì?'\n(Qīngxī de shuōhuà, wēixiào, bìng kànzhe duìfāng de yǎnjing)."
      }
    },
    { 
      id: "s2_5", 
      text: "Say 'Thank you for making dinner' to your parent in a clear, firm voice, looking directly at them without whispering.", 
      prompt: "Audible gratitude: Direct target speaking.",
      translation: {
        chinese: "看着你的父母，用清晰、坚定的声音对他们说“谢谢你们做晚饭”，不要小声嘀咕。",
        pinyin: "Kànzhe nǐ de fùmǔ, yòng qīngxī, jiāndìng de shēngyīn duì tāmen shuō 'Xièxie nǐmen zuò wǎnfàn', búyào xiǎoshēng dīgu."
      }
    },
    { 
      id: "s2_6", 
      text: "Practice telling a short story using an expressive voice (changing your voice for different characters or emotions).", 
      prompt: "Vocal expression: Check for variations in speed, volume, and pitch.",
      translation: {
        chinese: "练习用富有表现力的声音讲一个小故事（为不同的角色或情绪改变你的声音）。",
        pinyin: "Liànxí yòng fùyǒu biǎoxiànlì de shēngyīn jiǎng yīgè xiǎo gùshì (wèi bùtóng de juésè huò qíngxù gǎibiàn nǐ de shēngyīn)."
      }
    },
    { 
      id: "s2_7", 
      text: "Practice saying 'No, thank you' in a polite but firm, confident voice, standing tall.", 
      prompt: "Assertive boundary: Speak calmly and firmly.",
      translation: {
        chinese: "站直身体，用礼貌但坚定、自信的声音练习说“不，谢谢你”。",
        pinyin: "Zhànzhí shēntǐ, yòng lǐmào dàn jiāndìng, zìxìn de shēngyīn liànxí shuō 'Bù, xièxie nǐ'."
      }
    },
    { 
      id: "s2_8", 
      text: "Look in the mirror and state three things you like about yourself in a confident, clear voice.", 
      prompt: "Self-affirmation: Projecting self-assurance vocally.",
      translation: {
        chinese: "照镜子，用自信、清晰的声音说出你喜欢自己的三件事。",
        pinyin: "Zhào jìngzi, yòng zìxìn, qīngxī de shēngyīn shuōchū nǐ xǐhuan zìjǐ de sān jiàn shì."
      }
    },
    { 
      id: "s2_9", 
      text: "Practice asking a question in a clear, projected voice:\n'Excuse me, where can I find the pencils?'", 
      prompt: "Audible inquiry: Focus on volume and tone.",
      translation: {
        chinese: "练习用清晰、响亮的声音提问：\n“打扰一下，请问铅笔在哪里？”",
        pinyin: "Liànxí yòng qīngxī, xiǎngliàng de shēngyīn tíwèn:\n'Qǐngwèn, qiānbǐ zài nǎlǐ?'"
      }
    },
    { 
      id: "s2_10", 
      text: "Practice answering:\n'One thing I am really good at is [ ? ]'\nin a clear, audible voice.", 
      prompt: "Strength sharing: Check if volume is bold and eye contact is maintained.",
      translation: {
        chinese: "练习用清晰、可听的声音回答：\n“我非常擅长的一件事是 [ ? ]”",
        pinyin: "Liànxí huídá:\n'Wǒ fēicháng shàncháng de yī jiàn shì shì [ ? ]'\nyòng qīngxī, kětīng de shēngyīn."
      }
    }
  ],
  3: [
    {
      id: "s3_1",
      text: "Challenge: Order your own food or drink independently at a store/restaurant without looking at your parent for validation.",
      script: { english: "Please give me water.", chinese: "请给我水。", pinyin: "Qǐng gěi wǒ shuǐ." },
      prompt: "Autonomy grow: Have the child place their order directly. Toggle Mandarin translation if ordering in a Mandarin-speaking context.",
      translation: {
        chinese: "挑战：独立在商店/餐厅点自己的食物或饮料，不要寻求父母的眼神确认。",
        pinyin: "Tiǎozhàn: Dúlì zài shāngdiàn/cāntīng diǎn zìjǐ de shíwù huò yǐnliào, búyào xúnqiú fùmǔ de yǎnshén quèrèn."
      }
    },
    {
      id: "s3_2",
      text: "Challenge: Go up to a store clerk or library assistant and ask them where a specific item is located.",
      script: { english: "Excuse me, where are the books?", chinese: "请问，书在哪里？", pinyin: "Qǐngwèn, shū zài nǎlǐ?" },
      prompt: "Assertive requests: Child seeks information from an employee independently.",
      translation: {
        chinese: "挑战：走到店员或图书馆助理面前，向他们询问某个特定物品的位置。",
        pinyin: "Tiǎozhàn: Zǒu dào diànyuán huò túshūguǎn zhùlǐ miànqián, xiàng tāmen xúnwèn mǒugè tèdìng wùpǐn de wèizhì."
      }
    },
    {
      id: "s3_3",
      text: "Challenge: Say 'Thank you, have a nice day' directly to a cashier when you receive an item, looking them in the eyes.",
      script: { english: "Thank you, wish you a beautiful day!", chinese: "谢谢，祝您有美好的一天！", pinyin: "Xièxie, zhù nín yǒu megahǎo de yītiān!" },
      prompt: "Social gratitude: Clean delivery to a cashier.",
      translation: {
        chinese: "挑战：拿过东西时，直视收银员的眼睛并对他们说“谢谢你，祝你今天过得愉快”。",
        pinyin: "Tiǎozhàn: Ná guò dōngxi shí, zhíshì shōuyínyuán de yǎnjing bìng duì tāmen shuō 'Xièxie nǐ, zhù nǐ jīntiān guò de yúkuài'."
      }
    },
    {
      id: "s3_4",
      text: "Challenge: Choose your own outfit for tomorrow entirely by yourself and lay it out tonight without asking your parent if it matches.",
      script: { english: "I choose my clothes myself.", chinese: "我自己选衣服。", pinyin: "Wǒ zìjǐ xuǎn yīfú." },
      prompt: "Self-determination: Encourage independent decision making without needing parental reassurance.",
      translation: {
        chinese: "挑战：完全独立挑选自己明天要穿的衣服，并于今晚整理好，不要询问父母是否搭配。",
        pinyin: "Tiǎozhàn: Wánquán dúlì tiāoxuǎn zìjǐ míngtiān yào chuān de yīfú, bìng yú jīnwǎn zhěnglǐ hǎo, búyào xúnwèn fùmǔ shìfǒu dāpèi."
      }
    },
    {
      id: "s3_5",
      text: "Challenge: Take your dirty dishes to the sink after a meal and wash your own plastic cup independently.",
      script: { english: "I wash the cup myself.", chinese: "我自己洗杯子。", pinyin: "Wǒ zìjǐ xǐ bēizi." },
      prompt: "Responsibility: Completing a chore end-to-end without constant reminders.",
      translation: {
        chinese: "挑战：饭后把你的脏碗筷拿到水槽，并独立清洗自己的塑料杯。",
        pinyin: "Tiǎozhàn: Fànhòu bǎ nǐ de zàng wǎnkuài ná dào shuǐcáo, bìng dúlì qīngxǐ zìjǐ de sùliào bēizi."
      }
    },
    {
      id: "s3_6",
      text: "Challenge: Pack your own backpack for the next day, checking that you have your water bottle, jacket, and homework.",
      script: { english: "I organize my backpack myself.", chinese: "我自己整理书包。", pinyin: "Wǒ zìjǐ zhěnglǐ shūbāo." },
      prompt: "Executive function: Checklist execution.",
      translation: {
        chinese: "挑战：自己整理好明天要用的书包，检查水壶、外套和作业是否带齐。",
        pinyin: "Tiǎozhàn: Zìjǐ zhěnglǐ hǎo míngtiān yào yòng de shūbāo, jiǎnchá shuǐhú, wàitào hé zuòyè shìfǒu dài qí."
      }
    },
    {
      id: "s3_7",
      text: "Challenge: Pay the cashier at a store by handing them the money or card directly and saying thank you.",
      script: { english: "Here is the money, thank you.", chinese: "给你钱，谢谢。", pinyin: "Gěi nǐ qián, xièxie." },
      prompt: "Public transaction: Taking responsibility for the physical transaction.",
      translation: {
        chinese: "挑战：在商店付款时，直接将钱或卡递给收银员并说谢谢。",
        pinyin: "Tiǎozhàn: Zài shāngdiàn fùkuǎn shí, zhíjiē jiāng qián huò kǎ dì gěi shōuyínyuán bìng shuō xièxie."
      }
    },
    {
      id: "s3_8",
      text: "Challenge: If you drop or spill something, clean it up completely on your own initiative without waiting to be asked.",
      script: { english: "I tidy up myself.", chinese: "我自己收拾。", pinyin: "Wǒ zìjǐ shōushi." },
      prompt: "Initiative: Spontaneous recovery from accidents.",
      translation: {
        chinese: "挑战：如果你弄掉或洒了东西，主动将其完全清理干净，不要等待别人要求你去做。",
        pinyin: "Tiǎozhàn: Rúguǒ nǐ nòng diào huò sǎle dōngxi, zhǔdòng jiāng qí wánquán qīnglǐ gānjìng, búyào děngdài biérén yāoqiú nǐ qù zuò."
      }
    },
    {
      id: "s3_9",
      text: "Challenge: Ask a restaurant server or store assistant for a napkin or straw independently.",
      script: { english: "Please give me a napkin.", chinese: "请给我一张纸巾。", pinyin: "Qǐng gěi wǒ yī zhāng zhǐjīn." },
      prompt: "Self-advocacy: Expressing immediate physical needs politely in public.",
      translation: {
        chinese: "挑战：独立向餐厅服务员或店员索要纸巾或吸管。",
        pinyin: "Tiǎozhàn: Dúlì xiàng cāntīng fúwùyuán huò diànyuán suǒyào zhǐjīn huò xīguǎn."
      }
    },
    {
      id: "s3_10",
      text: "Challenge: Write a thank you card for a teacher or friend, and hand-deliver it to them yourself.",
      script: { english: "This is a card for you.", chinese: "这是送给您的卡片。", pinyin: "Zhè shì sòng gěi nín de kǎpiàn." },
      prompt: "Relationship building: Independent delivery of appreciation.",
      translation: {
        chinese: "挑战：给老师或朋友写一张感谢卡，并亲自送给他们。",
        pinyin: "Tiǎozhàn: Gěi lǎoshī huò péngyǒu xiě yī zhāng gǎnxiè kǎ, bìng qīnzì sòng gěi tāmen."
      }
    }
  ],
  4: [
    { 
      id: "s4_1", 
      text: "Ask a friend or family member what their favorite game or hobby is. Listen closely without interrupting, and then repeat three specific details they told you.", 
      prompt: "Social listening: Check if the child can repeat back details accurately to demonstrate focus.",
      translation: {
        chinese: "询问朋友或家人他们最喜欢的游戏或爱好是什么。认真倾听，不要打断，然后重复他们告诉你的三个具体细节。",
        pinyin: "Xúnwèn péngyǒu huò jiārén tāmen zuì xǐhuan de yóuxì huò àihào shì shénme. Rènzhēn qīngtīng, búyào dǎduàn, ránhòu chóngfù tāmen gàosù nǐ de sān gè jùtǐ xìjié."
      }
    },
    { 
      id: "s4_2", 
      text: "Ask your parent about their day. Remember two things they did and ask them a follow-up question about one of those things later in the evening.", 
      prompt: "Delayed social memory: Encouraging the child to store and retrieve details about someone else's life.",
      translation: {
        chinese: "询问父母今天过得怎么样。记住他们做的两件事，并在今晚晚些时候就其中一件事向他们提一个后续问题。",
        pinyin: "Xúnwèn fùmǔ jīntiān guò de zěnmeyàng. Jìzhù tāmen zuò de liǎng jiàn shì, bìng zài jīnwǎn wǎn xiē shíhòu jiù qízhōng yī jiàn shì xiàng tāmen tí yīgè hòuxù wèntí."
      }
    },
    { 
      id: "s4_3", 
      text: "Listen to a short story read aloud. Afterward, tell the reader which character was your favorite and list two reasons why, referring to specific events.", 
      prompt: "Attentive feedback: Evaluating critical listening and justification.",
      translation: {
        chinese: "听读一个小故事。之后，告诉朗读者你最喜欢哪个角色，并结合故事中的具体事件说出两个原因。",
        pinyin: "Tīng dú yīgè xiǎo gùshì. Zhīhòu, gàosù lǎngdú zhě nǐ zuì xǐhuan nǎgè juésè, bìng jiéhé gùshì zhōng de jùtǐ shìjiàn shuōchū liǎng gè yuányīn."
      }
    },
    { 
      id: "s4_4", 
      text: "Play a game of 'Simon Says'. Focus entirely on listening and following instructions exactly, even when they speed up.", 
      prompt: "Self-regulation: Responding only to correct auditory cues.",
      translation: {
        chinese: "玩“老师说（Simon Says）”游戏。全神贯注地倾听，并完全按照指令去做，即使速度变快也是如此。",
        pinyin: "Wán 'Lǎoshī shuō (Simon Says)' yóuxì. Quánshén guànzhù de qīngtīng, bìng wánquán ànzhào zhǐlìng qù zuò, jíshǐ sùdù biàn kuài yěshì rúcǐ."
      }
    },
    { 
      id: "s4_5", 
      text: "Ask a sibling or friend what made them happy today. Retell their story to your parent during dinner.", 
      prompt: "Empathy relay: Transferring another person's emotional story accurately.",
      translation: {
        chinese: "问兄弟姐妹或朋友今天什么事情让他们感到高兴。在晚饭时把他们的故事复述给父母听。",
        pinyin: "Wèn xiōngdì jiěmèi huò péngyǒu jīntiān shénme shìqing ràng tāmen gǎndào gāoxìng. Zài wǎnfàn shí bǎ tāmen de gùshì fùshù gěi fùmǔ tīng."
      }
    },
    { 
      id: "s4_6", 
      text: "Have a 3-minute conversation where you must repeat what your parent said before you answer (e.g., 'So you said you like reading. I like...').", 
      prompt: "Reflective listening: Encouraging structural conversational check-ins.",
      translation: {
        chinese: "进行一次3分钟的对话，在回答之前你必须重复父母说的话（例如：“所以您说您喜欢读书，而我喜欢……”）。",
        pinyin: "Jìnxíng yīcì 3 fēnzhōng de duìhuà, zài huídá zhīqián nǐ bìxū chóngfù fùmǔ shuō de huà (lìrú: 'Suǒyǐ nín shuō nín xǐhuan dúshū, ér wǒ xǐhuan...')."
      }
    },
    { 
      id: "s4_7", 
      text: "Ask a family member what their favorite food is and why. Draw a picture of that food and present it to them.", 
      prompt: "Caring connection: Doing a task centered on someone else's preferences.",
      translation: {
        chinese: "问家人他们最喜欢的食物是什么以及为什么。画一幅这种食物的画并送给他们。",
        pinyin: "Wèn jiārén tāmen zuì xǐhuan de shíwù shì shénme yǐjí wèishéme. Huà yīfú zhèzhǒng shíwù de huà bìng sòng gěi tāmen."
      }
    },
    { 
      id: "s4_8", 
      text: "Listen to a song. Identify three different instruments or background sounds you heard and describe them to your parent.", 
      prompt: "Auditory attention: Focusing on secondary stimuli.",
      translation: {
        chinese: "听一首歌。辨认你听到的三种不同的乐器或背景声音，并描述给父母听。",
        pinyin: "Tīng yī shǒu gē. Biànrèn nǐ tīngdào de sān zhǒng bùtóng de yuèqì huò bèijǐng shēngyīn, bìng miáoshù gěi fùmǔ tīng."
      }
    },
    { 
      id: "s4_9", 
      text: "Ask a friend what they want to play at recess. Follow their lead and play their game for at least 10 minutes without suggesting your own ideas.", 
      prompt: "Social flexibility: Willingness to follow another's plan to build bond.",
      translation: {
        chinese: "问朋友在休息时间想玩什么。听从他们的安排，和他们一起玩他们的游戏至少10分钟，不要提出你自己的想法。",
        pinyin: "Wèn péngyǒu zài xiūxī shíjiān xiǎng wán shénme. Tīngcóng tāmen de ānpái, hé tāmen yīqǐ wán tāmen de yóuxì zhìshǎo 10 fēnzhōng, búyào tíchū nǐ zìjǐ de xiǎngfǎ."
      }
    },
    { 
      id: "s4_10", 
      text: "When someone is speaking, keep your hands and feet quiet, look at their eyes, and wait 2 seconds after they finish before you start talking.", 
      prompt: "Impulse control: Preventing conversational interruption.",
      translation: {
        chinese: "当别人说话时，保持手脚安静，看着对方的眼睛，并在他们说完后等待2秒钟再开始说话。",
        pinyin: "Dāng biérén shuōhuà shí, bǎochí shǒujiǎo ānjìng, kànzhe duìfāng de yǎnjing, bìng zài tāmen shuōwán hòu děngdài 2 miǎo zhōng zài kāishǐ shuōhuà."
      }
    }
  ],
  5: [
    { 
      id: "s5_1", 
      text: "Practice resolving a conflict. Roleplay saying to a peer who grabbed your toy:\n'I was playing with this. You can have a turn when I am finished in five minutes. Let's set a timer.'", 
      prompt: "Conflict resolution: Check for assertive, non-yelling voice and offering a concrete compromise.",
      translation: {
        chinese: "练习解决冲突。角色扮演对抢了你玩具的同伴说：\n“我刚才在玩这个。我五分钟后玩完，你可以接着玩。我们设定一个计时器吧。”",
        pinyin: "Liànxí jiějué chōngtū. Juésè bàonyǎn duì qiǎngle nǐ wánjù de tóngbàn shuō:\n'Wǒ gāngcái zài wán zhège. Wǒ wǔ fēnzhōng hòu wánwán, nǐ kěyǐ jiēzhe wán. Wǒmen shèdìng yīgè jìshíqì ba.'"
      }
    },
    { 
      id: "s5_2", 
      text: "Practice asking for help assertively. If someone is standing in front of something you need, look at them and say:\n'Excuse me, may I please squeeze past you?' in a clear, polite voice.", 
      prompt: "Assertive space navigation: Checking voice tone and posture in public crowds.",
      translation: {
        chinese: "练习坚定地请求帮助。如果有人站在你需要的东西前面，看着他们，用清晰、礼貌的声音说：\n“打扰一下，我可以挤过去吗？”",
        pinyin: "Liànxí jiāndìng de qǐngqiú bāngzhù. Rúguǒ yǒurén zhàn zài nǐ xūyào de dōngxi qiánmiàn, kànzhe tāmen, yòng qīngxī, lǐmào de shēngyīn shuō:\n'Qǐng wèn, wǒ kěyǐ jǐ guòqù ma?'"
      }
    },
    { 
      id: "s5_3", 
      text: "If someone does something that bugs you, practice using an 'I-Message':\n'I feel upset when you knock my blocks down because I worked hard on it. Please don't do that.'", 
      prompt: "Emotional assertion: Explaining feeling, cause, and request without name-calling.",
      translation: {
        chinese: "如果有人做了让你烦恼的事，练习使用“我讯息”：\n“你推倒我的积木我感到很难过，因为我很努力地搭建它。请不要那样做。”",
        pinyin: "Rúguǒ yǒurén zuòle ràng nǐ fánnǎo de shì, liànxí shǐyòng 'wǒ xùnxī':\n'Nǐ tuīdǎo wǒ de jīmù wǒ gǎndào hěn nánguò, yīnwèi wǒ hěn nǔlì de dàjiàn tā. Qǐng búyào nàyàng zuò.'"
      }
    },
    { 
      id: "s5_4", 
      text: "Roleplay what to do if you don't understand a game's rules. Practice saying:\n'I want to play, but I don't know the rules. Can you explain them to me, please?'", 
      prompt: "Vulnerability & requests: Seeking clarity instead of quitting or breaking rules.",
      translation: {
        chinese: "角色扮演当你不知道游戏规则时该怎么办。练习说：\n“我想玩，但我不知道规则。请问你能给我解释一下吗？”",
        pinyin: "Juésè bàonyǎn dāng nǐ bù zhīdào yóuxì guīzé shí gāi zěnmebàn. Liànxí shuō:\n'Wǒ xiǎng wán, dàn wǒ bù zhīdào guīzé. Qǐngwèn nǐ néng gěi wǒ jiěshì yīxià ma?'"
      }
    },
    { 
      id: "s5_5", 
      text: "If you make a mistake or hurt someone's feelings by accident, practice saying a sincere apology:\n'I am sorry I bumped you. It was an accident. Are you okay?'", 
      prompt: "Apology & repair: Apologizing and immediately checking on the other person.",
      translation: {
        chinese: "如果你不小心犯了错或伤害了别人的感情，练习真诚地道歉：\n“对不起我撞到你了。我不是故意的。你没事吧？”",
        pinyin: "Rúguǒ nǐ bù xiǎoxīn fànle cuò huò shānghàile biérén de gǎnqíng, liànxí zhēnchéng de dàoqiàn:\n'Duìbùqǐ wǒ zhuàng dào nǐ le. Wǒ búshì gùyì de. Nǐ méishì ba?'"
      }
    },
    { 
      id: "s5_6", 
      text: "If a peer says something mean to you, practice looking at them calmly and saying:\n'I don't like when you speak to me that way. Please stop.' then walk away.", 
      prompt: "Boundary setting: Speaking calmly but firmly, refusing to engage in an argument.",
      translation: {
        chinese: "如果同伴对你说恶毒的话，练习平静地看着他们说：\n“我不喜欢你那样对我说话。请停止。”然后走开。",
        pinyin: "Rúguǒ tóngbàn duì nǐ shuō èdú de huà, liànxí píngjìng de kànzhe tāmen shuō:\n'Wǒ bù xǐhuan nǐ nàyàng duì wǒ shuōhuà. Qǐng tíngzhǐ.' ránhòu zǒukāi."
      }
    },
    { 
      id: "s5_7", 
      text: "Imagine you are playing a game and a peer wants to change the rules. Practice saying:\n'Let's play by the standard rules first, and next time we can try your new rules. Is that okay?'", 
      prompt: "Negotiation: Preserving the game structure while validating the peer's suggestion.",
      translation: {
        chinese: "想象你在玩游戏，一个同伴想改变规则。练习说：\n“我们先按标准规则玩，下次我们可以尝试你的新规则。好吗？”",
        pinyin: "Xiǎngxiàng nǐ zài wán yóuxì, yīgè tóngbàn xiǎng gǎibiàn guīzé. Liànxí shuō:\n'Wǒmen xiān àn biāozhǔn guīzé wán, xiàcì wǒmen kěyǐ chángshì nǐ de xīn guīzé. Hǎo ma?'"
      }
    },
    { 
      id: "s5_8", 
      text: "If you feel overwhelmed or frustrated in a public place, practice telling your parent:\n'I am feeling overwhelmed right now. Can we find a quiet place to sit for a minute?'", 
      prompt: "Self-advocacy/regulation: Recognizing personal emotional limits and asking for support.",
      translation: {
        chinese: "如果你在公共场所感到不知所措或沮丧，练习告诉父母：\n“我现在感觉有点吃不消。我们可以找个安静的地方坐一会吗？”",
        pinyin: "Rúguǒ nǐ zài gōnggòng chǎngsuǒ gǎndào bùzhī suǒcuò huò jǔsàng, liànxí gàosù fùmǔ:\n'Wǒ xiànzài gǎnjué yǒudiǎn chībùxiāo. Wǒmen kěyǐ zhǎogè ānjìng de dìfāng zuò yīhuǐr ma?'"
      }
    },
    { 
      id: "s5_9", 
      text: "Practice saying: 'That was a good game, congratulations!' to someone who beat you in a game, showing good sportsmanship.", 
      prompt: "Sportsmanship: Managing disappointment and showing grace to competitors.",
      translation: {
        chinese: "练习对在比赛中击败你的人说：“这是一场精彩的比赛，祝贺你！”，展现良好的体育精神。",
        pinyin: "Liànxí duì zài bǐsài zhōng jībài nǐ de rén shuō: 'Zhè shì yī chǎng jīngcǎi de bǐsài, zhùhè nǐ!', zhǎnxiàn liánghǎo de tǐyù jīngshén."
      }
    },
    { 
      id: "s5_10", 
      text: "If you need to borrow a pencil from a classmate, practice asking:\n'May I please borrow a pencil? I will return it to you when class is over.'", 
      prompt: "Social requests: Asking politely with a commitment to return the borrowed item.",
      translation: {
        chinese: "如果你需要向同学借铅笔，练习这样问：\n“请问我可以借一支铅笔吗？下课后我会还给你的。”",
        pinyin: "Rúguǒ nǐ xūyào xiàng tóngxué jiè qiānbǐ, liànxí zhèyàng wèn:\n'Qǐngwèn wǒ kěyǐ jiè yī zhī qiānbǐ ma? Xiàkè hòu wǒ huì huán gěi nǐ de.'"
      }
    }
  ]
};
