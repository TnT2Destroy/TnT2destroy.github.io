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

  // Labels - positioned to the left of the AC source to avoid clipping vertical lines
  ctx.font = 'bold 13px Inter, sans-serif';
  ctx.fillStyle = 'var(--correct)';
  ctx.textAlign = 'right';
  ctx.fillText(labelV, x - r - 8, y - 4);
  
  ctx.font = 'bold 12px Inter, sans-serif';
  ctx.fillStyle = 'var(--warning)';
  ctx.fillText(labelF, x - r - 8, y + 12);
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
    
    const numComps = data.vals.length;
    const x1 = 120, x2 = 220, x3 = 320, x4 = 420;
    
    // Determine end coordinate based on number of components
    let endX = x4;
    if (numComps <= 3) endX = x2;
    else if (numComps <= 5) endX = x3;
    
    // Bottom rail connects all
    ctx.beginPath();
    ctx.moveTo(60, bottomY);
    ctx.lineTo(endX, bottomY);
    ctx.stroke();
    
    // Junction dots at bottom
    drawJunction(ctx, x1, bottomY);
    if (numComps >= 4) drawJunction(ctx, x2, bottomY);
    if (numComps >= 6) drawJunction(ctx, x3, bottomY);
    
    // Branch 1: component 1 (vertical)
    const lp = data.compType;
    ctx.beginPath();
    ctx.moveTo(60, topY);
    ctx.lineTo(x1, topY);
    ctx.stroke();
    drawComponent(ctx, x1, topY, bottomY - topY, true, data.compType, lp+'1', data.vals[0] + ' ' + data.unit);
    drawJunction(ctx, x1, topY);

    if (numComps >= 2) {
      // component 2 (horizontal)
      drawComponent(ctx, x1, topY, x2 - x1, false, data.compType, lp+'2', data.vals[1] + ' ' + data.unit);
    }

    if (numComps >= 3) {
      // Branch 2: component 3 (vertical)
      drawJunction(ctx, x2, topY);
      drawComponent(ctx, x2, topY, bottomY - topY, true, data.compType, lp+'3', data.vals[2] + ' ' + data.unit);
    }

    if (numComps >= 4) {
      // component 4 (horizontal)
      drawComponent(ctx, x2, topY, x3 - x2, false, data.compType, lp+'4', data.vals[3] + ' ' + data.unit);
    }

    if (numComps >= 5) {
      // Branch 3: component 5 (vertical)
      drawJunction(ctx, x3, topY);
      drawComponent(ctx, x3, topY, bottomY - topY, true, data.compType, lp+'5', data.vals[4] + ' ' + data.unit);
    }

    if (numComps >= 6) {
      // component 6 (horizontal)
      drawComponent(ctx, x3, topY, x4 - x3, false, data.compType, lp+'6', data.vals[5] + ' ' + data.unit);
    }

    if (numComps >= 7) {
      // Branch 4: component 7 (vertical)
      drawJunction(ctx, x4, topY);
      drawComponent(ctx, x4, topY, bottomY - topY, true, data.compType, lp+'7', data.vals[6] + ' ' + data.unit);
    }
    
  } else if (data.topology === 'series') {
    // Draw AC source on the left
    drawACSource(ctx, 75, (topY + bottomY)/2, 22, data.voltage + ' V', data.frequency + ' Hz');
    
    const count = data.labels.length;
    // Map components coordinates based on count
    let xs = [];
    let endX = 440;
    if (count === 1) {
      xs = [120];
      endX = 240;
    } else if (count === 2) {
      xs = [120, 240];
      endX = 360;
    } else if (count === 3) {
      xs = [120, 240, 360];
      endX = 480;
    } else if (count === 4) {
      xs = [120, 220, 320, 420];
      endX = 540;
    }
    
    // Connecting wires
    ctx.beginPath();
    ctx.moveTo(75, (topY + bottomY)/2 - 22);
    ctx.lineTo(75, topY);
    ctx.lineTo(120, topY);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(75, (topY + bottomY)/2 + 22);
    ctx.lineTo(75, bottomY);
    ctx.lineTo(endX, bottomY);
    ctx.stroke();
    
    // Draw components and connections between them
    for (let i = 0; i < count; i++) {
      drawComponent(ctx, xs[i], topY, 80, false, data.types[i], data.labels[i], data.valStrs[i]);
      if (i < count - 1) {
        ctx.beginPath();
        ctx.moveTo(xs[i] + 80, topY);
        ctx.lineTo(xs[i+1], topY);
        ctx.stroke();
      }
    }
    
    // Wire from last component to endX
    ctx.beginPath();
    ctx.moveTo(xs[count-1] + 80, topY);
    ctx.lineTo(endX, topY);
    ctx.stroke();
    
    // Right vertical return wire
    ctx.beginPath();
    ctx.moveTo(endX, topY);
    ctx.lineTo(endX, bottomY);
    ctx.stroke();
    
  } else if (data.topology === 'parallel') {
    // Draw AC source
    drawACSource(ctx, 75, (topY + bottomY)/2, 22, data.voltage + ' V', data.frequency + ' Hz');
    
    const count = data.labels.length;
    let bx = [150, 270, 390];
    if (count === 2) {
      bx = [180, 340];
    } else if (count === 3) {
      bx = [150, 270, 390];
    } else if (count === 4) {
      bx = [130, 230, 330, 430];
    }
    
    const railEndX = bx[count - 1];
    
    // Top and bottom rail connect source to branches
    ctx.beginPath();
    ctx.moveTo(75, (topY + bottomY)/2 - 22);
    ctx.lineTo(75, topY);
    ctx.lineTo(railEndX, topY);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(75, (topY + bottomY)/2 + 22);
    ctx.lineTo(75, bottomY);
    ctx.lineTo(railEndX, bottomY);
    ctx.stroke();
    
    for (let i = 0; i < count; i++) {
      drawJunction(ctx, bx[i], topY);
      drawJunction(ctx, bx[i], bottomY);
      drawComponent(ctx, bx[i], topY, bottomY - topY, true, data.types[i], data.labels[i], data.valStrs[i]);
    }
    
  } else if (data.topology === 'series_parallel') {
    // Draw AC source
    drawACSource(ctx, 75, (topY + bottomY)/2, 22, data.voltage + ' V', data.frequency + ' Hz');
    
    const p1 = 260;
    const p2 = 360;
 
    // Wires
    ctx.beginPath();
    ctx.moveTo(75, (topY + bottomY)/2 - 22);
    ctx.lineTo(75, topY);
    ctx.lineTo(110, topY);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(75, (topY + bottomY)/2 + 22);
    ctx.lineTo(75, bottomY);
    ctx.lineTo(p2, bottomY);
    ctx.stroke();
    
    // Series Component
    drawComponent(ctx, 110, topY, 80, false, data.types[0], data.labels[0], data.valStrs[0]);
    
    // Connect series to parallel branches
    ctx.beginPath();
    ctx.moveTo(190, topY);
    ctx.lineTo(p2, topY);
    ctx.stroke();
    
    // Parallel Branch 1
    drawJunction(ctx, p1, topY);
    drawJunction(ctx, p1, bottomY);
    drawComponent(ctx, p1, topY, bottomY - topY, true, data.types[1], data.labels[1], data.valStrs[1]);
    
    // Parallel Branch 2
    drawJunction(ctx, p2, topY);
    drawJunction(ctx, p2, bottomY);
    drawComponent(ctx, p2, topY, bottomY - topY, true, data.types[2], data.labels[2], data.valStrs[2]);
 
  } else if (data.topology === 'parallel_series') {
    // Draw AC source
    drawACSource(ctx, 75, (topY + bottomY)/2, 22, data.voltage + ' V', data.frequency + ' Hz');
    
    const p1 = 150;
    const p2 = 250;
    const s1 = 300;
    const endX = 420;
    
    // Top and bottom rail wires
    ctx.beginPath();
    ctx.moveTo(75, (topY + bottomY)/2 - 22);
    ctx.lineTo(75, topY);
    ctx.lineTo(p2, topY);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(75, (topY + bottomY)/2 + 22);
    ctx.lineTo(75, bottomY);
    ctx.lineTo(endX, bottomY);
    ctx.stroke();
    
    // Parallel Branch 1
    drawJunction(ctx, p1, topY);
    drawJunction(ctx, p1, bottomY);
    drawComponent(ctx, p1, topY, bottomY - topY, true, data.types[0], data.labels[0], data.valStrs[0]);
    
    // Parallel Branch 2
    drawJunction(ctx, p2, topY);
    drawJunction(ctx, p2, bottomY);
    drawComponent(ctx, p2, topY, bottomY - topY, true, data.types[1], data.labels[1], data.valStrs[1]);
    
    // Horizontal connection to Series
    ctx.beginPath();
    ctx.moveTo(p2, topY);
    ctx.lineTo(s1, topY);
    ctx.stroke();
    
    // Series Component
    drawComponent(ctx, s1, topY, 80, false, data.types[2], data.labels[2], data.valStrs[2]);
    
    // Connect series to return rail
    ctx.beginPath();
    ctx.moveTo(s1 + 80, topY);
    ctx.lineTo(endX, topY);
    ctx.lineTo(endX, bottomY);
    ctx.stroke();
 
  } else if (data.topology === 'two_parallel_groups') {
    // Draw AC source
    drawACSource(ctx, 75, (topY + bottomY)/2, 22, data.voltage + ' V', data.frequency + ' Hz');
    
    const p1 = 140;
    const p2 = 220;
    const p3 = 300;
    const p4 = 380;
    const endX = 420;
    
    // Wires
    ctx.beginPath();
    ctx.moveTo(75, (topY + bottomY)/2 - 22);
    ctx.lineTo(75, topY);
    ctx.lineTo(p2, topY);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(75, (topY + bottomY)/2 + 22);
    ctx.lineTo(75, bottomY);
    ctx.lineTo(endX, bottomY);
    ctx.stroke();
    
    // Group 1 Branch 1
    drawJunction(ctx, p1, topY);
    drawJunction(ctx, p1, bottomY);
    drawComponent(ctx, p1, topY, bottomY - topY, true, data.types[0], data.labels[0], data.valStrs[0]);
    
    // Group 1 Branch 2
    drawJunction(ctx, p2, topY);
    drawJunction(ctx, p2, bottomY);
    drawComponent(ctx, p2, topY, bottomY - topY, true, data.types[1], data.labels[1], data.valStrs[1]);
    
    // Connection between groups (top rail from p2 through p3, p4 to end)
    ctx.beginPath();
    ctx.moveTo(p2, topY);
    ctx.lineTo(endX, topY);
    ctx.stroke();

    // Group 2 Branch 1
    drawJunction(ctx, p3, topY);
    drawJunction(ctx, p3, bottomY);
    drawComponent(ctx, p3, topY, bottomY - topY, true, data.types[2], data.labels[2], data.valStrs[2]);

    // Group 2 Branch 2
    drawJunction(ctx, p4, topY);
    drawJunction(ctx, p4, bottomY);
    drawComponent(ctx, p4, topY, bottomY - topY, true, data.types[3], data.labels[3], data.valStrs[3]);

    // Connect end to bottom rail
    ctx.beginPath();
    ctx.moveTo(endX, topY);
    ctx.lineTo(endX, bottomY);
    ctx.stroke();
 
  } else if (data.topology === 'parallel_with_series_branch') {
    // Draw AC source
    drawACSource(ctx, 75, (topY + bottomY)/2, 22, data.voltage + ' V', data.frequency + ' Hz');
    
    const p1 = 180;
    const p2 = 300;
    const endX = p2;
    
    // Top and bottom rail connect
    ctx.beginPath();
    ctx.moveTo(75, (topY + bottomY)/2 - 22);
    ctx.lineTo(75, topY);
    ctx.lineTo(p2, topY);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(75, (topY + bottomY)/2 + 22);
    ctx.lineTo(75, bottomY);
    ctx.lineTo(p2, bottomY);
    ctx.stroke();
    
    // Branch 1: Single component
    drawJunction(ctx, p1, topY);
    drawJunction(ctx, p1, bottomY);
    drawComponent(ctx, p1, topY, bottomY - topY, true, data.types[0], data.labels[0], data.valStrs[0]);
    
    // Branch 2: Two components in series vertically
    drawJunction(ctx, p2, topY);
    drawJunction(ctx, p2, bottomY);
    
    // Component 1 (upper half)
    drawComponent(ctx, p2, topY, 45, true, data.types[1], data.labels[1], data.valStrs[1]);
    
    // Connecting line in the middle
    ctx.beginPath();
    ctx.moveTo(p2, topY + 45);
    ctx.lineTo(p2, topY + 75);
    ctx.stroke();
    
    // Component 2 (lower half)
    drawComponent(ctx, p2, topY + 75, 45, true, data.types[2], data.labels[2], data.valStrs[2]);
 
  } else if (data.topology === 'series_parallel_three') {
    // Draw AC source
    drawACSource(ctx, 75, (topY + bottomY)/2, 22, data.voltage + ' V', data.frequency + ' Hz');
    
    const s1 = 110;
    const p1 = 230;
    const p2 = 310;
    const p3 = 390;
    
    // Wires from AC to Series Component
    ctx.beginPath();
    ctx.moveTo(75, (topY + bottomY)/2 - 22);
    ctx.lineTo(75, topY);
    ctx.lineTo(s1, topY);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(75, (topY + bottomY)/2 + 22);
    ctx.lineTo(75, bottomY);
    ctx.lineTo(p3, bottomY);
    ctx.stroke();
    
    // Series component
    drawComponent(ctx, s1, topY, 80, false, data.types[0], data.labels[0], data.valStrs[0]);
    
    // Wires from series to parallel bank
    ctx.beginPath();
    ctx.moveTo(s1 + 80, topY);
    ctx.lineTo(p3, topY);
    ctx.stroke();
    
    // Parallel Branch 1
    drawJunction(ctx, p1, topY);
    drawJunction(ctx, p1, bottomY);
    drawComponent(ctx, p1, topY, bottomY - topY, true, data.types[1], data.labels[1], data.valStrs[1]);
    
    // Parallel Branch 2
    drawJunction(ctx, p2, topY);
    drawJunction(ctx, p2, bottomY);
    drawComponent(ctx, p2, topY, bottomY - topY, true, data.types[2], data.labels[2], data.valStrs[2]);
    
    // Parallel Branch 3
    drawJunction(ctx, p3, topY);
    drawJunction(ctx, p3, bottomY);
    drawComponent(ctx, p3, topY, bottomY - topY, true, data.types[3], data.labels[3], data.valStrs[3]);
 
  } else if (data.topology === 'series_with_parallel_series_branch') {
    // Draw AC source
    drawACSource(ctx, 75, (topY + bottomY)/2, 22, data.voltage + ' V', data.frequency + ' Hz');
    
    const s1 = 110;
    const p1 = 230;
    const p2 = 330;
    
    // Wires
    ctx.beginPath();
    ctx.moveTo(75, (topY + bottomY)/2 - 22);
    ctx.lineTo(75, topY);
    ctx.lineTo(s1, topY);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(75, (topY + bottomY)/2 + 22);
    ctx.lineTo(75, bottomY);
    ctx.lineTo(p2, bottomY);
    ctx.stroke();
    
    // Series Component
    drawComponent(ctx, s1, topY, 80, false, data.types[0], data.labels[0], data.valStrs[0]);
    
    // Connect series to parallel
    ctx.beginPath();
    ctx.moveTo(s1 + 80, topY);
    ctx.lineTo(p2, topY);
    ctx.stroke();
    
    // Parallel Branch 1: single vertical component
    drawJunction(ctx, p1, topY);
    drawJunction(ctx, p1, bottomY);
    drawComponent(ctx, p1, topY, bottomY - topY, true, data.types[1], data.labels[1], data.valStrs[1]);
    
    // Parallel Branch 2: series components vertical
    drawJunction(ctx, p2, topY);
    drawJunction(ctx, p2, bottomY);
    
    // Component 3
    drawComponent(ctx, p2, topY, 45, true, data.types[2], data.labels[2], data.valStrs[2]);
    
    // Connecting line
    ctx.beginPath();
    ctx.moveTo(p2, topY + 45);
    ctx.lineTo(p2, topY + 75);
    ctx.stroke();
    
    // Component 4
    drawComponent(ctx, p2, topY + 75, 45, true, data.types[3], data.labels[3], data.valStrs[3]);
  }
}

// --- QUESTION GENERATOR & SOLVER ---

// Complex Arithmetic Helper
const Comp = {
  make: (r, i) => ({ r, i }),
  add: (a, b) => ({ r: a.r + b.r, i: a.i + b.i }),
  sub: (a, b) => ({ r: a.r - b.r, i: a.i - b.i }),
  mul: (a, b) => ({ r: a.r * b.r - a.i * b.i, i: a.r * b.i + a.i * b.r }),
  div: (a, b) => {
    const d = b.r * b.r + b.i * b.i;
    if (d === 0) return { r: 0, i: 0 };
    return { r: (a.r * b.r + a.i * b.i) / d, i: (a.i * b.r - a.r * b.i) / d };
  },
  recip: (a) => {
    const d = a.r * a.r + a.i * a.i;
    if (d === 0) return { r: 0, i: 0 };
    return { r: a.r / d, i: -a.i / d };
  },
  parallel: (a, b) => Comp.div(Comp.mul(a, b), Comp.add(a, b)),
  mag: (a) => Math.sqrt(a.r * a.r + a.i * a.i)
};

function formatComplex(c) {
  const getPrecision = (val) => {
    if (val === 0 || Math.abs(val) >= 0.1) return 1;
    const orderOfMagnitude = Math.floor(Math.log10(Math.abs(val)));
    return Math.max(1, Math.min(5, -orderOfMagnitude + 1));
  };

  const pR = getPrecision(c.r);
  const pI = getPrecision(c.i);
  const maxP = Math.max(pR, pI);

  if (Math.abs(c.i) < 1e-9) return `${c.r.toFixed(maxP)}`;
  if (Math.abs(c.r) < 1e-9) return `${c.i.toFixed(maxP)}j`;
  const sign = c.i >= 0 ? '+' : '-';
  return `(${c.r.toFixed(maxP)} ${sign} ${Math.abs(c.i).toFixed(maxP)}j)`;
}

const topologiesByDifficulty = {
  easy: ['series', 'parallel'],
  medium: ['series', 'parallel', 'series_parallel', 'parallel_series', 'parallel_with_series_branch', 'ladder'],
  hard: ['series', 'parallel', 'two_parallel_groups', 'series_parallel_three', 'series_with_parallel_series_branch', 'ladder']
};

const rlcTopologiesByDifficulty = {
  easy: ['series', 'parallel'],
  medium: ['series', 'parallel', 'series_parallel', 'parallel_series'],
  hard: ['series', 'parallel', 'two_parallel_groups', 'series_parallel_three', 'series_with_parallel_series_branch']
};

function getComponentCount(topology, difficulty) {
  if (topology === 'ladder') {
    return difficulty === 'medium' ? 3 : (Math.random() > 0.5 ? 5 : 7);
  }
  if (topology === 'series' || topology === 'parallel') {
    return difficulty === 'easy' ? 2 : (difficulty === 'medium' ? 3 : 4);
  }
  if (['series_parallel', 'parallel_series', 'parallel_with_series_branch'].includes(topology)) {
    return 3;
  }
  if (['two_parallel_groups', 'series_parallel_three', 'series_with_parallel_series_branch'].includes(topology)) {
    return 4;
  }
  return 3;
}

function getTopicName(category) {
  if (category === 'resistors') return 'Resistor Circuits';
  if (category === 'inductors') return 'Inductor Circuits';
  if (category === 'capacitors') return 'Capacitor Circuits';
  return 'AC RLC Circuits';
}

function makeOptions(correctVal, unit, formatFn = (v) => v.toFixed(1)) {
  const correctText = `${formatFn(correctVal)} ${unit}`;
  const optsSet = new Set([correctText]);

  const multipliers = [0.5, 2.0, 10.0, 0.1, 1.5, 0.75, 1.25, 3.0, 0.33, 5.0];
  let attempts = 0;
  while (optsSet.size < 4 && attempts < 50) {
    attempts++;
    const mult = multipliers[Math.floor(Math.random() * multipliers.length)];
    let raw = correctVal * mult;
    if (Math.random() > 0.5) raw += (Math.random() - 0.5) * (correctVal * 0.15);
    if (raw < 0.01) raw = correctVal * (2 + attempts);
    const distText = `${formatFn(raw)} ${unit}`;
    optsSet.add(distText);
  }
  while (optsSet.size < 4) {
    const fallback = correctVal * (optsSet.size + 1) * 1.7;
    optsSet.add(`${formatFn(fallback)} ${unit}`);
  }

  return Array.from(optsSet).map(txt => ({
    text: txt,
    isCorrect: txt === correctText
  })).sort(() => Math.random() - 0.5);
}

function solveRL_EQ(topology, vals, unitChar = 'R', unit = 'Ω') {
  let steps = [];
  let eq = 0;
  if (topology === 'series') {
    eq = vals.reduce((a, b) => a + b, 0);
    steps.push(`Use the series formula: <strong>${unitChar}_{EQ} = ${vals.map((v, i) => `${unitChar}${i+1}`).join(' + ')}</strong>.`);
    steps.push(`Substitute the values: ${unitChar}_{EQ} = ${vals.join(' + ')} = <strong>${eq.toFixed(1)} ${unit}</strong>.`);
  } else if (topology === 'parallel') {
    const sumRecip = vals.reduce((a, b) => a + 1/b, 0);
    eq = 1 / sumRecip;
    steps.push(`Use the parallel formula: <strong>1/${unitChar}_{EQ} = ${vals.map((v, i) => `1/${unitChar}${i+1}`).join(' + ')}</strong>.`);
    steps.push(`Substitute: 1/${unitChar}_{EQ} = ${vals.map(v => `1/${v}`).join(' + ')} &approx; ${sumRecip.toFixed(5)}.`);
    steps.push(`Take the reciprocal: ${unitChar}_{EQ} = 1 / ${sumRecip.toFixed(5)} = <strong>${eq.toFixed(1)} ${unit}</strong>.`);
  } else if (topology === 'series_parallel') {
    const p = (vals[1] * vals[2]) / (vals[1] + vals[2]);
    eq = vals[0] + p;
    steps.push(`1. Calculate parallel combination of ${unitChar}2 and ${unitChar}3: ${unitChar}_{23} = (${unitChar}2 &times; ${unitChar}3) / (${unitChar}2 + ${unitChar}3) = (${vals[1]} &times; ${vals[2]}) / (${vals[1]} + ${vals[2]}) &approx; <strong>${p.toFixed(1)} ${unit}</strong>.`);
    steps.push(`2. Add series component ${unitChar}1: ${unitChar}_{EQ} = ${unitChar}1 + ${unitChar}_{23} = ${vals[0]} + ${p.toFixed(1)} = <strong>${eq.toFixed(1)} ${unit}</strong>.`);
  } else if (topology === 'parallel_series') {
    const p = (vals[0] * vals[1]) / (vals[0] + vals[1]);
    eq = p + vals[2];
    steps.push(`1. Calculate parallel combination of ${unitChar}1 and ${unitChar}2: ${unitChar}_{12} = (${unitChar}1 &times; ${unitChar}2) / (${unitChar}1 + ${unitChar}2) = (${vals[0]} &times; ${vals[1]}) / (${vals[0]} + ${vals[1]}) &approx; <strong>${p.toFixed(1)} ${unit}</strong>.`);
    steps.push(`2. Add series component ${unitChar}3: ${unitChar}_{EQ} = ${unitChar}_{12} + ${unitChar}3 = ${p.toFixed(1)} + ${vals[2]} = <strong>${eq.toFixed(1)} ${unit}</strong>.`);
  } else if (topology === 'two_parallel_groups') {
    const p1 = (vals[0] * vals[1]) / (vals[0] + vals[1]);
    const p2 = (vals[2] * vals[3]) / (vals[2] + vals[3]);
    eq = p1 + p2;
    steps.push(`1. Calculate first parallel group (${unitChar}1 || ${unitChar}2): ${unitChar}_{12} = (${vals[0]} &times; ${vals[1]}) / (${vals[0]} + ${vals[1]}) &approx; <strong>${p1.toFixed(1)} ${unit}</strong>.`);
    steps.push(`2. Calculate second parallel group (${unitChar}3 || ${unitChar}4): ${unitChar}_{34} = (${vals[2]} &times; ${vals[3]}) / (${vals[2]} + ${vals[3]}) &approx; <strong>${p2.toFixed(1)} ${unit}</strong>.`);
    steps.push(`3. Add groups in series: ${unitChar}_{EQ} = ${unitChar}_{12} + ${unitChar}_{34} = ${p1.toFixed(1)} + ${p2.toFixed(1)} = <strong>${eq.toFixed(1)} ${unit}</strong>.`);
  } else if (topology === 'parallel_with_series_branch') {
    const s = vals[1] + vals[2];
    eq = (vals[0] * s) / (vals[0] + s);
    steps.push(`1. Calculate series branch (${unitChar}2 + ${unitChar}3): ${unitChar}_{23} = ${vals[1]} + ${vals[2]} = <strong>${s.toFixed(1)} ${unit}</strong>.`);
    steps.push(`2. Combine in parallel with ${unitChar}1: ${unitChar}_{EQ} = (${unitChar}1 &times; ${unitChar}_{23}) / (${unitChar}1 + ${unitChar}_{23}) = (${vals[0]} &times; ${s.toFixed(1)}) / (${vals[0]} + ${s.toFixed(1)}) &approx; <strong>${eq.toFixed(1)} ${unit}</strong>.`);
  } else if (topology === 'series_parallel_three') {
    const p = 1 / (1/vals[1] + 1/vals[2] + 1/vals[3]);
    eq = vals[0] + p;
    steps.push(`1. Calculate parallel combination of ${unitChar}2, ${unitChar}3, and ${unitChar}4: 1/${unitChar}_{234} = 1/${unitChar}2 + 1/${unitChar}3 + 1/${unitChar}4 = 1/${vals[1]} + 1/${vals[2]} + 1/${vals[3]} &approx; ${(1/vals[1] + 1/vals[2] + 1/vals[3]).toFixed(5)}.`);
    steps.push(`   ${unitChar}_{234} = 1 / ${(1/vals[1] + 1/vals[2] + 1/vals[3]).toFixed(5)} &approx; <strong>${p.toFixed(1)} ${unit}</strong>.`);
    steps.push(`2. Add series component ${unitChar}1: ${unitChar}_{EQ} = ${unitChar}1 + ${unitChar}_{234} = ${vals[0]} + ${p.toFixed(1)} = <strong>${eq.toFixed(1)} ${unit}</strong>.`);
  } else if (topology === 'series_with_parallel_series_branch') {
    const s = vals[2] + vals[3];
    const p = (vals[1] * s) / (vals[1] + s);
    eq = vals[0] + p;
    steps.push(`1. Calculate series portion of parallel branch (${unitChar}3 + ${unitChar}4): ${unitChar}_{34} = ${vals[2]} + ${vals[3]} = <strong>${s.toFixed(1)} ${unit}</strong>.`);
    steps.push(`2. Combine in parallel with ${unitChar}2: ${unitChar}_{234} = (${unitChar}2 &times; ${unitChar}_{34}) / (${unitChar}2 + ${unitChar}_{34}) = (${vals[1]} &times; ${s.toFixed(1)}) / (${vals[1]} + ${s.toFixed(1)}) &approx; <strong>${p.toFixed(1)} ${unit}</strong>.`);
    steps.push(`3. Add series component ${unitChar}1: ${unitChar}_{EQ} = ${unitChar}1 + ${unitChar}_{234} = ${vals[0]} + ${p.toFixed(1)} = <strong>${eq.toFixed(1)} ${unit}</strong>.`);
  } else if (topology === 'ladder') {
    if (vals.length === 3) {
      const s = vals[1] + vals[2];
      eq = (vals[0] * s) / (vals[0] + s);
      steps.push(`1. Calculate series branch (${unitChar}2 + ${unitChar}3): ${unitChar}_{23} = ${vals[1]} + ${vals[2]} = <strong>${s.toFixed(1)} ${unit}</strong>.`);
      steps.push(`2. Combine in parallel with vertical ${unitChar}1: ${unitChar}_{EQ} = (${unitChar}1 &times; ${unitChar}_{23}) / (${unitChar}1 + ${unitChar}_{23}) = (${vals[0]} &times; ${s.toFixed(1)}) / (${vals[0]} + ${s.toFixed(1)}) &approx; <strong>${eq.toFixed(1)} ${unit}</strong>.`);
    } else if (vals.length === 5) {
      const s1 = vals[3] + vals[4];
      const p1 = (vals[2] * s1) / (vals[2] + s1);
      const s2 = vals[1] + p1;
      eq = (vals[0] * s2) / (vals[0] + s2);
      steps.push(`1. Start from far right branch (${unitChar}4 + ${unitChar}5): ${unitChar}_{45} = ${vals[3]} + ${vals[4]} = <strong>${s1.toFixed(1)} ${unit}</strong>.`);
      steps.push(`2. Combine in parallel with vertical ${unitChar}3: ${unitChar}_{345} = (${unitChar}3 &times; ${unitChar}_{45}) / (${unitChar}3 + ${unitChar}_{45}) = (${vals[2]} &times; ${s1.toFixed(1)}) / (${vals[2]} + ${s1.toFixed(1)}) &approx; <strong>${p1.toFixed(1)} ${unit}</strong>.`);
      steps.push(`3. Add series portion ${unitChar}2: ${unitChar}_{2345} = ${unitChar}2 + ${unitChar}_{345} = ${vals[1]} + ${p1.toFixed(1)} = <strong>${s2.toFixed(1)} ${unit}</strong>.`);
      steps.push(`4. Combine in parallel with vertical ${unitChar}1: ${unitChar}_{EQ} = (${unitChar}1 &times; ${unitChar}_{2345}) / (${unitChar}1 + ${unitChar}_{2345}) = (${vals[0]} &times; ${s2.toFixed(1)}) / (${vals[0]} + ${s2.toFixed(1)}) &approx; <strong>${eq.toFixed(1)} ${unit}</strong>.`);
    } else {
      const s1 = vals[5] + vals[6];
      const p1 = (vals[4] * s1) / (vals[4] + s1);
      const s2 = vals[3] + p1;
      const p2 = (vals[2] * s2) / (vals[2] + s2);
      const s3 = vals[1] + p2;
      eq = (vals[0] * s3) / (vals[0] + s3);
      steps.push(`1. Start from far right branch (${unitChar}6 + ${unitChar}7): ${unitChar}_{67} = ${vals[5]} + ${vals[6]} = <strong>${s1.toFixed(1)} ${unit}</strong>.`);
      steps.push(`2. Combine in parallel with vertical ${unitChar}5: ${unitChar}_{567} = (${unitChar}5 &times; ${unitChar}_{67}) / (${unitChar}5 + ${unitChar}_{67}) = (${vals[4]} &times; ${s1.toFixed(1)}) / (${vals[4]} + ${s1.toFixed(1)}) &approx; <strong>${p1.toFixed(1)} ${unit}</strong>.`);
      steps.push(`3. Add series branch ${unitChar}4: ${unitChar}_{4567} = ${unitChar}4 + ${unitChar}_{567} = ${vals[3]} + ${p1.toFixed(1)} = <strong>${s2.toFixed(1)} ${unit}</strong>.`);
      steps.push(`4. Combine in parallel with vertical ${unitChar}3: ${unitChar}_{34567} = (${unitChar}3 &times; ${unitChar}_{4567}) / (${unitChar}3 + ${unitChar}_{4567}) = (${vals[2]} &times; ${s2.toFixed(1)}) / (${vals[2]} + ${s2.toFixed(1)}) &approx; <strong>${p2.toFixed(1)} ${unit}</strong>.`);
      steps.push(`5. Add series branch ${unitChar}2: ${unitChar}_{234567} = ${unitChar}2 + ${unitChar}_{34567} = ${vals[1]} + ${p2.toFixed(1)} = <strong>${s3.toFixed(1)} ${unit}</strong>.`);
      steps.push(`6. Combine in parallel with vertical ${unitChar}1: ${unitChar}_{EQ} = (${unitChar}1 &times; ${unitChar}_{234567}) / (${unitChar}1 + ${unitChar}_{234567}) = (${vals[0]} &times; ${s3.toFixed(1)}) / (${vals[0]} + ${s3.toFixed(1)}) &approx; <strong>${eq.toFixed(1)} ${unit}</strong>.`);
    }
  }
  return { eq, steps };
}

function solveC_EQ(topology, vals) {
  let steps = [];
  let eq = 0;
  if (topology === 'series') {
    const sumRecip = vals.reduce((a, b) => a + 1/b, 0);
    eq = 1 / sumRecip;
    steps.push(`Use the series formula for capacitors: <strong>1/C_{EQ} = ${vals.map((v, i) => `1/C${i+1}`).join(' + ')}</strong>.`);
    steps.push(`Substitute the values: 1/C_{EQ} = ${vals.map(v => `1/${v}`).join(' + ')} &approx; ${sumRecip.toFixed(5)}.`);
    steps.push(`Take the reciprocal: C_{EQ} = 1 / ${sumRecip.toFixed(5)} = <strong>${eq.toFixed(1)} µF</strong>.`);
  } else if (topology === 'parallel') {
    eq = vals.reduce((a, b) => a + b, 0);
    steps.push(`Use the parallel formula for capacitors: <strong>C_{EQ} = ${vals.map((v, i) => `C${i+1}`).join(' + ')}</strong>.`);
    steps.push(`Substitute: C_{EQ} = ${vals.join(' + ')} = <strong>${eq.toFixed(1)} µF</strong>.`);
  } else if (topology === 'series_parallel') {
    const p = vals[1] + vals[2];
    eq = (vals[0] * p) / (vals[0] + p);
    steps.push(`1. Calculate parallel combination of C2 and C3: C_{23} = C2 + C3 = ${vals[1]} + ${vals[2]} = <strong>${p.toFixed(1)} µF</strong>.`);
    steps.push(`2. Combine in series with C1: C_{EQ} = (C1 &times; C_{23}) / (C1 + C_{23}) = (${vals[0]} &times; ${p.toFixed(1)}) / (${vals[0]} + ${p.toFixed(1)}) &approx; <strong>${eq.toFixed(1)} µF</strong>.`);
  } else if (topology === 'parallel_series') {
    const p = vals[0] + vals[1];
    eq = (p * vals[2]) / (p + vals[2]);
    steps.push(`1. Calculate parallel combination of C1 and C2: C_{12} = C1 + C2 = ${vals[0]} + ${vals[1]} = <strong>${p.toFixed(1)} µF</strong>.`);
    steps.push(`2. Combine in series with C3: C_{EQ} = (C_{12} &times; C3) / (C_{12} + C3) = (${p.toFixed(1)} &times; ${vals[2]}) / (${p.toFixed(1)} + ${vals[2]}) &approx; <strong>${eq.toFixed(1)} µF</strong>.`);
  } else if (topology === 'two_parallel_groups') {
    const p1 = vals[0] + vals[1];
    const p2 = vals[2] + vals[3];
    eq = (p1 * p2) / (p1 + p2);
    steps.push(`1. Calculate first parallel group (C1 || C2): C_{12} = C1 + C2 = ${vals[0]} + ${vals[1]} = <strong>${p1.toFixed(1)} µF</strong>.`);
    steps.push(`2. Calculate second parallel group (C3 || C4): C_{34} = C3 + C4 = ${vals[2]} + ${vals[3]} = <strong>${p2.toFixed(1)} µF</strong>.`);
    steps.push(`3. Combine groups in series: C_{EQ} = (C_{12} &times; C_{34}) / (C_{12} + C_{34}) = (${p1.toFixed(1)} &times; ${p2.toFixed(1)}) / (${p1.toFixed(1)} + ${p2.toFixed(1)}) &approx; <strong>${eq.toFixed(1)} µF</strong>.`);
  } else if (topology === 'parallel_with_series_branch') {
    const s = (vals[1] * vals[2]) / (vals[1] + vals[2]);
    eq = vals[0] + s;
    steps.push(`1. Calculate series branch (C2 + C3): C_{23} = (C2 &times; C3) / (C2 + C3) = (${vals[1]} &times; ${vals[2]}) / (${vals[1]} + ${vals[2]}) &approx; <strong>${s.toFixed(1)} µF</strong>.`);
    steps.push(`2. Combine in parallel with C1: C_{EQ} = C1 + C_{23} = ${vals[0]} + ${s.toFixed(1)} = <strong>${eq.toFixed(1)} µF</strong>.`);
  } else if (topology === 'series_parallel_three') {
    const p = vals[1] + vals[2] + vals[3];
    eq = (vals[0] * p) / (vals[0] + p);
    steps.push(`1. Calculate parallel combination of C2, C3, and C4: C_{234} = C2 + C3 + C4 = ${vals[1]} + ${vals[2]} + ${vals[3]} = <strong>${p.toFixed(1)} µF</strong>.`);
    steps.push(`2. Combine in series with C1: C_{EQ} = (C1 &times; C_{234}) / (C1 + C_{234}) = (${vals[0]} &times; ${p.toFixed(1)}) / (${vals[0]} + ${p.toFixed(1)}) &approx; <strong>${eq.toFixed(1)} µF</strong>.`);
  } else if (topology === 'series_with_parallel_series_branch') {
    const s = (vals[2] * vals[3]) / (vals[2] + vals[3]);
    const p = vals[1] + s;
    eq = (vals[0] * p) / (vals[0] + p);
    steps.push(`1. Calculate series portion of parallel branch (C3 + C4): C_{34} = (C3 &times; C4) / (C3 + C4) = (${vals[2]} &times; ${vals[3]}) / (${vals[2]} + ${vals[3]}) &approx; <strong>${s.toFixed(1)} µF</strong>.`);
    steps.push(`2. Combine in parallel with C2: C_{234} = C2 + C_{34} = ${vals[1]} + ${s.toFixed(1)} = <strong>${p.toFixed(1)} µF</strong>.`);
    steps.push(`3. Combine in series with C1: C_{EQ} = (C1 &times; C_{234}) / (C1 + C_{234}) = (${vals[0]} &times; ${p.toFixed(1)}) / (${vals[0]} + ${p.toFixed(1)}) &approx; <strong>${eq.toFixed(1)} µF</strong>.`);
  } else if (topology === 'ladder') {
    if (vals.length === 3) {
      const s = (vals[1] * vals[2]) / (vals[1] + vals[2]);
      eq = vals[0] + s;
      steps.push(`1. Calculate series branch (C2 + C3): C_{23} = (C2 &times; C3) / (C2 + C3) = (${vals[1]} &times; ${vals[2]}) / (${vals[1]} + ${vals[2]}) &approx; <strong>${s.toFixed(1)} µF</strong>.`);
      steps.push(`2. Combine in parallel with vertical C1: C_{EQ} = C1 + C_{23} = ${vals[0]} + ${s.toFixed(1)} = <strong>${eq.toFixed(1)} µF</strong>.`);
    } else if (vals.length === 5) {
      const s1 = (vals[3] * vals[4]) / (vals[3] + vals[4]);
      const p1 = vals[2] + s1;
      const s2 = (vals[1] * p1) / (vals[1] + p1);
      eq = vals[0] + s2;
      steps.push(`1. Start from far right series branch (C4 + C5): C_{45} = (C4 &times; C5) / (C4 + C5) = (${vals[3]} &times; ${vals[4]}) / (${vals[3]} + ${vals[4]}) &approx; <strong>${s1.toFixed(1)} µF</strong>.`);
      steps.push(`2. Combine in parallel with vertical branch C3: C_{345} = C3 + C_{45} = ${vals[2]} + ${s1.toFixed(1)} = <strong>${p1.toFixed(1)} µF</strong>.`);
      steps.push(`3. Combine in series with C2: C_{2345} = (C2 &times; C_{345}) / (C2 + C_{345}) = (${vals[1]} &times; ${p1.toFixed(1)}) / (${vals[1]} + ${p1.toFixed(1)}) &approx; <strong>${s2.toFixed(1)} µF</strong>.`);
      steps.push(`4. Combine in parallel with vertical branch C1: C_{EQ} = C1 + C_{2345} = ${vals[0]} + ${s2.toFixed(1)} = <strong>${eq.toFixed(1)} µF</strong>.`);
    } else {
      const s1 = (vals[5] * vals[6]) / (vals[5] + vals[6]);
      const p1 = vals[4] + s1;
      const s2 = (vals[3] * p1) / (vals[3] + p1);
      const p2 = vals[2] + s2;
      const s3 = (vals[1] * p2) / (vals[1] + p2);
      eq = vals[0] + s3;
      steps.push(`1. Start from far right series branch (C6 + C7): C_{67} = (C6 &times; C7) / (C6 + C7) = (${vals[5]} &times; ${vals[6]}) / (${vals[5]} + ${vals[6]}) &approx; <strong>${s1.toFixed(1)} µF</strong>.`);
      steps.push(`2. Combine in parallel with vertical branch C5: C_{567} = C5 + C_{67} = ${vals[4]} + ${s1.toFixed(1)} = <strong>${p1.toFixed(1)} µF</strong>.`);
      steps.push(`3. Combine in series with C4: C_{4567} = (C4 &times; C_{567}) / (C4 + C_{567}) = (${vals[3]} &times; ${p1.toFixed(1)}) / (${vals[3]} + ${p1.toFixed(1)}) &approx; <strong>${s2.toFixed(1)} µF</strong>.`);
      steps.push(`4. Combine in parallel with vertical branch C3: C_{34567} = C3 + C_{4567} = ${vals[2]} + ${s2.toFixed(1)} = <strong>${p2.toFixed(1)} µF</strong>.`);
      steps.push(`5. Combine in series with C2: C_{234567} = (C2 &times; C_{34567}) / (C2 + C_{34567}) = (${vals[1]} &times; ${p2.toFixed(1)}) / (${vals[1]} + ${p2.toFixed(1)}) &approx; <strong>${s3.toFixed(1)} µF</strong>.`);
      steps.push(`6. Combine in parallel with vertical branch C1: C_{EQ} = C1 + C_{234567} = ${vals[0]} + ${s3.toFixed(1)} = <strong>${eq.toFixed(1)} µF</strong>.`);
    }
  }
  return { eq, steps };
}

function solveRealNetwork(topology, X, Vs) {
  let X_EQ = 0;
  let simplificationSteps = [];
  const V_comp = [];
  const I_comp = [];
  
  if (topology === 'series') {
    X_EQ = X.reduce((a, b) => a + b, 0);
    simplificationSteps.push(`1. Calculate total impedance: X_{EQ} = ${X.map((_, i) => `X${i+1}`).join(' + ')} = ${X.map(x => x.toFixed(1)).join(' + ')} = <strong>${X_EQ.toFixed(1)} &Omega;</strong>`);
    const It = Vs / X_EQ;
    for (let i = 0; i < X.length; i++) {
      I_comp[i] = It;
      V_comp[i] = It * X[i];
    }
  } else if (topology === 'parallel') {
    const sumRecip = X.reduce((a, b) => a + 1/b, 0);
    X_EQ = 1 / sumRecip;
    simplificationSteps.push(`1. Calculate total parallel impedance: 1/X_{EQ} = ${X.map((_, i) => `1/X${i+1}`).join(' + ')}`);
    simplificationSteps.push(`   1/X_{EQ} = ${X.map(x => `1/${x.toFixed(1)}`).join(' + ')} &approx; ${sumRecip.toFixed(5)}`);
    simplificationSteps.push(`   X_{EQ} = 1 / ${sumRecip.toFixed(5)} = <strong>${X_EQ.toFixed(1)} &Omega;</strong>`);
    const It = Vs / X_EQ;
    for (let i = 0; i < X.length; i++) {
      V_comp[i] = Vs;
      I_comp[i] = Vs / X[i];
    }
  } else if (topology === 'series_parallel') {
    const x23 = (X[1] * X[2]) / (X[1] + X[2]);
    X_EQ = X[0] + x23;
    simplificationSteps.push(`1. Simplify parallel combination (X2 || X3): X_{23} = (X2 &times; X3) / (X2 + X3) = (${X[1].toFixed(1)} &times; ${X[2].toFixed(1)}) / (${X[1].toFixed(1)} + ${X[2].toFixed(1)}) = <strong>${x23.toFixed(1)} &Omega;</strong>`);
    simplificationSteps.push(`2. Add series impedance X1: X_{EQ} = X1 + X_{23} = ${X[0].toFixed(1)} + ${x23.toFixed(1)} = <strong>${X_EQ.toFixed(1)} &Omega;</strong>`);
    
    const It = Vs / X_EQ;
    I_comp[0] = It;
    V_comp[0] = It * X[0];
    const V_par = Vs - V_comp[0];
    V_comp[1] = V_par;
    V_comp[2] = V_par;
    I_comp[1] = V_par / X[1];
    I_comp[2] = V_par / X[2];
  } else if (topology === 'parallel_series') {
    const x12 = (X[0] * X[1]) / (X[0] + X[1]);
    X_EQ = x12 + X[2];
    simplificationSteps.push(`1. Simplify parallel group (X1 || X2): X_{12} = (X1 &times; X2) / (X1 + X2) = (${X[0].toFixed(1)} &times; ${X[1].toFixed(1)}) / (${X[0].toFixed(1)} + ${X[1].toFixed(1)}) = <strong>${x12.toFixed(1)} &Omega;</strong>`);
    simplificationSteps.push(`2. Add series impedance X3: X_{EQ} = X_{12} + X3 = ${x12.toFixed(1)} + ${X[2].toFixed(1)} = <strong>${X_EQ.toFixed(1)} &Omega;</strong>`);
    
    const It = Vs / X_EQ;
    I_comp[2] = It;
    V_comp[2] = It * X[2];
    const V_par = Vs - V_comp[2];
    V_comp[0] = V_par;
    V_comp[1] = V_par;
    I_comp[0] = V_par / X[0];
    I_comp[1] = V_par / X[1];
  } else if (topology === 'two_parallel_groups') {
    const x12 = (X[0] * X[1]) / (X[0] + X[1]);
    const x34 = (X[2] * X[3]) / (X[2] + X[3]);
    X_EQ = x12 + x34;
    simplificationSteps.push(`1. Simplify first parallel group (X1 || X2): X_{12} = (${X[0].toFixed(1)} &times; ${X[1].toFixed(1)}) / (${X[0].toFixed(1)} + ${X[1].toFixed(1)}) = <strong>${x12.toFixed(1)} &Omega;</strong>`);
    simplificationSteps.push(`2. Simplify second parallel group (X3 || X4): X_{34} = (${X[2].toFixed(1)} &times; ${X[3].toFixed(1)}) / (${X[2].toFixed(1)} + ${X[3].toFixed(1)}) = <strong>${x34.toFixed(1)} &Omega;</strong>`);
    simplificationSteps.push(`3. Add groups in series: X_{EQ} = X_{12} + X_{34} = ${x12.toFixed(1)} + ${x34.toFixed(1)} = <strong>${X_EQ.toFixed(1)} &Omega;</strong>`);
    
    const It = Vs / X_EQ;
    const V_par1 = It * x12;
    const V_par2 = It * x34;
    V_comp[0] = V_par1;
    V_comp[1] = V_par1;
    V_comp[2] = V_par2;
    V_comp[3] = V_par2;
    I_comp[0] = V_par1 / X[0];
    I_comp[1] = V_par1 / X[1];
    I_comp[2] = V_par2 / X[2];
    I_comp[3] = V_par2 / X[3];
  } else if (topology === 'parallel_with_series_branch') {
    const s = X[1] + X[2];
    X_EQ = (X[0] * s) / (X[0] + s);
    simplificationSteps.push(`1. Simplify series branch (X2 + X3): X_{23} = ${X[1].toFixed(1)} + ${X[2].toFixed(1)} = <strong>${s.toFixed(1)} &Omega;</strong>`);
    simplificationSteps.push(`2. Combine parallel branches: X_{EQ} = (X1 &times; X_{23}) / (X1 + X_{23}) = (${X[0].toFixed(1)} &times; ${s.toFixed(1)}) / (${X[0].toFixed(1)} + ${s.toFixed(1)}) = <strong>${X_EQ.toFixed(1)} &Omega;</strong>`);
    
    V_comp[0] = Vs;
    I_comp[0] = Vs / X[0];
    const I_br = Vs / s;
    I_comp[1] = I_br;
    I_comp[2] = I_br;
    V_comp[1] = I_br * X[1];
    V_comp[2] = I_br * X[2];
  } else if (topology === 'series_parallel_three') {
    const p = 1 / (1/X[1] + 1/X[2] + 1/X[3]);
    X_EQ = X[0] + p;
    simplificationSteps.push(`1. Simplify parallel group (X2 || X3 || X4): 1/X_{234} = 1/X2 + 1/X3 + 1/X4 = 1/${X[1].toFixed(1)} + 1/${X[2].toFixed(1)} + 1/${X[3].toFixed(1)} &approx; ${(1/X[1] + 1/X[2] + 1/X[3]).toFixed(5)}`);
    simplificationSteps.push(`   X_{234} = 1 / ${(1/X[1] + 1/X[2] + 1/X[3]).toFixed(5)} = <strong>${p.toFixed(1)} &Omega;</strong>`);
    simplificationSteps.push(`2. Add series impedance X1: X_{EQ} = X1 + X_{234} = ${X[0].toFixed(1)} + ${p.toFixed(1)} = <strong>${X_EQ.toFixed(1)} &Omega;</strong>`);
    
    const It = Vs / X_EQ;
    I_comp[0] = It;
    V_comp[0] = It * X[0];
    const V_par = Vs - V_comp[0];
    V_comp[1] = V_par;
    V_comp[2] = V_par;
    V_comp[3] = V_par;
    I_comp[1] = V_par / X[1];
    I_comp[2] = V_par / X[2];
    I_comp[3] = V_par / X[3];
  } else if (topology === 'series_with_parallel_series_branch') {
    const s = X[2] + X[3];
    const p = (X[1] * s) / (X[1] + s);
    X_EQ = X[0] + p;
    simplificationSteps.push(`1. Simplify series part of parallel branch (X3 + X4): X_{34} = ${X[2].toFixed(1)} + ${X[3].toFixed(1)} = <strong>${s.toFixed(1)} &Omega;</strong>`);
    simplificationSteps.push(`2. Combine in parallel with X2: X_{234} = (X2 &times; X_{34}) / (X2 + X_{34}) = (${X[1].toFixed(1)} &times; ${s.toFixed(1)}) / (${X[1].toFixed(1)} + ${s.toFixed(1)}) = <strong>${p.toFixed(1)} &Omega;</strong>`);
    simplificationSteps.push(`3. Add series impedance X1: X_{EQ} = X1 + X_{234} = ${X[0].toFixed(1)} + ${p.toFixed(1)} = <strong>${X_EQ.toFixed(1)} &Omega;</strong>`);
    
    const It = Vs / X_EQ;
    I_comp[0] = It;
    V_comp[0] = It * X[0];
    const V_par = Vs - V_comp[0];
    V_comp[1] = V_par;
    I_comp[1] = V_par / X[1];
    const I_br = V_par / s;
    I_comp[2] = I_br;
    I_comp[3] = I_br;
    V_comp[2] = I_br * X[2];
    V_comp[3] = I_br * X[3];
  }

  return {
    X_EQ,
    simplificationSteps,
    V_comp,
    I_comp
  };
}

function solveRLCNetwork(topology, components, freq, Vs) {
  const Z = [];
  const initSteps = [];
  components.forEach((c, idx) => {
    if (c.type === 'R') {
      Z[idx] = Comp.make(c.val, 0);
      initSteps.push(`Impedance of ${c.label}: Z_{${c.label}} = <strong>${formatComplex(Z[idx])} &Omega;</strong>`);
    } else if (c.type === 'L') {
      const xl = 2 * Math.PI * freq * (c.val / 1000);
      Z[idx] = Comp.make(0, xl);
      initSteps.push(`Reactance of ${c.label}: X_{${c.label}} = 2 &pi; f L = 2 &pi; &times; ${freq} &times; (${c.val} mH / 1000) &approx; ${xl.toFixed(1)} &Omega;<br>Z_{${c.label}} = <strong>${formatComplex(Z[idx])} &Omega;</strong>`);
    } else if (c.type === 'C') {
      const xc = 1 / (2 * Math.PI * freq * (c.val / 1000000));
      Z[idx] = Comp.make(0, -xc);
      initSteps.push(`Reactance of ${c.label}: X_{${c.label}} = 1 / (2 &pi; f C) = 1 / (2 &pi; &times; ${freq} &times; (${c.val} &mu;F / 10^6)) &approx; ${xc.toFixed(1)} &Omega;<br>Z_{${c.label}} = <strong>${formatComplex(Z[idx])} &Omega;</strong>`);
    }
  });

  let Z_EQ, simplificationSteps = [];
  const Vs_complex = Comp.make(Vs, 0);
  const V_comp = [];
  const I_comp = [];
  
  if (topology === 'series') {
    Z_EQ = Z[0];
    for (let i = 1; i < Z.length; i++) {
      Z_EQ = Comp.add(Z_EQ, Z[i]);
    }
    simplificationSteps.push(`Calculate total impedance by adding in series: Z_{EQ} = ${Z.map((_, i) => `Z${i+1}`).join(' + ')}`);
    simplificationSteps.push(`Z_{EQ} = ${Z.map(formatComplex).join(' + ')} = <strong>${formatComplex(Z_EQ)} &Omega;</strong>`);
    
    const It = Comp.div(Vs_complex, Z_EQ);
    for (let i = 0; i < Z.length; i++) {
      I_comp[i] = It;
      V_comp[i] = Comp.mul(It, Z[i]);
    }
  } else if (topology === 'parallel') {
    const recips = Z.map(Comp.recip);
    let sumRecip = recips[0];
    for (let i = 1; i < recips.length; i++) {
      sumRecip = Comp.add(sumRecip, recips[i]);
    }
    Z_EQ = Comp.recip(sumRecip);
    simplificationSteps.push(`Calculate total parallel admittance: Y_{EQ} = ${Z.map((_, i) => `1/Z${i+1}`).join(' + ')}`);
    simplificationSteps.push(`Y_{EQ} = ${recips.map(formatComplex).join(' + ')} = ${formatComplex(sumRecip)} S`);
    simplificationSteps.push(`Z_{EQ} = 1 / Y_{EQ} = <strong>${formatComplex(Z_EQ)} &Omega;</strong>`);
    
    const It = Comp.div(Vs_complex, Z_EQ);
    for (let i = 0; i < Z.length; i++) {
      V_comp[i] = Vs_complex;
      I_comp[i] = Comp.div(Vs_complex, Z[i]);
    }
  } else if (topology === 'series_parallel') {
    const z23 = Comp.parallel(Z[1], Z[2]);
    Z_EQ = Comp.add(Z[0], z23);
    simplificationSteps.push(`Simplify parallel combination (Z2 || Z3): Z_{23} = (Z2 &times; Z3) / (Z2 + Z3) = (${formatComplex(Z[1])} &times; ${formatComplex(Z[2])}) / (${formatComplex(Z[1])} + ${formatComplex(Z[2])}) = <strong>${formatComplex(z23)} &Omega;</strong>`);
    simplificationSteps.push(`Add series component Z1: Z_{EQ} = Z1 + Z_{23} = ${formatComplex(Z[0])} + ${formatComplex(z23)} = <strong>${formatComplex(Z_EQ)} &Omega;</strong>`);
    
    const It = Comp.div(Vs_complex, Z_EQ);
    I_comp[0] = It;
    V_comp[0] = Comp.mul(It, Z[0]);
    const V_par = Comp.sub(Vs_complex, V_comp[0]);
    V_comp[1] = V_par;
    V_comp[2] = V_par;
    I_comp[1] = Comp.div(V_par, Z[1]);
    I_comp[2] = Comp.div(V_par, Z[2]);
  } else if (topology === 'parallel_series') {
    const z12 = Comp.parallel(Z[0], Z[1]);
    Z_EQ = Comp.add(z12, Z[2]);
    simplificationSteps.push(`Simplify parallel combination (Z1 || Z2): Z_{12} = (Z1 &times; Z2) / (Z1 + Z2) = (${formatComplex(Z[0])} &times; ${formatComplex(Z[1])}) / (${formatComplex(Z[0])} + ${formatComplex(Z[1])}) = <strong>${formatComplex(z12)} &Omega;</strong>`);
    simplificationSteps.push(`Add series component Z3: Z_{EQ} = Z_{12} + Z3 = ${formatComplex(z12)} + ${formatComplex(Z[2])} = <strong>${formatComplex(Z_EQ)} &Omega;</strong>`);
    
    const It = Comp.div(Vs_complex, Z_EQ);
    I_comp[2] = It;
    V_comp[2] = Comp.mul(It, Z[2]);
    const V_par = Comp.sub(Vs_complex, V_comp[2]);
    V_comp[0] = V_par;
    V_comp[1] = V_par;
    I_comp[0] = Comp.div(V_par, Z[0]);
    I_comp[1] = Comp.div(V_par, Z[1]);
  } else if (topology === 'two_parallel_groups') {
    const z12 = Comp.parallel(Z[0], Z[1]);
    const z34 = Comp.parallel(Z[2], Z[3]);
    Z_EQ = Comp.add(z12, z34);
    simplificationSteps.push(`Simplify first parallel group (Z1 || Z2): Z_{12} = (${formatComplex(Z[0])} &times; ${formatComplex(Z[1])}) / (${formatComplex(Z[0])} + ${formatComplex(Z[1])}) = <strong>${formatComplex(z12)} &Omega;</strong>`);
    simplificationSteps.push(`Simplify second parallel group (Z3 || Z4): Z_{34} = (${formatComplex(Z[2])} &times; ${formatComplex(Z[3])}) / (${formatComplex(Z[2])} + ${formatComplex(Z[3])}) = <strong>${formatComplex(z34)} &Omega;</strong>`);
    simplificationSteps.push(`Add groups in series: Z_{EQ} = Z_{12} + Z_{34} = ${formatComplex(z12)} + ${formatComplex(z34)} = <strong>${formatComplex(Z_EQ)} &Omega;</strong>`);
    
    const It = Comp.div(Vs_complex, Z_EQ);
    const V_par1 = Comp.mul(It, z12);
    const V_par2 = Comp.mul(It, z34);
    V_comp[0] = V_par1;
    V_comp[1] = V_par1;
    V_comp[2] = V_par2;
    V_comp[3] = V_par2;
    I_comp[0] = Comp.div(V_par1, Z[0]);
    I_comp[1] = Comp.div(V_par1, Z[1]);
    I_comp[2] = Comp.div(V_par2, Z[2]);
    I_comp[3] = Comp.div(V_par2, Z[3]);
  } else if (topology === 'parallel_with_series_branch') {
    const z_ser = Comp.add(Z[1], Z[2]);
    Z_EQ = Comp.parallel(Z[0], z_ser);
    simplificationSteps.push(`Simplify series branch (Z2 + Z3): Z_{23} = ${formatComplex(Z[1])} + ${formatComplex(Z[2])} = <strong>${formatComplex(z_ser)} &Omega;</strong>`);
    simplificationSteps.push(`Combine parallel branches: Z_{EQ} = (Z1 &times; Z_{23}) / (Z1 + Z_{23}) = (${formatComplex(Z[0])} &times; ${formatComplex(z_ser)}) / (${formatComplex(Z[0])} + ${formatComplex(z_ser)}) = <strong>${formatComplex(Z_EQ)} &Omega;</strong>`);
    
    V_comp[0] = Vs_complex;
    I_comp[0] = Comp.div(Vs_complex, Z[0]);
    const I_br = Comp.div(Vs_complex, z_ser);
    I_comp[1] = I_br;
    I_comp[2] = I_br;
    V_comp[1] = Comp.mul(I_br, Z[1]);
    V_comp[2] = Comp.mul(I_br, Z[2]);
  } else if (topology === 'series_parallel_three') {
    const z_par = Comp.recip(Comp.add(Comp.recip(Z[1]), Comp.add(Comp.recip(Z[2]), Comp.recip(Z[3]))));
    Z_EQ = Comp.add(Z[0], z_par);
    simplificationSteps.push(`Simplify parallel combination (Z2 || Z3 || Z4): Z_{234} = <strong>${formatComplex(z_par)} &Omega;</strong>`);
    simplificationSteps.push(`Add series component Z1: Z_{EQ} = Z1 + Z_{234} = ${formatComplex(Z[0])} + ${formatComplex(z_par)} = <strong>${formatComplex(Z_EQ)} &Omega;</strong>`);
    
    const It = Comp.div(Vs_complex, Z_EQ);
    I_comp[0] = It;
    V_comp[0] = Comp.mul(It, Z[0]);
    const V_par = Comp.sub(Vs_complex, V_comp[0]);
    V_comp[1] = V_par;
    V_comp[2] = V_par;
    V_comp[3] = V_par;
    I_comp[1] = Comp.div(V_par, Z[1]);
    I_comp[2] = Comp.div(V_par, Z[2]);
    I_comp[3] = Comp.div(V_par, Z[3]);
  } else if (topology === 'series_with_parallel_series_branch') {
    const z_ser = Comp.add(Z[2], Z[3]);
    const z_par = Comp.parallel(Z[1], z_ser);
    Z_EQ = Comp.add(Z[0], z_par);
    simplificationSteps.push(`Simplify series part of parallel branch (Z3 + Z4): Z_{34} = ${formatComplex(Z[2])} + ${formatComplex(Z[3])} = <strong>${formatComplex(z_ser)} &Omega;</strong>`);
    simplificationSteps.push(`Combine in parallel with Z2: Z_{234} = (Z2 &times; Z_{34}) / (Z2 + Z_{34}) = (${formatComplex(Z[1])} &times; ${formatComplex(z_ser)}) / (${formatComplex(Z[1])} + ${formatComplex(z_ser)}) = <strong>${formatComplex(z_par)} &Omega;</strong>`);
    simplificationSteps.push(`Add series component Z1: Z_{EQ} = Z1 + Z_{234} = ${formatComplex(Z[0])} + ${formatComplex(z_par)} = <strong>${formatComplex(Z_EQ)} &Omega;</strong>`);
    
    const It = Comp.div(Vs_complex, Z_EQ);
    I_comp[0] = It;
    V_comp[0] = Comp.mul(It, Z[0]);
    const V_par = Comp.sub(Vs_complex, V_comp[0]);
    V_comp[1] = V_par;
    I_comp[1] = Comp.div(V_par, Z[1]);
    const I_br = Comp.div(V_par, z_ser);
    I_comp[2] = I_br;
    I_comp[3] = I_br;
    V_comp[2] = Comp.mul(I_br, Z[2]);
    V_comp[3] = Comp.mul(I_br, Z[3]);
  }

  const I_T = Comp.div(Vs_complex, Z_EQ);

  return {
    Z_EQ,
    initSteps,
    simplificationSteps,
    V_comp,
    I_comp,
    I_T
  };
}

/**
 * Formats LaTeX-like subscripts (e.g. R_{EQ}, I_T) into HTML subscript tags (e.g. R<sub>EQ</sub>, I<sub>T</sub>)
 * and strips any LaTeX math wrappers ($).
 */
function formatMathNotation(str) {
  if (!str) return '';
  return str
    // Remove LaTeX dollar sign math wrappers ($)
    .replace(/\$(.*?)\$/g, '$1')
    // Format subscripts with curly braces: R_{EQ} -> R<sub>EQ</sub>
    .replace(/([a-zA-Z0-9]+)_{([a-zA-Z0-9,\s\-+&;]+)}/g, '$1<sub>$2</sub>')
    // Format simple subscripts: I_T -> I<sub>T</sub>, V_s -> V<sub>s</sub>
    .replace(/\b([RLCXZVIPTYf])_([a-zA-Z0-9]+)\b/g, '$1<sub>$2</sub>');
}

function generateRandomCalculationQuestion(difficulty = 'medium', type = 'all') {
  let category = type;
  if (type === 'all') {
    category = ['resistors', 'inductors', 'capacitors', 'rlc'][Math.floor(Math.random() * 4)];
  }
  
  let topologies = topologiesByDifficulty[difficulty];
  if (category === 'rlc') {
    topologies = rlcTopologiesByDifficulty[difficulty];
  }
  const topology = topologies[Math.floor(Math.random() * topologies.length)];
  const N = getComponentCount(topology, difficulty);
  
  const components = [];
  const labels = [];
  const types = [];
  const valStrs = [];
  const vals = [];
  
  if (category === 'resistors') {
    for (let i = 0; i < N; i++) {
      types.push('R');
      labels.push(`R${i+1}`);
    }
  } else if (category === 'inductors') {
    for (let i = 0; i < N; i++) {
      types.push('L');
      labels.push(`L${i+1}`);
    }
  } else if (category === 'capacitors') {
    for (let i = 0; i < N; i++) {
      types.push('C');
      labels.push(`C${i+1}`);
    }
  } else if (category === 'rlc') {
    for (let i = 0; i < N; i++) {
      types.push(['R', 'L', 'C'][Math.floor(Math.random() * 3)]);
    }
    const hasR = types.includes('R');
    const hasReactive = types.includes('L') || types.includes('C');
    if (!hasR || !hasReactive) {
      types[0] = 'R';
      types[1] = Math.random() > 0.5 ? 'L' : 'C';
    }
    const counts = { R: 0, L: 0, C: 0 };
    for (let i = 0; i < N; i++) {
      counts[types[i]]++;
      labels.push(`${types[i]}${counts[types[i]]}`);
    }
  }
  
  for (let i = 0; i < N; i++) {
    let val = 0;
    if (types[i] === 'R') {
      val = [10, 20, 30, 40, 50, 60, 80, 100, 150, 200, 300, 400, 500, 600, 800, 1000][Math.floor(Math.random() * 16)];
    } else if (types[i] === 'L') {
      val = [10, 20, 30, 40, 50, 60, 80, 100, 120, 150, 200, 250, 300, 400, 500][Math.floor(Math.random() * 15)];
    } else if (types[i] === 'C') {
      val = [1, 2, 5, 10, 15, 20, 33, 47, 50, 100][Math.floor(Math.random() * 10)];
    }
    vals.push(val);
    components.push({ type: types[i], val: val, label: labels[i] });
    const unit = types[i] === 'R' ? 'Ω' : (types[i] === 'L' ? 'mH' : 'µF');
    valStrs.push(`${val} ${unit}`);
  }
  
  const freq = Math.random() > 0.5 ? 60 : 400;
  const Vs = [12, 24, 36, 48, 115, 120, 240][Math.floor(Math.random() * 7)];
  
  let qType = 'EQ';
  if (topology !== 'ladder') {
    if (difficulty === 'easy') {
      qType = (category === 'resistors') ? 'EQ' : (Math.random() > 0.5 ? 'EQ' : 'X_EQ');
    } else {
      const choices = (category === 'resistors')
        ? ['EQ', 'I_T', 'V_drop', 'I_branch']
        : ['EQ', 'X_EQ', 'I_T', 'V_drop', 'I_branch'];
      qType = choices[Math.floor(Math.random() * choices.length)];
    }
  }
  
  const targetIdx = Math.floor(Math.random() * N);
  const targetComp = components[targetIdx];
  
  let questionText = '';
  let correctVal = 0;
  let unit = '';
  let walkthrough = '';
  
  if (category === 'resistors') {
    if (qType === 'EQ') {
      const res = solveRL_EQ(topology, vals, 'R', 'Ω');
      questionText = `For the resistor network shown, calculate the total equivalent resistance ($R_{EQ}$) ${topology === 'ladder' ? 'between terminals A and B' : ''}.`;
      correctVal = res.eq;
      unit = 'Ω';
      walkthrough = `
        <strong>Step-by-step simplification:</strong><br>
        ${res.steps.join('<br>')}
      `;
    } else if (qType === 'I_T') {
      const res = solveRL_EQ(topology, vals, 'R', 'Ω');
      const I_T = Vs / res.eq;
      const usemA = I_T < 1.0;
      questionText = `If the circuit is connected to a ${Vs} V DC source, calculate the total circuit current ($I_T$).`;
      correctVal = usemA ? I_T * 1000 : I_T;
      unit = usemA ? 'mA' : 'A';
      walkthrough = `
        <strong>Step 1: Find the equivalent resistance R_{EQ}:</strong><br>
        ${res.steps.join('<br>')}<br><br>
        <strong>Step 2: Use Ohm's Law:</strong><br>
        I_T = V_s / R_{EQ} = ${Vs} V / ${res.eq.toFixed(1)} &Omega; &approx; <strong>${(correctVal).toFixed(1)} ${unit}</strong>.
      `;
    } else {
      const res = solveRealNetwork(topology, vals, Vs);
      if (qType === 'V_drop') {
        questionText = `For the circuit connected to a ${Vs} V DC source, calculate the voltage drop across resistor ${targetComp.label}.`;
        correctVal = res.V_comp[targetIdx];
        unit = 'V';
        walkthrough = `
          <strong>Step 1: Simplify the network to find total impedance and current:</strong><br>
          ${res.simplificationSteps.join('<br>')}<br><br>
          <strong>Step 2: Calculate component voltage drop:</strong><br>
          For component ${targetComp.label}, the voltage drop is: V_{${targetComp.label}} = <strong>${correctVal.toFixed(1)} V</strong>.
        `;
      } else {
        const iVal = res.I_comp[targetIdx];
        const usemA = iVal < 1.0;
        questionText = `For the circuit connected to a ${Vs} V DC source, calculate the current flowing through resistor ${targetComp.label}.`;
        correctVal = usemA ? iVal * 1000 : iVal;
        unit = usemA ? 'mA' : 'A';
        walkthrough = `
          <strong>Step 1: Simplify the network to find total impedance and current:</strong><br>
          ${res.simplificationSteps.join('<br>')}<br><br>
          <strong>Step 2: Calculate component current:</strong><br>
          The current through component ${targetComp.label} is: I_{${targetComp.label}} &approx; <strong>${correctVal.toFixed(1)} ${unit}</strong>.
        `;
      }
    }
  } else if (category === 'inductors') {
    if (qType === 'EQ') {
      const res = solveRL_EQ(topology, vals, 'L', 'mH');
      questionText = `Calculate the total equivalent inductance ($L_{EQ}$) of the circuit ${topology === 'ladder' ? 'between terminals A and B' : ''}.`;
      correctVal = res.eq;
      unit = 'mH';
      walkthrough = `
        <strong>Step-by-step simplification:</strong><br>
        ${res.steps.join('<br>')}
      `;
    } else if (qType === 'X_EQ') {
      const res = solveRL_EQ(topology, vals, 'L', 'mH');
      const X_EQ = 2 * Math.PI * freq * (res.eq / 1000);
      questionText = `Calculate the total equivalent inductive reactance ($X_{L,EQ}$) of the network at ${freq} Hz.`;
      correctVal = X_EQ;
      unit = 'Ω';
      walkthrough = `
        <strong>Step 1: Find equivalent inductance L_{EQ}:</strong><br>
        ${res.steps.join('<br>')}<br><br>
        <strong>Step 2: Calculate reactance:</strong><br>
        X_{L,EQ} = 2 &pi; f L_{EQ} = 2 &pi; &times; ${freq} &times; (${res.eq.toFixed(1)} mH / 1000) &approx; <strong>${X_EQ.toFixed(1)} &Omega;</strong>.
      `;
    } else if (qType === 'I_T') {
      const res = solveRL_EQ(topology, vals, 'L', 'mH');
      const X_EQ = 2 * Math.PI * freq * (res.eq / 1000);
      const I_T = Vs / X_EQ;
      const usemA = I_T < 1.0;
      questionText = `If the circuit is connected to a ${Vs} V, ${freq} Hz AC source, calculate the total circuit current ($I_T$).`;
      correctVal = usemA ? I_T * 1000 : I_T;
      unit = usemA ? 'mA' : 'A';
      walkthrough = `
        <strong>Step 1: Find L_{EQ}:</strong><br>
        ${res.steps.join('<br>')}<br><br>
        <strong>Step 2: Calculate total inductive reactance X_{L,EQ}:</strong><br>
        X_{L,EQ} = 2 &pi; f L_{EQ} = 2 &pi; &times; ${freq} &times; (${res.eq.toFixed(1)} mH / 1000) &approx; ${X_EQ.toFixed(1)} &Omega;.<br><br>
        <strong>Step 3: Calculate total current:</strong><br>
        I_T = V_s / X_{L,EQ} = ${Vs} V / ${X_EQ.toFixed(1)} &Omega; &approx; <strong>${correctVal.toFixed(1)} ${unit}</strong>.
      `;
    } else {
      const X = vals.map(v => 2 * Math.PI * freq * (v / 1000));
      const res = solveRealNetwork(topology, X, Vs);
      if (qType === 'V_drop') {
        questionText = `If the circuit is connected to a ${Vs} V, ${freq} Hz AC source, calculate the voltage drop across inductor ${targetComp.label}.`;
        correctVal = res.V_comp[targetIdx];
        unit = 'V';
        walkthrough = `
          <strong>Step 1: Find reactances at ${freq} Hz:</strong><br>
          ${components.map((c, i) => `X_{${c.label}} = 2 &pi; f L = 2 &pi; &times; ${freq} &times; (${c.val} mH / 1000) &approx; ${X[i].toFixed(1)} &Omega;`).join('<br>')}<br><br>
          <strong>Step 2: Simplify the network:</strong><br>
          ${res.simplificationSteps.join('<br>')}<br><br>
          <strong>Step 3: Calculate voltage drop:</strong><br>
          For component ${targetComp.label}, the voltage drop is: V_{${targetComp.label}} = <strong>${correctVal.toFixed(1)} V</strong>.
        `;
      } else {
        const iVal = res.I_comp[targetIdx];
        const usemA = iVal < 1.0;
        questionText = `If the circuit is connected to a ${Vs} V, ${freq} Hz AC source, calculate the current flowing through inductor ${targetComp.label}.`;
        correctVal = usemA ? iVal * 1000 : iVal;
        unit = usemA ? 'mA' : 'A';
        walkthrough = `
          <strong>Step 1: Find reactances at ${freq} Hz:</strong><br>
          ${components.map((c, i) => `X_{${c.label}} = 2 &pi; f L = 2 &pi; &times; ${freq} &times; (${c.val} mH / 1000) &approx; ${X[i].toFixed(1)} &Omega;`).join('<br>')}<br><br>
          <strong>Step 2: Simplify the network:</strong><br>
          ${res.simplificationSteps.join('<br>')}<br><br>
          <strong>Step 3: Calculate current:</strong><br>
          The current through ${targetComp.label} is: I_{${targetComp.label}} &approx; <strong>${correctVal.toFixed(1)} ${unit}</strong>.
        `;
      }
    }
  } else if (category === 'capacitors') {
    if (qType === 'EQ') {
      const res = solveC_EQ(topology, vals);
      questionText = `Calculate the total equivalent capacitance ($C_{EQ}$) of the circuit ${topology === 'ladder' ? 'between terminals A and B' : ''}.`;
      correctVal = res.eq;
      unit = 'µF';
      walkthrough = `
        <strong>Step-by-step simplification:</strong><br>
        ${res.steps.join('<br>')}
      `;
    } else if (qType === 'X_EQ') {
      const res = solveC_EQ(topology, vals);
      const X_EQ = 1 / (2 * Math.PI * freq * (res.eq / 1000000));
      questionText = `Calculate the total equivalent capacitive reactance ($X_{C,EQ}$) of the network at ${freq} Hz.`;
      correctVal = X_EQ;
      unit = 'Ω';
      walkthrough = `
        <strong>Step 1: Find equivalent capacitance C_{EQ}:</strong><br>
        ${res.steps.join('<br>')}<br><br>
        <strong>Step 2: Calculate reactance:</strong><br>
        X_{C,EQ} = 1 / (2 &pi; f C_{EQ}) = 1 / (2 &pi; &times; ${freq} &times; (${res.eq.toFixed(1)} &mu;F / 10^6)) &approx; <strong>${X_EQ.toFixed(1)} &Omega;</strong>.
      `;
    } else if (qType === 'I_T') {
      const res = solveC_EQ(topology, vals);
      const X_EQ = 1 / (2 * Math.PI * freq * (res.eq / 1000000));
      const I_T = Vs / X_EQ;
      const usemA = I_T < 1.0;
      questionText = `If the circuit is connected to a ${Vs} V, ${freq} Hz AC source, calculate the total circuit current ($I_T$).`;
      correctVal = usemA ? I_T * 1000 : I_T;
      unit = usemA ? 'mA' : 'A';
      walkthrough = `
        <strong>Step 1: Find C_{EQ}:</strong><br>
        ${res.steps.join('<br>')}<br><br>
        <strong>Step 2: Calculate total capacitive reactance X_{C,EQ}:</strong><br>
        X_{C,EQ} = 1 / (2 &pi; f C_{EQ}) = 1 / (2 &pi; &times; ${freq} &times; (${res.eq.toFixed(1)} &mu;F / 10^6)) &approx; ${X_EQ.toFixed(1)} &Omega;.<br><br>
        <strong>Step 3: Calculate total current:</strong><br>
        I_T = V_s / X_{C,EQ} = ${Vs} V / ${X_EQ.toFixed(1)} &Omega; &approx; <strong>${correctVal.toFixed(1)} ${unit}</strong>.
      `;
    } else {
      const X = vals.map(v => 1 / (2 * Math.PI * freq * (v / 1000000)));
      const res = solveRealNetwork(topology, X, Vs);
      if (qType === 'V_drop') {
        questionText = `If the circuit is connected to a ${Vs} V, ${freq} Hz AC source, calculate the voltage drop across capacitor ${targetComp.label}.`;
        correctVal = res.V_comp[targetIdx];
        unit = 'V';
        walkthrough = `
          <strong>Step 1: Find reactances at ${freq} Hz:</strong><br>
          ${components.map((c, i) => `X_{${c.label}} = 1 / (2 &pi; f C) = 1 / (2 &pi; &times; ${freq} &times; (${c.val} &mu;F / 10^6)) &approx; ${X[i].toFixed(1)} &Omega;`).join('<br>')}<br><br>
          <strong>Step 2: Simplify the network:</strong><br>
          ${res.simplificationSteps.join('<br>')}<br><br>
          <strong>Step 3: Calculate voltage drop:</strong><br>
          For component ${targetComp.label}, the voltage drop is: V_{${targetComp.label}} = <strong>${correctVal.toFixed(1)} V</strong>.
        `;
      } else {
        const iVal = res.I_comp[targetIdx];
        const usemA = iVal < 1.0;
        questionText = `If the circuit is connected to a ${Vs} V, ${freq} Hz AC source, calculate the current flowing through capacitor ${targetComp.label}.`;
        correctVal = usemA ? iVal * 1000 : iVal;
        unit = usemA ? 'mA' : 'A';
        walkthrough = `
          <strong>Step 1: Find reactances at ${freq} Hz:</strong><br>
          ${components.map((c, i) => `X_{${c.label}} = 1 / (2 &pi; f C) = 1 / (2 &pi; &times; ${freq} &times; (${c.val} &mu;F / 10^6)) &approx; ${X[i].toFixed(1)} &Omega;`).join('<br>')}<br><br>
          <strong>Step 2: Simplify the network:</strong><br>
          ${res.simplificationSteps.join('<br>')}<br><br>
          <strong>Step 3: Calculate current:</strong><br>
          The current through ${targetComp.label} is: I_{${targetComp.label}} &approx; <strong>${correctVal.toFixed(1)} ${unit}</strong>.
        `;
      }
    }
  } else if (category === 'rlc') {
    const res = solveRLCNetwork(topology, components, freq, Vs);
    if (qType === 'EQ') {
      questionText = `Calculate the total magnitude of AC impedance ($Z_{EQ}$) of the RLC network at ${freq} Hz.`;
      correctVal = Comp.mag(res.Z_EQ);
      unit = 'Ω';
      walkthrough = `
        <strong>Step 1: Calculate reactive components and impedances:</strong><br>
        ${res.initSteps.join('<br>')}<br><br>
        <strong>Step 2: Simplify the network complex impedances step-by-step:</strong><br>
        ${res.simplificationSteps.join('<br>')}<br><br>
        <strong>Step 3: Calculate magnitude of impedance:</strong><br>
        |Z_{EQ}| = sqrt(R_{EQ}^2 + X_{EQ}^2) = sqrt(${res.Z_EQ.r.toFixed(1)}^2 + (${res.Z_EQ.i.toFixed(1)})^2) &approx; <strong>${correctVal.toFixed(1)} &Omega;</strong>.
      `;
    } else if (qType === 'I_T') {
      const itVal = Comp.mag(res.I_T);
      const usemA = itVal < 1.0;
      questionText = `If the circuit is connected to a ${Vs} V, ${freq} Hz AC source, calculate the total circuit current magnitude ($I_T$).`;
      correctVal = usemA ? itVal * 1000 : itVal;
      unit = usemA ? 'mA' : 'A';
      walkthrough = `
        <strong>Step 1: Calculate reactive components and impedances:</strong><br>
        ${res.initSteps.join('<br>')}<br><br>
        <strong>Step 2: Simplify the network complex impedances:</strong><br>
        ${res.simplificationSteps.join('<br>')}<br><br>
        <strong>Step 3: Calculate total current:</strong><br>
        |Z_{EQ}| = ${Comp.mag(res.Z_EQ).toFixed(1)} &Omega;.<br>
        I_T = V_s / Z_{EQ} = ${Vs} V / ${Comp.mag(res.Z_EQ).toFixed(1)} &Omega; &approx; <strong>${correctVal.toFixed(1)} ${unit}</strong>.
      `;
    } else if (qType === 'V_drop') {
      questionText = `If the circuit is connected to a ${Vs} V, ${freq} Hz AC source, calculate the magnitude of the voltage drop across component ${targetComp.label}.`;
      correctVal = Comp.mag(res.V_comp[targetIdx]);
      unit = 'V';
      walkthrough = `
        <strong>Step 1: Calculate reactive components and impedances:</strong><br>
        ${res.initSteps.join('<br>')}<br><br>
        <strong>Step 2: Simplify the network complex impedances:</strong><br>
        ${res.simplificationSteps.join('<br>')}<br><br>
        <strong>Step 3: Calculate current and voltage drops:</strong><br>
        Total impedance |Z_{EQ}| &approx; ${Comp.mag(res.Z_EQ).toFixed(1)} &Omega;.<br>
        Total current |I_T| &approx; ${Comp.mag(res.I_T).toFixed(2)} A.<br>
        For component ${targetComp.label}, the complex voltage drop is: V_{${targetComp.label}} = <strong>${formatComplex(res.V_comp[targetIdx])} V</strong>.<br>
        Magnitude: |V_{${targetComp.label}}| &approx; <strong>${correctVal.toFixed(1)} V</strong>.
      `;
    } else {
      const iVal = Comp.mag(res.I_comp[targetIdx]);
      const usemA = iVal < 1.0;
      questionText = `If the circuit is connected to a ${Vs} V, ${freq} Hz AC source, calculate the magnitude of the current flowing through component ${targetComp.label}.`;
      correctVal = usemA ? iVal * 1000 : iVal;
      unit = usemA ? 'mA' : 'A';
      walkthrough = `
        <strong>Step 1: Calculate reactive components and impedances:</strong><br>
        ${res.initSteps.join('<br>')}<br><br>
        <strong>Step 2: Simplify the network complex impedances:</strong><br>
        ${res.simplificationSteps.join('<br>')}<br><br>
        <strong>Step 3: Calculate branch currents:</strong><br>
        Total impedance |Z_{EQ}| &approx; ${Comp.mag(res.Z_EQ).toFixed(1)} &Omega;.<br>
        Total current |I_T| &approx; ${Comp.mag(res.I_T).toFixed(2)} A.<br>
        For component ${targetComp.label}, the complex branch current is: I_{${targetComp.label}} = <strong>${formatComplex(res.I_comp[targetIdx])} A</strong>.<br>
        Magnitude: |I_{${targetComp.label}}| &approx; <strong>${correctVal.toFixed(1)} ${unit}</strong>.
      `;
    }
  }

  return {
    topic: getTopicName(category),
    text: formatMathNotation(questionText),
    options: makeOptions(correctVal, unit, v => v.toFixed(1)),
    circuitData: {
      topology: topology,
      voltage: Vs,
      frequency: freq,
      types: types,
      labels: labels,
      valStrs: valStrs,
      vals: vals,
      compType: category === 'resistors' ? 'R' : (category === 'inductors' ? 'L' : 'C'),
      unit: category === 'resistors' ? 'Ω' : (category === 'inductors' ? 'mH' : 'µF')
    },
    walkthrough: formatMathNotation(walkthrough),
    isCalculation: true,
    subject: 'V. Calculation Practice',
    category: 'Circuit Calculations'
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
