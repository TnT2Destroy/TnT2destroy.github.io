/**
 * NCATT AET Study Assist - Dynamic Circuit Calculations Practice
 * Generates circuits, calculates exact answers, provides detailed walkthroughs,
 * and renders high-quality schematics on HTML5 canvas (high-DPI sharp rendering).
 */

// Global Calculation Practice State
let calcState = {
  currentQuestion: null,
  streak: 0,
  answered: 0,
  correct: 0,
  walkthroughVisible: false
};

// --- RENDER ENGINE (CANVAS) ---

/**
 * Scale canvas for high-DPI screens to prevent blurriness
 */
function getCanvasContext(canvas, width, height) {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  const rawCtx = canvas.getContext('2d');
  rawCtx.scale(dpr, dpr);
  
  return new Proxy(rawCtx, {
    get(target, prop) {
      const val = Reflect.get(target, prop);
      if (typeof val === 'function') {
        return val.bind(target);
      }
      return val;
    },
    set(target, prop, value) {
      if (prop === 'strokeStyle' || prop === 'fillStyle') {
        if (typeof value === 'string' && value.startsWith('var(')) {
          const varName = value.slice(4, -1).trim();
          const resolved = window.getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
          value = resolved || (varName.includes('text') ? '#ffffff' : '#3b82f6');
        }
      }
      return Reflect.set(target, prop, value);
    }
  });
}

/**
 * Draw a dot for terminals
 */
function drawTerminal(ctx, x, y, label) {
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, 2 * Math.PI);
  ctx.fillStyle = 'var(--accent2)';
  ctx.fill();
  ctx.strokeStyle = 'var(--accent2)';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  ctx.font = 'bold 14px Inter, sans-serif';
  ctx.fillStyle = 'var(--accent2)';
  ctx.fillText(label, x - 20, y + 5);
}

/**
 * Draw a wire junction dot
 */
function drawJunction(ctx, x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 4, 0, 2 * Math.PI);
  ctx.fillStyle = 'var(--accent2)';
  ctx.fill();
}

/**
 * Draw an AC voltage source on the far left
 */
function drawACSource(ctx, x, y, r, labelV, labelF) {
  // Main circle
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.strokeStyle = 'var(--accent2)';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Sine wave inside
  ctx.beginPath();
  const startX = x - r * 0.5;
  const endX = x + r * 0.5;
  ctx.moveTo(startX, y);
  for (let tx = startX; tx <= endX; tx++) {
    const ty = y - Math.sin((tx - x) / (r * 0.5) * Math.PI) * (r * 0.35);
    ctx.lineTo(tx, ty);
  }
  ctx.strokeStyle = 'var(--accent2)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Labels - positioned clearly outside the circle
  ctx.font = 'bold 13px Inter, sans-serif';
  ctx.fillStyle = 'var(--correct)';
  ctx.textAlign = 'center';
  ctx.fillText(labelV, x, y - r - 10);
  ctx.font = 'bold 12px Inter, sans-serif';
  ctx.fillStyle = 'var(--warning)';
  ctx.fillText(labelF, x, y + r + 18);
}

/**
 * Draw a Resistor
 */
function drawResistor(ctx, x, y, length, isVertical, label, valStr) {
  ctx.save();
  ctx.strokeStyle = 'var(--text)';
  ctx.lineWidth = 2.5;
  
  if (isVertical) {
    // Top lead
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 15);
    ctx.stroke();
    
    // Zigzag
    const startY = y + 15;
    const zigLen = length - 30;
    const numZigs = 5;
    const segLen = zigLen / numZigs;
    ctx.beginPath();
    ctx.moveTo(x, startY);
    for (let i = 0; i < numZigs; i++) {
      const curY = startY + i * segLen;
      const midY = curY + segLen / 2;
      const endY = curY + segLen;
      const offset = (i % 2 === 0 ? 10 : -10);
      ctx.lineTo(x + offset, midY);
      ctx.lineTo(x, endY);
    }
    ctx.stroke();
    
    // Bottom lead
    ctx.beginPath();
    ctx.moveTo(x, y + length - 15);
    ctx.lineTo(x, y + length);
    ctx.stroke();
    
    // Label - positioned to the right, outside the component
    ctx.font = 'bold 12px Inter, sans-serif';
    ctx.fillStyle = 'var(--accent2)';
    ctx.textAlign = 'left';
    ctx.fillText(label, x + 18, y + length/2 - 6);
    ctx.font = 'bold 11px Inter, sans-serif';
    ctx.fillStyle = 'var(--correct)';
    ctx.fillText(valStr, x + 18, y + length/2 + 8);
  } else {
    // Left lead
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 15, y);
    ctx.stroke();
    
    // Zigzag
    const startX = x + 15;
    const zigLen = length - 30;
    const numZigs = 5;
    const segLen = zigLen / numZigs;
    ctx.beginPath();
    ctx.moveTo(startX, y);
    for (let i = 0; i < numZigs; i++) {
      const curX = startX + i * segLen;
      const midX = curX + segLen / 2;
      const endX = curX + segLen;
      const offset = (i % 2 === 0 ? -10 : 10);
      ctx.lineTo(midX, y + offset);
      ctx.lineTo(endX, y);
    }
    ctx.stroke();
    
    // Right lead
    ctx.beginPath();
    ctx.moveTo(x + length - 15, y);
    ctx.lineTo(x + length, y);
    ctx.stroke();
    
    // Label - positioned ABOVE the component, well clear of circuit
    ctx.font = 'bold 12px Inter, sans-serif';
    ctx.fillStyle = 'var(--accent2)';
    ctx.textAlign = 'center';
    ctx.fillText(label, x + length/2, y - 22);
    ctx.font = 'bold 11px Inter, sans-serif';
    ctx.fillStyle = 'var(--correct)';
    ctx.fillText(valStr, x + length/2, y - 10);
  }
  ctx.restore();
}

/**
 * Draw an Inductor
 */
function drawInductor(ctx, x, y, length, isVertical, label, valStr) {
  ctx.save();
  ctx.strokeStyle = 'var(--text)';
  ctx.lineWidth = 2.5;
  
  if (isVertical) {
    // Top lead
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 15);
    ctx.stroke();
    
    // Loops
    const startY = y + 15;
    const loopHeight = length - 30;
    const numLoops = 4;
    const loopH = loopHeight / numLoops;
    
    for (let i = 0; i < numLoops; i++) {
      ctx.beginPath();
      const cy = startY + i * loopH + loopH / 2;
      ctx.arc(x, cy, loopH / 1.5, -Math.PI / 2, Math.PI / 2, false);
      ctx.stroke();
    }
    
    // Bottom lead
    ctx.beginPath();
    ctx.moveTo(x, y + length - 15);
    ctx.lineTo(x, y + length);
    ctx.stroke();
    
    // Label - positioned to the right, outside the component
    ctx.font = 'bold 12px Inter, sans-serif';
    ctx.fillStyle = 'var(--accent2)';
    ctx.textAlign = 'left';
    ctx.fillText(label, x + 28, y + length/2 - 6);
    ctx.font = 'bold 11px Inter, sans-serif';
    ctx.fillStyle = 'var(--correct)';
    ctx.fillText(valStr, x + 28, y + length/2 + 8);
  } else {
    // Left lead
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 15, y);
    ctx.stroke();
    
    // Loops
    const startX = x + 15;
    const loopWidth = length - 30;
    const numLoops = 4;
    const loopW = loopWidth / numLoops;
    
    for (let i = 0; i < numLoops; i++) {
      ctx.beginPath();
      const cx = startX + i * loopW + loopW / 2;
      ctx.arc(cx, y, loopW / 1.5, Math.PI, 0, false);
      ctx.stroke();
    }
    
    // Right lead
    ctx.beginPath();
    ctx.moveTo(x + length - 15, y);
    ctx.lineTo(x + length, y);
    ctx.stroke();
    
    // Label - positioned ABOVE the component, well clear of loops
    ctx.font = 'bold 12px Inter, sans-serif';
    ctx.fillStyle = 'var(--accent2)';
    ctx.textAlign = 'center';
    ctx.fillText(label, x + length/2, y - 24);
    ctx.font = 'bold 11px Inter, sans-serif';
    ctx.fillStyle = 'var(--correct)';
    ctx.fillText(valStr, x + length/2, y - 12);
  }
  ctx.restore();
}

/**
 * Draw a Capacitor
 */
function drawCapacitor(ctx, x, y, length, isVertical, label, valStr) {
  ctx.save();
  ctx.strokeStyle = 'var(--text)';
  ctx.lineWidth = 2.5;
  const plateGap = 8;
  const plateSize = 20;
  
  if (isVertical) {
    // Top lead
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + length/2 - plateGap/2);
    ctx.stroke();
    
    // Top plate
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x - plateSize/2, y + length/2 - plateGap/2);
    ctx.lineTo(x + plateSize/2, y + length/2 - plateGap/2);
    ctx.stroke();
    
    // Bottom plate
    ctx.beginPath();
    ctx.moveTo(x - plateSize/2, y + length/2 + plateGap/2);
    ctx.lineTo(x + plateSize/2, y + length/2 + plateGap/2);
    ctx.stroke();
    ctx.lineWidth = 2.5;
    
    // Bottom lead
    ctx.beginPath();
    ctx.moveTo(x, y + length/2 + plateGap/2);
    ctx.lineTo(x, y + length);
    ctx.stroke();
    
    // Label - positioned to the right, outside the component
    ctx.font = 'bold 12px Inter, sans-serif';
    ctx.fillStyle = 'var(--accent2)';
    ctx.textAlign = 'left';
    ctx.fillText(label, x + 18, y + length/2 - 6);
    ctx.font = 'bold 11px Inter, sans-serif';
    ctx.fillStyle = 'var(--correct)';
    ctx.fillText(valStr, x + 18, y + length/2 + 8);
  } else {
    // Left lead
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + length/2 - plateGap/2, y);
    ctx.stroke();
    
    // Left plate
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x + length/2 - plateGap/2, y - plateSize/2);
    ctx.lineTo(x + length/2 - plateGap/2, y + plateSize/2);
    ctx.stroke();
    
    // Right plate
    ctx.beginPath();
    ctx.moveTo(x + length/2 + plateGap/2, y - plateSize/2);
    ctx.lineTo(x + length/2 + plateGap/2, y + plateSize/2);
    ctx.stroke();
    ctx.lineWidth = 2.5;
    
    // Right lead
    ctx.beginPath();
    ctx.moveTo(x + length/2 + plateGap/2, y);
    ctx.lineTo(x + length, y);
    ctx.stroke();
    
    // Label - positioned ABOVE the component, well clear of plates
    ctx.font = 'bold 12px Inter, sans-serif';
    ctx.fillStyle = 'var(--accent2)';
    ctx.textAlign = 'center';
    ctx.fillText(label, x + length/2, y - 22);
    ctx.font = 'bold 11px Inter, sans-serif';
    ctx.fillStyle = 'var(--correct)';
    ctx.fillText(valStr, x + length/2, y - 10);
  }
  ctx.restore();
}

/**
 * Draw component wrapper helper
 */
function drawComponent(ctx, x, y, length, isVertical, type, label, valStr) {
  if (type === 'R') drawResistor(ctx, x, y, length, isVertical, label, valStr);
  else if (type === 'L') drawInductor(ctx, x, y, length, isVertical, label, valStr);
  else if (type === 'C') drawCapacitor(ctx, x, y, length, isVertical, label, valStr);
}

/**
 * High-level schematic renderer based on topology data
 */
function drawCircuit(canvas, data) {
  const ctx = getCanvasContext(canvas, 600, 280);
  ctx.clearRect(0, 0, 600, 280);
  
  // Set default lines styling - thicker for dark mode visibility
  ctx.strokeStyle = 'var(--text)';
  ctx.lineWidth = 2.5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  const topY = 60;
  const bottomY = 180;
  
  if (data.topology === 'ladder') {
    // Draw terminals A and B
    drawTerminal(ctx, 60, topY, 'A');
    drawTerminal(ctx, 60, bottomY, 'B');
    
    // Bottom rail connects all
    ctx.beginPath();
    ctx.moveTo(60, bottomY);
    ctx.lineTo(480, bottomY);
    ctx.stroke();
    
    // Coordinates
    const x1 = 120, x2 = 220, x3 = 320, x4 = 420;
    
    // Junction dots
    drawJunction(ctx, x1, bottomY);
    drawJunction(ctx, x2, bottomY);
    drawJunction(ctx, x3, bottomY);
    
    // Branch 1: L1 (vertical)
    ctx.beginPath();
    ctx.moveTo(60, topY);
    ctx.lineTo(x1, topY);
    ctx.stroke();
    drawComponent(ctx, x1, topY, bottomY - topY, true, data.compType, 'L1', data.vals[0] + ' ' + data.unit);
    drawJunction(ctx, x1, topY);
    
    // L2 (horizontal)
    drawComponent(ctx, x1, topY, x2 - x1, false, data.compType, 'L2', data.vals[1] + ' ' + data.unit);
    drawJunction(ctx, x2, topY);
    
    // Branch 2: L3 (vertical)
    drawComponent(ctx, x2, topY, bottomY - topY, true, data.compType, 'L3', data.vals[2] + ' ' + data.unit);
    
    // L4 (horizontal)
    drawComponent(ctx, x2, topY, x3 - x2, false, data.compType, 'L4', data.vals[3] + ' ' + data.unit);
    drawJunction(ctx, x3, topY);
    
    // Branch 3: L5 (vertical)
    drawComponent(ctx, x3, topY, bottomY - topY, true, data.compType, 'L5', data.vals[4] + ' ' + data.unit);
    
    // L6 (horizontal)
    drawComponent(ctx, x3, topY, x4 - x3, false, data.compType, 'L6', data.vals[5] + ' ' + data.unit);
    
    // Branch 4: L7 (vertical)
    drawComponent(ctx, x4, topY, bottomY - topY, true, data.compType, 'L7', data.vals[6] + ' ' + data.unit);
    
  } else if (data.topology === 'series') {
    // Draw AC source on the left
    drawACSource(ctx, 60, (topY + bottomY)/2, 22, data.voltage + ' V', data.frequency + ' Hz');
    
    // Connecting wires
    ctx.beginPath();
    ctx.moveTo(60, (topY + bottomY)/2 - 22);
    ctx.lineTo(60, topY);
    ctx.lineTo(120, topY);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(60, (topY + bottomY)/2 + 22);
    ctx.lineTo(60, bottomY);
    ctx.lineTo(440, bottomY);
    ctx.stroke();
    
    const x1 = 120, x2 = 220, x3 = 320;
    
    // Component 1
    drawComponent(ctx, x1, topY, 80, false, data.types[0], data.labels[0], data.valStrs[0]);
    ctx.beginPath(); ctx.moveTo(x1 + 80, topY); ctx.lineTo(x2, topY); ctx.stroke();
    
    // Component 2
    if (data.labels.length > 1) {
      drawComponent(ctx, x2, topY, 80, false, data.types[1], data.labels[1], data.valStrs[1]);
      ctx.beginPath(); ctx.moveTo(x2 + 80, topY); ctx.lineTo(x3, topY); ctx.stroke();
    } else {
      ctx.beginPath(); ctx.moveTo(x2, topY); ctx.lineTo(x3, topY); ctx.stroke();
    }
    
    // Component 3
    if (data.labels.length > 2) {
      drawComponent(ctx, x3, topY, 80, false, data.types[2], data.labels[2], data.valStrs[2]);
      ctx.beginPath(); ctx.moveTo(x3 + 80, topY); ctx.lineTo(440, topY); ctx.stroke();
    } else {
      ctx.beginPath(); ctx.moveTo(x3, topY); ctx.lineTo(440, topY); ctx.stroke();
    }
    
    // Right vertical return wire
    ctx.beginPath();
    ctx.moveTo(440, topY);
    ctx.lineTo(440, bottomY);
    ctx.stroke();
    
  } else if (data.topology === 'parallel') {
    // Draw AC source
    drawACSource(ctx, 60, (topY + bottomY)/2, 22, data.voltage + ' V', data.frequency + ' Hz');
    
    // Top and bottom rail connect source to branches
    ctx.beginPath();
    ctx.moveTo(60, (topY + bottomY)/2 - 22);
    ctx.lineTo(60, topY);
    ctx.lineTo(400, topY);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(60, (topY + bottomY)/2 + 22);
    ctx.lineTo(60, bottomY);
    ctx.lineTo(400, bottomY);
    ctx.stroke();
    
    const bx = [150, 270, 390];
    
    // Branch 1
    drawJunction(ctx, bx[0], topY);
    drawJunction(ctx, bx[0], bottomY);
    drawComponent(ctx, bx[0], topY, bottomY - topY, true, data.types[0], data.labels[0], data.valStrs[0]);
    
    // Branch 2
    drawJunction(ctx, bx[1], topY);
    drawJunction(ctx, bx[1], bottomY);
    drawComponent(ctx, bx[1], topY, bottomY - topY, true, data.types[1], data.labels[1], data.valStrs[1]);
    
    // Branch 3 (optional)
    if (data.labels.length > 2) {
      drawJunction(ctx, bx[2], topY);
      drawJunction(ctx, bx[2], bottomY);
      drawComponent(ctx, bx[2], topY, bottomY - topY, true, data.types[2], data.labels[2], data.valStrs[2]);
    } else {
      // Shorten rails if only 2 branches
      ctx.clearRect(310, topY - 20, 300, 200);
      ctx.beginPath();
      ctx.moveTo(bx[1], topY); ctx.lineTo(bx[1], bottomY);
      ctx.stroke();
    }
    
  } else if (data.topology === 'series_parallel') {
    // Draw AC source
    drawACSource(ctx, 60, (topY + bottomY)/2, 22, data.voltage + ' V', data.frequency + ' Hz');
    
    // Wires
    ctx.beginPath();
    ctx.moveTo(60, (topY + bottomY)/2 - 22);
    ctx.lineTo(60, topY);
    ctx.lineTo(110, topY);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(60, (topY + bottomY)/2 + 22);
    ctx.lineTo(60, bottomY);
    ctx.lineTo(390, bottomY);
    ctx.stroke();
    
    // Series Component
    drawComponent(ctx, 110, topY, 80, false, data.types[0], data.labels[0], data.valStrs[0]);
    
    // Connect series to parallel branches
    ctx.beginPath();
    ctx.moveTo(190, topY);
    ctx.lineTo(390, topY);
    ctx.stroke();
    
    // Parallel Branch 1
    const p1 = 260;
    drawJunction(ctx, p1, topY);
    drawJunction(ctx, p1, bottomY);
    drawComponent(ctx, p1, topY, bottomY - topY, true, data.types[1], data.labels[1], data.valStrs[1]);
    
    // Parallel Branch 2
    const p2 = 360;
    drawJunction(ctx, p2, topY);
    drawJunction(ctx, p2, bottomY);
    drawComponent(ctx, p2, topY, bottomY - topY, true, data.types[2], data.labels[2], data.valStrs[2]);
  }
}

// --- QUESTION GENERATOR & SOLVER ---

/**
 * Generate a dynamic circuit problem based on difficulty and type constraints
 */
function generateRandomCalculationQuestion(difficulty = 'medium', type = 'all') {
  // Define available sub-generators
  const generators = [];
  
  if (type === 'all' || type === 'resistors') {
    if (difficulty === 'easy') {
      generators.push(genResistorSeriesEasy);
      generators.push(genResistorParallelEasy);
    } else if (difficulty === 'medium') {
      generators.push(genResistorSeriesMedium);
      generators.push(genResistorParallelMedium);
      generators.push(genResistorSeriesParallelMedium);
    } else { // hard
      generators.push(genResistorLadderHard);
      generators.push(genResistorSeriesParallelHard);
    }
  }
  
  if (type === 'all' || type === 'inductors') {
    if (difficulty === 'easy') {
      generators.push(genInductorSeriesEasy);
      generators.push(genInductorReactanceEasy);
    } else if (difficulty === 'medium') {
      generators.push(genInductorReactanceMedium);
      generators.push(genInductorSeriesParallelMedium);
    } else { // hard
      generators.push(genInductorLadderHard);
    }
  }

  if (type === 'all' || type === 'capacitors') {
    if (difficulty === 'easy') {
      generators.push(genCapacitorParallelEasy);
      generators.push(genCapacitorReactanceEasy);
    } else if (difficulty === 'medium') {
      generators.push(genCapacitorSeriesMedium);
      generators.push(genCapacitorReactanceMedium);
    } else { // hard
      generators.push(genCapacitorLadderHard);
    }
  }
  
  if (type === 'all' || type === 'rlc') {
    if (difficulty === 'easy') {
      generators.push(genACReactanceRLC);
    } else if (difficulty === 'medium') {
      generators.push(genSeriesRLCImpedanceMedium);
      generators.push(genParallelRLCCurrentMedium);
    } else { // hard
      generators.push(genSeriesRLCCurrentHard);
      generators.push(genParallelRLCImpedanceHard);
    }
  }

  // Fail-safe selection if list is empty
  const selectedGen = generators.length > 0 
    ? generators[Math.floor(Math.random() * generators.length)]
    : genResistorSeriesEasy;
    
  const q = selectedGen();
  q.isCalculation = true;
  q.subject = 'V. Calculation Practice';
  q.category = 'Circuit Calculations';
  return q;
}

// --- SUB-GENERATORS IMPLEMENTATION ---

// Help generate options helper
function makeOptions(correctVal, unit, formatFn = (v) => v.toFixed(2)) {
  const correctText = `${formatFn(correctVal)} ${unit}`;
  const optsSet = new Set([correctText]);
  
  // Generate intelligent distractors
  const multipliers = [0.5, 2.0, 10.0, 0.1, 1.5, 0.75, 1.25];
  while (optsSet.size < 4) {
    const mult = multipliers[Math.floor(Math.random() * multipliers.length)];
    let raw = correctVal * mult;
    
    // Add minor offset to make it look like a rounding error
    if (Math.random() > 0.5) raw += (Math.random() - 0.5) * (correctVal * 0.1);
    
    // Handle very small values
    if (raw < 0.01) raw = 0.01;
    
    const distText = `${formatFn(raw)} ${unit}`;
    optsSet.add(distText);
  }
  
  // Shuffle options
  const list = Array.from(optsSet).map(txt => ({
    text: txt,
    isCorrect: txt === correctText
  })).sort(() => Math.random() - 0.5);
  
  return list;
}

// --- DC RESISTOR GENERATORS ---

function genResistorSeriesEasy() {
  const R1 = [10, 22, 47, 100, 150, 220][Math.floor(Math.random()*6)];
  const R2 = [10, 22, 47, 100, 150, 220][Math.floor(Math.random()*6)];
  const Req = R1 + R2;
  const V_s = 24;
  
  return {
    topic: 'DC Resistor Circuits',
    text: `For a series DC circuit consisting of two resistors, R1 = ${R1} Ω and R2 = ${R2} Ω, connected to a power supply. Find the total equivalent resistance (R_EQ) of the network.`,
    options: makeOptions(Req, 'Ω', v => Math.round(v)),
    circuitData: {
      topology: 'series',
      voltage: V_s,
      frequency: 0,
      types: ['R', 'R'],
      labels: ['R1', 'R2'],
      valStrs: [`${R1} Ω`, `${R2} Ω`]
    },
    walkthrough: `
      1. Identify that the resistors are connected in series.<br>
      2. Use the series resistance formula: <strong>R_EQ = R1 + R2</strong>.<br>
      3. Substitute the values: R_EQ = ${R1} + ${R2} = <strong>${Req} Ω</strong>.
    `
  };
}

function genResistorParallelEasy() {
  // Choose pairs that yield clean parallel combinations
  const pairs = [
    [100, 100, 50],
    [60, 30, 20],
    [40, 40, 20],
    [120, 60, 40],
    [200, 200, 100]
  ];
  const p = pairs[Math.floor(Math.random() * pairs.length)];
  const R1 = p[0], R2 = p[1], Req = p[2];
  const V_s = 12;
  
  return {
    topic: 'DC Resistor Circuits',
    text: `A DC circuit has R1 = ${R1} Ω and R2 = ${R2} Ω connected in parallel. Calculate the total equivalent resistance (R_EQ) of the branch.`,
    options: makeOptions(Req, 'Ω', v => Math.round(v)),
    circuitData: {
      topology: 'parallel',
      voltage: V_s,
      frequency: 0,
      types: ['R', 'R'],
      labels: ['R1', 'R2'],
      valStrs: [`${R1} Ω`, `${R2} Ω`]
    },
    walkthrough: `
      1. Identify that the resistors are in parallel.<br>
      2. Use the parallel resistance formula: <strong>R_EQ = (R1 * R2) / (R1 + R2)</strong> or <strong>1/R_EQ = 1/R1 + 1/R2</strong>.<br>
      3. Substitute the values: R_EQ = (${R1} * ${R2}) / (${R1} + ${R2}) = ${R1 * R2} / ${R1 + R2} = <strong>${Req} Ω</strong>.
    `
  };
}

function genResistorSeriesMedium() {
  const R1 = 50;
  const R2 = 100;
  const R3 = 150;
  const Req = R1 + R2 + R3;
  const V_s = 24;
  const I_T = V_s / Req;
  
  return {
    topic: 'DC Resistor Circuits',
    text: `In a series circuit, R1 = ${R1} Ω, R2 = ${R2} Ω, and R3 = ${R3} Ω are connected to a V_s = ${V_s} V DC source. Calculate the total circuit current (I_T) in milliamperes.`,
    options: makeOptions(I_T * 1000, 'mA', v => v.toFixed(1)),
    circuitData: {
      topology: 'series',
      voltage: V_s,
      frequency: 0,
      types: ['R', 'R', 'R'],
      labels: ['R1', 'R2', 'R3'],
      valStrs: [`${R1} Ω`, `${R2} Ω`, `${R3} Ω`]
    },
    walkthrough: `
      1. Calculate total resistance (R_EQ) in series: R_EQ = R1 + R2 + R3 = ${R1} + ${R2} + ${R3} = ${Req} Ω.<br>
      2. Use Ohm's Law to find total current: I_T = V_s / R_EQ = ${V_s} V / ${Req} Ω = ${I_T.toFixed(4)} A.<br>
      3. Convert to milliamperes: I_T = ${I_T.toFixed(4)} * 1000 = <strong>${(I_T * 1000).toFixed(1)} mA</strong>.
    `
  };
}

function genResistorParallelMedium() {
  const R1 = 60, R2 = 30, R3 = 20;
  const Req = 10; // (1/60 + 1/30 + 1/20)^-1 = 10
  const V_s = 12;
  const I_T = V_s / Req;
  
  return {
    topic: 'DC Resistor Circuits',
    text: `Three resistors R1 = ${R1} Ω, R2 = ${R2} Ω, and R3 = ${R3} Ω are in parallel across a V_s = ${V_s} V supply. Find the total current (I_T) drawn from the source.`,
    options: makeOptions(I_T, 'A', v => v.toFixed(2)),
    circuitData: {
      topology: 'parallel',
      voltage: V_s,
      frequency: 0,
      types: ['R', 'R', 'R'],
      labels: ['R1', 'R2', 'R3'],
      valStrs: [`${R1} Ω`, `${R2} Ω`, `${R3} Ω`]
    },
    walkthrough: `
      1. Calculate total parallel resistance (R_EQ):<br>
         &nbsp;&nbsp; 1/R_EQ = 1/R1 + 1/R2 + 1/R3 = 1/${R1} + 1/${R2} + 1/${R3}<br>
         &nbsp;&nbsp; 1/R_EQ = 1/60 + 2/60 + 3/60 = 6/60 = 1/10 => R_EQ = 10 Ω.<br>
      2. Use Ohm's Law to calculate total current: I_T = V_s / R_EQ = ${V_s} V / 10 Ω = <strong>${I_T.toFixed(2)} A</strong>.
    `
  };
}

function genResistorSeriesParallelMedium() {
  const R1 = 40; // Series
  const R2 = 120, R3 = 60; // Parallel pair (Req = 40)
  const Req = R1 + 40; // Total 80
  const V_s = 24;
  const I_T = V_s / Req; // 0.3 A
  const V_par = I_T * 40; // 12 V
  
  return {
    topic: 'DC Resistor Circuits',
    text: `For a series-parallel network, R1 = ${R1} Ω is in series with a parallel group of R2 = ${R2} Ω and R3 = ${R3} Ω. If connected to a ${V_s} V DC source, what is the voltage drop across the parallel bank (R2 || R3)?`,
    options: makeOptions(V_par, 'V', v => v.toFixed(1)),
    circuitData: {
      topology: 'series_parallel',
      voltage: V_s,
      frequency: 0,
      types: ['R', 'R', 'R'],
      labels: ['R1', 'R2', 'R3'],
      valStrs: [`${R1} Ω`, `${R2} Ω`, `${R3} Ω`]
    },
    walkthrough: `
      1. First simplify the parallel bank: R_par = (R2 * R3) / (R2 + R3) = (${R2} * ${R3}) / (${R2} + ${R3}) = 7200 / 180 = 40 Ω.<br>
      2. Now calculate total equivalent resistance: R_EQ = R1 + R_par = ${R1} + 40 = 80 Ω.<br>
      3. Solve for total circuit current: I_T = V_s / R_EQ = ${V_s} V / 80 Ω = 0.3 A.<br>
      4. Find voltage drop across parallel bank using Ohm's Law: V_par = I_T * R_par = 0.3 A * 40 Ω = <strong>${V_par.toFixed(1)} V</strong>.
    `
  };
}

function genResistorSeriesParallelHard() {
  const R1 = 50; // Series
  const R2 = 200, R3 = 200; // Parallel pair (Req = 100)
  const Req = R1 + 100; // Total 150
  const V_s = 30;
  const I_T = V_s / Req; // 0.2 A
  const I_R3 = I_T * (R2 / (R2 + R3)); // 0.1 A
  
  return {
    topic: 'DC Resistor Circuits',
    text: `In a series-parallel circuit, R1 = ${R1} Ω is connected in series with the parallel combination of R2 = ${R2} Ω and R3 = ${R3} Ω. If a DC voltage of ${V_s} V is applied to the circuit, what is the current through resistor R3?`,
    options: makeOptions(I_R3, 'A', v => v.toFixed(3)),
    circuitData: {
      topology: 'series_parallel',
      voltage: V_s,
      frequency: 0,
      types: ['R', 'R', 'R'],
      labels: ['R1', 'R2', 'R3'],
      valStrs: [`${R1} Ω`, `${R2} Ω`, `${R3} Ω`]
    },
    walkthrough: `
      1. Calculate the parallel resistance of R2 and R3: R_par = (200 * 200) / (200 + 200) = 100 Ω.<br>
      2. Calculate total resistance: R_EQ = R1 + R_par = ${R1} + 100 = 150 Ω.<br>
      3. Find total circuit current: I_T = V_s / R_EQ = ${V_s} V / 150 Ω = 0.2 A.<br>
      4. Since R2 and R3 are of equal value and in parallel, they divide the total current equally: I_R3 = I_T / 2 = 0.2 A / 2 = <strong>${I_R3.toFixed(3)} A</strong>.
    `
  };
}

function genResistorLadderHard() {
  // Scaled values for Resistor Ladder
  const scale = [1, 2, 0.5, 10][Math.floor(Math.random() * 4)];
  const rVals = [40, 10, 60, 30, 60, 30, 30].map(v => v * scale);
  const Req = 20 * scale;
  
  return {
    topic: 'DC Resistor Circuits',
    text: `Simplify the complex resistor ladder circuit shown below to find the total equivalent resistance (R_EQ) measured between terminals A and B. <br>
           [Values: R1=${rVals[0]}Ω, R2=${rVals[1]}Ω, R3=${rVals[2]}Ω, R4=${rVals[3]}Ω, R5=${rVals[4]}Ω, R6=${rVals[5]}Ω, R7=${rVals[6]}Ω]`,
    options: makeOptions(Req, 'Ω', v => Math.round(v)),
    circuitData: {
      topology: 'ladder',
      compType: 'R',
      unit: 'Ω',
      vals: rVals
    },
    walkthrough: `
      Let's simplify this ladder network step-by-step from right to left:<br>
      1. <strong>R6 and R7</strong> are in series on the far right: R67 = R6 + R7 = ${rVals[5]} + ${rVals[6]} = ${rVals[5] + rVals[6]} Ω.<br>
      2. <strong>R67</strong> is in parallel with vertical <strong>R5</strong>: R5_67 = (R5 * R67) / (R5 + R67) = (${rVals[4]} * ${rVals[5] + rVals[6]}) / (${rVals[4]} + ${rVals[5] + rVals[6]}) = ${rVals[4] * (rVals[5]+rVals[6]) / (rVals[4] + rVals[5] + rVals[6])} Ω.<br>
      3. This group is in series with horizontal <strong>R4</strong>: R4_567 = R4 + R5_67 = ${rVals[3]} + ${rVals[3]} = ${rVals[3] * 2} Ω.<br>
      4. This group is in parallel with vertical <strong>R3</strong>: R3_4567 = (R3 * R4_567) / (R3 + R4_567) = (${rVals[2]} * ${rVals[3] * 2}) / (${rVals[2]} + ${rVals[3] * 2}) = ${rVals[2]/2} Ω.<br>
      5. This group is in series with horizontal <strong>R2</strong>: R2_34567 = R2 + R3_4567 = ${rVals[1]} + ${rVals[2]/2} = ${rVals[1] + rVals[2]/2} Ω.<br>
      6. Finally, this is in parallel with vertical <strong>R1</strong> at terminals A-B: R_EQ = (R1 * R2_34567) / (R1 + R2_34567) = <strong>${Req} Ω</strong>.
    `
  };
}

// --- DC/AC INDUCTOR GENERATORS ---

function genInductorSeriesEasy() {
  const L1 = 10, L2 = 15, L3 = 25;
  const Leq = L1 + L2 + L3;
  
  return {
    topic: 'Inductor Circuits',
    text: `A circuit consists of three inductors in series: L1 = ${L1} mH, L2 = ${L2} mH, and L3 = ${L3} mH. Assuming no mutual coupling, calculate the total equivalent inductance (L_EQ).`,
    options: makeOptions(Leq, 'mH', v => Math.round(v)),
    circuitData: {
      topology: 'series',
      voltage: 12,
      frequency: 0,
      types: ['L', 'L', 'L'],
      labels: ['L1', 'L2', 'L3'],
      valStrs: [`${L1} mH`, `${L2} mH`, `${L3} mH`]
    },
    walkthrough: `
      1. For inductors in series (with no mutual coupling), equivalent inductance is simply the sum of individual inductances.<br>
      2. Formula: <strong>L_EQ = L1 + L2 + L3</strong>.<br>
      3. Calculate: L_EQ = ${L1} + ${L2} + ${L3} = <strong>${Leq} mH</strong>.
    `
  };
}

function genInductorReactanceEasy() {
  const L = 50; // mH
  const f = [60, 400][Math.floor(Math.random()*2)];
  const X_L = 2 * Math.PI * f * (L / 1000);
  
  return {
    topic: 'Inductor Circuits',
    text: `An inductor with L = ${L} mH is connected to a power supply with a frequency of f = ${f} Hz. Calculate the inductive reactance (X_L) of the inductor.`,
    options: makeOptions(X_L, 'Ω', v => v.toFixed(2)),
    circuitData: {
      topology: 'series',
      voltage: 120,
      frequency: f,
      types: ['L'],
      labels: ['L1'],
      valStrs: [`${L} mH`]
    },
    walkthrough: `
      1. The formula for inductive reactance is: <strong>X_L = 2 * π * f * L</strong>.<br>
      2. Convert L from mH to Henries: L = ${L} mH = ${L/1000} H.<br>
      3. Substitute f = ${f} Hz and L = ${L/1000} H:<br>
         X_L = 2 * 3.14159 * ${f} * ${L/1000} = <strong>${X_L.toFixed(2)} Ω</strong>.
    `
  };
}

function genInductorReactanceMedium() {
  const L1 = 40, L2 = 60; // Series -> 100mH
  const Leq = L1 + L2;
  const f = [60, 400][Math.floor(Math.random()*2)];
  const X_L = 2 * Math.PI * f * (Leq / 1000);
  
  return {
    topic: 'Inductor Circuits',
    text: `Two inductors L1 = ${L1} mH and L2 = ${L2} mH are connected in series to an AC generator operating at ${f} Hz. Find the total inductive reactance (X_L) of this network.`,
    options: makeOptions(X_L, 'Ω', v => v.toFixed(1)),
    circuitData: {
      topology: 'series',
      voltage: 115,
      frequency: f,
      types: ['L', 'L'],
      labels: ['L1', 'L2'],
      valStrs: [`${L1} mH`, `${L2} mH`]
    },
    walkthrough: `
      1. Find total equivalent inductance (L_EQ) of the series network: L_EQ = L1 + L2 = ${L1} + ${L2} = ${Leq} mH = ${Leq/1000} H.<br>
      2. Use the inductive reactance formula: <strong>X_L = 2 * π * f * L_EQ</strong>.<br>
      3. Compute: X_L = 2 * π * ${f} * ${Leq/1000} = <strong>${X_L.toFixed(1)} Ω</strong>.
    `
  };
}

function genInductorSeriesParallelMedium() {
  const L1 = 15; // Series
  const L2 = 30, L3 = 60; // Parallel pair (Leq = 20)
  const Leq = L1 + 20; // Total 35
  
  return {
    topic: 'Inductor Circuits',
    text: `A series-parallel circuit has inductor L1 = ${L1} mH in series with a parallel group of L2 = ${L2} mH and L3 = ${L3} mH. Find the total equivalent inductance (L_EQ) in mH.`,
    options: makeOptions(Leq, 'mH', v => Math.round(v)),
    circuitData: {
      topology: 'series_parallel',
      voltage: 24,
      frequency: 0,
      types: ['L', 'L', 'L'],
      labels: ['L1', 'L2', 'L3'],
      valStrs: [`${L1} mH`, `${L2} mH`, `${L3} mH`]
    },
    walkthrough: `
      1. First solve for parallel inductors L2 and L3: L_par = (L2 * L3) / (L2 + L3) = (${L2} * ${L3}) / (${L2} + ${L3}) = 1800 / 90 = 20 mH.<br>
      2. Solve for total series inductance: L_EQ = L1 + L_par = ${L1} + 20 = <strong>${Leq} mH</strong>.
    `
  };
}

function genInductorLadderHard() {
  // Scaled values for Inductor Ladder (Image 1 style!)
  const scale = [1, 2, 0.5, 10][Math.floor(Math.random() * 4)];
  const lVals = [40, 10, 60, 30, 60, 30, 30].map(v => v * scale);
  const Leq = 20 * scale;
  
  return {
    topic: 'Inductor Circuits',
    text: `Find the total equivalent inductance (L_EQ) measured between terminals A and B for the complex inductor ladder schematic shown below. <br>
           [Values: L1=${lVals[0]}mH, L2=${lVals[1]}mH, L3=${lVals[2]}mH, L4=${lVals[3]}mH, L5=${lVals[4]}mH, L6=${lVals[5]}mH, L7=${lVals[6]}mH]`,
    options: makeOptions(Leq, 'mH', v => Math.round(v)),
    circuitData: {
      topology: 'ladder',
      compType: 'L',
      unit: 'mH',
      vals: lVals
    },
    walkthrough: `
      Let's simplify this ladder network step-by-step from right to left:<br>
      1. <strong>L6 and L7</strong> are in series on the far right: L67 = L6 + L7 = ${lVals[5]} + ${lVals[6]} = ${lVals[5] + lVals[6]} mH.<br>
      2. <strong>L67</strong> is in parallel with vertical <strong>L5</strong>: L5_67 = (L5 * L67) / (L5 + L67) = (${lVals[4]} * ${lVals[5] + lVals[6]}) / (${lVals[4]} + ${lVals[5] + lVals[6]}) = ${lVals[4] * (lVals[5]+lVals[6]) / (lVals[4] + lVals[5] + lVals[6])} mH.<br>
      3. This group is in series with horizontal <strong>L4</strong>: L4_567 = L4 + L5_67 = ${lVals[3]} + ${lVals[3]} = ${lVals[3] * 2} mH.<br>
      4. This group is in parallel with vertical <strong>L3</strong>: L3_4567 = (L3 * L4_567) / (L3 + L4_567) = (${lVals[2]} * ${lVals[3] * 2}) / (${lVals[2]} + ${lVals[3] * 2}) = ${lVals[2]/2} mH.<br>
      5. This group is in series with horizontal <strong>L2</strong>: L2_34567 = L2 + L3_4567 = ${lVals[1]} + ${lVals[2]/2} = ${lVals[1] + lVals[2]/2} mH.<br>
      6. Finally, this is in parallel with vertical <strong>L1</strong> at terminals A-B: L_EQ = (L1 * L2_34567) / (L1 + L2_34567) = <strong>${Leq} mH</strong>.
    `
  };
}

// --- DC/AC CAPACITOR GENERATORS ---

function genCapacitorParallelEasy() {
  const C1 = [1, 2.2, 4.7, 10][Math.floor(Math.random()*4)];
  const C2 = [1, 2.2, 4.7, 10][Math.floor(Math.random()*4)];
  const Ceq = C1 + C2;
  
  return {
    topic: 'Capacitor Circuits',
    text: `A parallel combination consists of two capacitors: C1 = ${C1} µF and C2 = ${C2} µF. Calculate the total equivalent capacitance (C_EQ).`,
    options: makeOptions(Ceq, 'µF', v => v.toFixed(1)),
    circuitData: {
      topology: 'parallel',
      voltage: 24,
      frequency: 0,
      types: ['C', 'C'],
      labels: ['C1', 'C2'],
      valStrs: [`${C1} µF`, `${C2} µF`]
    },
    walkthrough: `
      1. For capacitors in parallel, the total capacitance is the sum of the individual capacitances (opposite of resistors).<br>
      2. Formula: <strong>C_EQ = C1 + C2</strong>.<br>
      3. Calculate: C_EQ = ${C1} + ${C2} = <strong>${Ceq.toFixed(1)} µF</strong>.
    `
  };
}

function genCapacitorReactanceEasy() {
  const C = 10; // µF
  const f = [60, 400][Math.floor(Math.random()*2)];
  const X_C = 1 / (2 * Math.PI * f * (C / 1000000));
  
  return {
    topic: 'Capacitor Circuits',
    text: `A capacitor with C = ${C} µF is connected to a power supply with a frequency of f = ${f} Hz. Find its capacitive reactance (X_C).`,
    options: makeOptions(X_C, 'Ω', v => v.toFixed(2)),
    circuitData: {
      topology: 'series',
      voltage: 120,
      frequency: f,
      types: ['C'],
      labels: ['C1'],
      valStrs: [`${C} µF`]
    },
    walkthrough: `
      1. The formula for capacitive reactance is: <strong>X_C = 1 / (2 * π * f * C)</strong>.<br>
      2. Convert C from microfarads to Farads: C = ${C} µF = ${C/1000000} F.<br>
      3. Substitute f = ${f} Hz and C = ${C/1000000} F:<br>
         X_C = 1 / (2 * 3.14159 * ${f} * ${C/1000000}) = <strong>${X_C.toFixed(2)} Ω</strong>.
    `
  };
}

function genCapacitorSeriesMedium() {
  // Pairs that yield clean series combinations
  const pairs = [
    [20, 20, 10],
    [30, 15, 10],
    [40, 40, 20],
    [60, 30, 20],
    [100, 100, 50]
  ];
  const p = pairs[Math.floor(Math.random() * pairs.length)];
  const C1 = p[0], C2 = p[1], Ceq = p[2];
  
  return {
    topic: 'Capacitor Circuits',
    text: `A series combination consists of two capacitors: C1 = ${C1} µF and C2 = ${C2} µF. Calculate the total equivalent capacitance (C_EQ) in µF.`,
    options: makeOptions(Ceq, 'µF', v => Math.round(v)),
    circuitData: {
      topology: 'series',
      voltage: 12,
      frequency: 0,
      types: ['C', 'C'],
      labels: ['C1', 'C2'],
      valStrs: [`${C1} µF`, `${C2} µF`]
    },
    walkthrough: `
      1. For capacitors in series, use the reciprocal formula: <strong>1/C_EQ = 1/C1 + 1/C2</strong> or <strong>C_EQ = (C1 * C2) / (C1 + C2)</strong>.<br>
      2. Substitute the values: C_EQ = (${C1} * ${C2}) / (${C1} + ${C2}) = ${C1 * C2} / ${C1 + C2} = <strong>${Ceq} µF</strong>.
    `
  };
}

function genCapacitorReactanceMedium() {
  const C1 = 20, C2 = 20; // Parallel -> 40µF
  const Ceq = C1 + C2;
  const f = [60, 400][Math.floor(Math.random()*2)];
  const X_C = 1 / (2 * Math.PI * f * (Ceq / 1000000));
  
  return {
    topic: 'Capacitor Circuits',
    text: `Two capacitors C1 = ${C1} µF and C2 = ${C2} µF are connected in parallel to an AC generator operating at ${f} Hz. Find the total capacitive reactance (X_C) of this network.`,
    options: makeOptions(X_C, 'Ω', v => v.toFixed(1)),
    circuitData: {
      topology: 'parallel',
      voltage: 115,
      frequency: f,
      types: ['C', 'C'],
      labels: ['C1', 'C2'],
      valStrs: [`${C1} µF`, `${C2} µF`]
    },
    walkthrough: `
      1. Find total equivalent capacitance (C_EQ) of the parallel network: C_EQ = C1 + C2 = ${C1} + ${C2} = ${Ceq} µF = ${Ceq/1000000} F.<br>
      2. Use the capacitive reactance formula: <strong>X_C = 1 / (2 * π * f * C_EQ)</strong>.<br>
      3. Compute: X_C = 1 / (2 * π * ${f} * ${Ceq/1000000}) = <strong>${X_C.toFixed(1)} Ω</strong>.
    `
  };
}

function genCapacitorLadderHard() {
  // Scaled values for Capacitor Ladder (Image 1 style structure, but capacitor rules apply!)
  const scale = [1, 2, 0.5, 10][Math.floor(Math.random() * 4)];
  const cVals = [10, 20, 10, 20, 10, 20, 20].map(v => v * scale);
  const Ceq = 20 * scale;
  
  return {
    topic: 'Capacitor Circuits',
    text: `Calculate the total equivalent capacitance (C_EQ) measured between terminals A and B for the complex capacitor ladder schematic shown below. <br>
           [Values: C1=${cVals[0]}µF, C2=${cVals[1]}µF, C3=${cVals[2]}µF, C4=${cVals[3]}µF, C5=${cVals[4]}µF, C6=${cVals[5]}µF, C7=${cVals[6]}µF]`,
    options: makeOptions(Ceq, 'µF', v => Math.round(v)),
    circuitData: {
      topology: 'ladder',
      compType: 'C',
      unit: 'µF',
      vals: cVals
    },
    walkthrough: `
      Let's simplify this capacitor ladder network step-by-step from right to left (remembering capacitor formulas!):<br>
      1. <strong>C6 and C7</strong> are in series on the far right: C67 = (C6 * C7)/(C6 + C7) = (${cVals[5]} * ${cVals[6]}) / (${cVals[5]} + ${cVals[6]}) = ${cVals[5] / 2} µF.<br>
      2. <strong>C67</strong> is in parallel with vertical <strong>C5</strong>: C5_67 = C5 + C67 = ${cVals[4]} + ${cVals[5]/2} = ${cVals[4] + cVals[5]/2} µF.<br>
      3. This group is in series with horizontal <strong>C4</strong>: C4_567 = (C4 * C5_67)/(C4 + C5_67) = (${cVals[3]} * ${cVals[4] + cVals[5]/2}) / (${cVals[3]} + ${cVals[4] + cVals[5]/2}) = ${cVals[3]/2} µF.<br>
      4. This group is in parallel with vertical <strong>C3</strong>: C3_4567 = C3 + C4_567 = ${cVals[2]} + ${cVals[3]/2} = ${cVals[2] + cVals[3]/2} µF.<br>
      5. This group is in series with horizontal <strong>C2</strong>: C2_34567 = (C2 * C3_4567)/(C2 + C3_4567) = (${cVals[1]} * ${cVals[2] + cVals[3]/2}) / (${cVals[1]} + ${cVals[2] + cVals[3]/2}) = ${cVals[1]/2} µF.<br>
      6. Finally, this is in parallel with vertical <strong>C1</strong> at terminals A-B: C_EQ = C1 + C2_34567 = ${cVals[0]} + ${cVals[1]/2} = <strong>${Ceq} µF</strong>.
    `
  };
}

// --- AC R-L-C CIRCUITS GENERATORS ---

function genACReactanceRLC() {
  const isL = Math.random() > 0.5;
  const f = [60, 400][Math.floor(Math.random()*2)];
  
  if (isL) {
    const L = 15.9; // mH -> X_L is about 40 ohms at 400Hz
    const X_L = 2 * Math.PI * f * (L / 1000);
    return {
      topic: 'AC Reactance',
      text: `Find the inductive reactance (X_L) of a ${L} mH inductor operating in a standard ${f} Hz aviation power distribution grid.`,
      options: makeOptions(X_L, 'Ω', v => v.toFixed(1)),
      circuitData: {
        topology: 'series',
        voltage: 115,
        frequency: f,
        types: ['L'],
        labels: ['L1'],
        valStrs: [`${L} mH`]
      },
      walkthrough: `
        1. Use formula: <strong>X_L = 2 * π * f * L</strong>.<br>
        2. Substitute f = ${f} Hz and L = ${L/1000} H:<br>
           X_L = 2 * π * ${f} * ${L/1000} = <strong>${X_L.toFixed(1)} Ω</strong>.
      `
    };
  } else {
    const C = 26.5; // µF -> X_C is about 10 ohms at 60Hz
    const X_C = 1 / (2 * Math.PI * f * (C / 1000000));
    return {
      topic: 'AC Reactance',
      text: `Calculate the capacitive reactance (X_C) of a ${C} µF capacitor connected to a ${f} Hz AC source.`,
      options: makeOptions(X_C, 'Ω', v => v.toFixed(1)),
      circuitData: {
        topology: 'series',
        voltage: 120,
        frequency: f,
        types: ['C'],
        labels: ['C1'],
        valStrs: [`${C} µF`]
      },
      walkthrough: `
        1. Use formula: <strong>X_C = 1 / (2 * π * f * C)</strong>.<br>
        2. Substitute f = ${f} Hz and C = ${C/1000000} F:<br>
           X_C = 1 / (2 * π * ${f} * ${C/1000000}) = <strong>${X_C.toFixed(1)} Ω</strong>.
      `
    };
  }
}

function genSeriesRLCImpedanceMedium() {
  // Pre-configured clean Pythagorean datasets for AC impedance
  // [R, f, L_mH, C_uF, X_L, X_C, X_T, Z]
  const datasets = [
    // 60 Hz sets
    [40, 60, 106.1, 265.3, 40, 10, 30, 50],
    [80, 60, 212.2, 132.6, 80, 20, 60, 100],
    // 400 Hz sets
    [30, 400, 11.94, 5.68, 30, 70, 40, 50],
    [80, 400, 39.79, 9.95, 100, 40, 60, 100]
  ];
  
  const d = datasets[Math.floor(Math.random() * datasets.length)];
  const R = d[0], f = d[1], L = d[2], C = d[3], XL = d[4], XC = d[5], XT = d[6], Z = d[7];
  const V_s = 120;
  
  return {
    topic: 'AC RLC Circuits',
    text: `A series R-L-C circuit has R = ${R} Ω, L = ${L} mH, and C = ${C} µF connected to a ${f} Hz AC voltage source. Calculate the total impedance (Z) of this circuit.`,
    options: makeOptions(Z, 'Ω', v => Math.round(v)),
    circuitData: {
      topology: 'series',
      voltage: V_s,
      frequency: f,
      types: ['R', 'L', 'C'],
      labels: ['R1', 'L1', 'C1'],
      valStrs: [`${R} Ω`, `${L} mH`, `${C} µF`]
    },
    walkthrough: `
      1. Calculate inductive reactance (X_L): X_L = 2*π*${f}*${L/1000} ≈ ${XL} Ω.<br>
      2. Calculate capacitive reactance (X_C): X_C = 1 / (2*π*${f}*${C/1000000}) ≈ ${XC} Ω.<br>
      3. Find total net reactance: X_T = |X_L - X_C| = |${XL} - ${XC}| = ${XT} Ω.<br>
      4. Find total impedance Z: Z = sqrt(R^2 + X_T^2) = sqrt(${R}^2 + ${XT}^2) = sqrt(${R*R} + ${XT*XT}) = <strong>${Z} Ω</strong>.
    `
  };
}

function genParallelRLCCurrentMedium() {
  // Parallel RLC branch currents (clean values)
  // [R, XL, XC, V_s, IR, IL, IC, IT]
  const datasets = [
    [30, 20, 60, 60, 2, 3, 1, 2.83], // sqrt(2^2 + 2^2) = 2.83 A
    [40, 30, 120, 120, 3, 4, 1, 4.24], // sqrt(3^2 + 3^2) = 4.24 A
    [120, 60, 40, 120, 1, 2, 3, 1.41]  // sqrt(1^2 + 1^2) = 1.41 A
  ];
  const d = datasets[Math.floor(Math.random() * datasets.length)];
  const R = d[0], XL = d[1], XC = d[2], V_s = d[3], IR = d[4], IL = d[5], IC = d[6], IT = d[7];
  
  return {
    topic: 'AC RLC Circuits',
    text: `A parallel network consists of a resistor R = ${R} Ω, inductive reactance X_L = ${XL} Ω, and capacitive reactance X_C = ${XC} Ω. If connected to a V_s = ${V_s} V AC source, find the total current (I_T) in amperes.`,
    options: makeOptions(IT, 'A', v => v.toFixed(2)),
    circuitData: {
      topology: 'parallel',
      voltage: V_s,
      frequency: 400,
      types: ['R', 'L', 'C'],
      labels: ['R1', 'X_L', 'X_C'],
      valStrs: [`${R} Ω`, `${XL} Ω`, `${XC} Ω`]
    },
    walkthrough: `
      1. Calculate individual branch currents:<br>
         &nbsp;&nbsp; I_R = V_s / R = ${V_s} / ${R} = ${IR} A.<br>
         &nbsp;&nbsp; I_L = V_s / X_L = ${V_s} / ${XL} = ${IL} A.<br>
         &nbsp;&nbsp; I_C = V_s / X_C = ${V_s} / ${XC} = ${IC} A.<br>
      2. The total current is found using vector addition (note that I_L and I_C oppose each other):<br>
         &nbsp;&nbsp; I_T = sqrt(I_R^2 + (I_L - I_C)^2)<br>
         &nbsp;&nbsp; I_T = sqrt(${IR}^2 + (${IL} - ${IC})^2) = sqrt(${IR*IR} + ${(IL-IC)*(IL-IC)}) = sqrt(${IR*IR + (IL-IC)*(IL-IC)}) = <strong>${IT.toFixed(2)} A</strong>.
    `
  };
}

function genSeriesRLCCurrentHard() {
  const R = 40, f = 60, L = 106.1, C = 265.3, XL = 40, XC = 10, XT = 30, Z = 50;
  const V_s = 120;
  const I_T = V_s / Z; // 2.4 A
  const V_L = I_T * XL; // 96 V
  
  return {
    topic: 'AC RLC Circuits',
    text: `For a series AC circuit with R = ${R} Ω, L = ${L} mH, and C = ${C} µF operating on a ${V_s} V, ${f} Hz source. Calculate the voltage drop across the inductor (V_L).`,
    options: makeOptions(V_L, 'V', v => v.toFixed(1)),
    circuitData: {
      topology: 'series',
      voltage: V_s,
      frequency: f,
      types: ['R', 'L', 'C'],
      labels: ['R1', 'L1', 'C1'],
      valStrs: [`${R} Ω`, `${L} mH`, `${C} µF`]
    },
    walkthrough: `
      1. Find inductive reactance: X_L = 2 * π * ${f} * ${L/1000} ≈ ${XL} Ω.<br>
      2. Find capacitive reactance: X_C = 1 / (2 * π * ${f} * ${C/1000000}) ≈ ${XC} Ω.<br>
      3. Find total impedance Z: Z = sqrt(R^2 + (X_L - X_C)^2) = sqrt(${R}^2 + (${XL} - ${XC})^2) = 50 Ω.<br>
      4. Find total current I_T: I_T = V_s / Z = ${V_s} V / 50 Ω = 2.4 A.<br>
      5. Calculate inductor voltage drop: V_L = I_T * X_L = 2.4 A * ${XL} Ω = <strong>${V_L.toFixed(1)} V</strong>. (Note: this voltage is out of phase with V_R).
    `
  };
}

function genParallelRLCImpedanceHard() {
  const R = 120, XL = 60, XC = 40, V_s = 120;
  const IR = 1, IL = 2, IC = 3, IT = 1.414;
  const Z = V_s / IT; // 84.85 Ω
  
  return {
    topic: 'AC RLC Circuits',
    text: `Find the total equivalent AC impedance (Z) of a parallel R-L-C network with resistor R = ${R} Ω, inductive reactance X_L = ${XL} Ω, and capacitive reactance X_C = ${XC} Ω.`,
    options: makeOptions(Z, 'Ω', v => v.toFixed(1)),
    circuitData: {
      topology: 'parallel',
      voltage: V_s,
      frequency: 60,
      types: ['R', 'L', 'C'],
      labels: ['R1', 'X_L', 'X_C'],
      valStrs: [`${R} Ω`, `${XL} Ω`, `${XC} Ω`]
    },
    walkthrough: `
      1. Assume a convenient voltage source, e.g. V_s = 120 V AC.<br>
      2. Compute branch currents:<br>
         &nbsp;&nbsp; I_R = 120 / ${R} = 1.0 A.<br>
         &nbsp;&nbsp; I_L = 120 / ${XL} = 2.0 A.<br>
         &nbsp;&nbsp; I_C = 120 / ${XC} = 3.0 A.<br>
      3. Calculate total current: I_T = sqrt(I_R^2 + (I_L - I_C)^2) = sqrt(1^2 + (2 - 3)^2) = sqrt(2) ≈ 1.414 A.<br>
      4. Solve for total circuit impedance: Z = V_s / I_T = 120 V / 1.414 A ≈ <strong>${Z.toFixed(1)} Ω</strong>.
    `
  };
}

// --- INTERACTIVE PRACTICE CONTROLLERS ---

/**
 * Initialize calculation practice UI state
 */
function initCalcPractice() {
  calcState.walkthroughVisible = false;
  document.getElementById('calcWalkthroughCard').style.display = 'none';
  document.getElementById('calcShowWalkthroughBtn').style.display = 'none';
  document.getElementById('calcShowWalkthroughBtn').textContent = 'Show Walkthrough';
  
  // Render stats
  document.getElementById('calcStreak').textContent = calcState.streak;
  document.getElementById('calcCorrect').textContent = calcState.correct;
  document.getElementById('calcTotal').textContent = calcState.answered;
  
  generateNewPractice();
}

/**
 * Generate a new random practice question based on filters
 */
function generateNewPractice() {
  const diff = document.getElementById('calcDifficulty').value;
  const type = document.getElementById('calcType').value;
  
  const q = generateRandomCalculationQuestion(diff, type);
  calcState.currentQuestion = q;
  calcState.walkthroughVisible = false;
  
  // Reset UI elements
  document.getElementById('calcWalkthroughCard').style.display = 'none';
  document.getElementById('calcShowWalkthroughBtn').style.display = 'none';
  document.getElementById('calcShowWalkthroughBtn').textContent = 'Show Walkthrough';
  document.getElementById('calcNextBtn').style.display = 'none';
  
  document.getElementById('calcQText').innerHTML = q.text;
  document.getElementById('calcTopic').textContent = `${q.topic.toUpperCase()} — ${diff.toUpperCase()} LEVEL`;
  
  // Render circuit canvas
  const canvas = document.getElementById('calcCircuitCanvas');
  drawCircuit(canvas, q.circuitData);
  
  // Render options list
  const box = document.getElementById('calcOptionsBox');
  box.innerHTML = '';
  
  q.options.forEach((opt, idx) => {
    const div = document.createElement('div');
    div.className = 'option';
    div.dataset.correct = opt.isCorrect;
    div.innerHTML = `<span class="opt-marker">${String.fromCharCode(65 + idx)}</span><span>${opt.text}</span>`;
    div.addEventListener('click', () => selectCalcOption(div));
    box.appendChild(div);
  });
}

/**
 * Handle user click on options in practice mode
 */
function selectCalcOption(selectedDiv) {
  // If already answered, ignore
  if (document.querySelector('#calcOptionsBox .option.disabled')) return;
  
  const isCorrect = selectedDiv.dataset.correct === 'true';
  
  // Disable all options and show colors
  document.querySelectorAll('#calcOptionsBox .option').forEach(opt => {
    opt.classList.add('disabled');
    if (opt.dataset.correct === 'true') {
      opt.classList.add('correct');
    }
  });
  
  if (isCorrect) {
    calcState.correct++;
    calcState.streak++;
    if (typeof sndCorrect === 'function') sndCorrect();
  } else {
    selectedDiv.classList.add('incorrect');
    calcState.streak = 0;
    if (typeof sndIncorrect === 'function') sndIncorrect();
  }
  
  calcState.answered++;
  
  // Update stats display
  document.getElementById('calcStreak').textContent = calcState.streak;
  document.getElementById('calcCorrect').textContent = calcState.correct;
  document.getElementById('calcTotal').textContent = calcState.answered;
  
  // Render walkthrough content
  document.getElementById('calcWalkthroughText').innerHTML = calcState.currentQuestion.walkthrough;
  document.getElementById('calcShowWalkthroughBtn').style.display = 'inline-flex';
  document.getElementById('calcNextBtn').style.display = 'inline-flex';
}

/**
 * Toggle visibility of explanation walkthrough card
 */
function toggleWalkthrough() {
  calcState.walkthroughVisible = !calcState.walkthroughVisible;
  const card = document.getElementById('calcWalkthroughCard');
  const btn = document.getElementById('calcShowWalkthroughBtn');
  
  if (calcState.walkthroughVisible) {
    card.style.display = 'block';
    btn.textContent = 'Hide Walkthrough';
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    card.style.display = 'none';
    btn.textContent = 'Show Walkthrough';
  }
}
