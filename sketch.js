let imgs = [];
let filenames = [];
let cols, rows;
let spacing = 4;

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
  imageMode(CENTER);
  angleMode(RADIANS);

  cols = ceil(sqrt(imgs.length));
  rows = ceil(imgs.length / cols);
}

function draw() {
  background(10);
  
  let gridW = width * 0.85;
  let gridH = height * 0.85;
  let cellW = gridW / cols;
  let cellH = gridH / rows;

  let startX = (width - gridW) / 2;
  let startY = (height - gridH) / 2;

  let i = 0;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (i >= imgs.length) return;

      let img = imgs[i];
      let aspect = img.width / img.height;

      let maxW = cellW - spacing;
      let maxH = cellH - spacing;

      let targetW = maxW * random(0.95, 1.1);
      let targetH = targetW / aspect;

      if (targetH > maxH) {
        targetH = maxH;
        targetW = targetH * aspect;
      }

      let cx = startX + x * cellW + cellW / 2 + random(-6, 6);
      let cy = startY + y * cellH + cellH / 2 + random(-6, 6);
      let angle = random(-PI / 36, PI / 36); // ca. ±5°

      push();
      translate(cx, cy);
      rotate(angle);
      image(img, 0, 0, targetW, targetH);
      pop();

      i++;
    }
  }
}
