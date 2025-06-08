let imgs = [];
let filenames = [];
let positions = [];

function preload() {
  for (let i = 1; i <= 124; i++) {
    filenames.push(`img${i}.jpg`);
  }
  for (let i = 0; i < filenames.length; i++) {
    imgs.push(loadImage(`images/${filenames[i]}`));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  imageMode(CORNER);
  angleMode(RADIANS);

  generateLayout();
}

function draw() {
  background(10);
  for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];
    let pos = positions[i];

    push();
    translate(pos.x, pos.y);
    image(img, 0, 0, pos.w, pos.h);
    pop();
  }
}

function generateLayout() {
  let x = 20;
  let y = 20;
  let maxRowHeight = 0;
  let padding = 6;
  let maxW = width - 40;

  for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];

    // Skalierung basierend auf Bildgröße, aber nicht zu groß
    let scale = random(80, 140); // Zielhöhe in px
    let aspect = img.width / img.height;
    let w = scale * aspect;
    let h = scale;

    // Zeilenumbruch
    if (x + w > maxW) {
      x = 20;
      y += maxRowHeight + padding;
      maxRowHeight = 0;
    }

    // Zufälliger Versatz für Collage-Feeling
    let dx = random(-4, 4);
    let dy = random(-4, 4);

    positions.push({ x: x + dx, y: y + dy, w: w, h: h });

    x += w + padding;
    maxRowHeight = max(maxRowHeight, h);
  }
}
