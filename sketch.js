let imgs = [];
let total = 100; // Anzahl der Bilder – passe das an!
let cols, rows;
let imgW, imgH;

function preload() {
  for (let i = 1; i <= total; i++) {
    imgs.push(loadImage(`images/img${i}.jpg`));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = ceil(sqrt(total));
  rows = ceil(total / cols);
  imgW = width / cols;
  imgH = height / rows;
  noLoop();
}

function draw() {
  background(10);
  let i = 0;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (i >= imgs.length) return;

      let xOffset = random(-10, 10);
      let yOffset = random(-10, 10);
      let w = imgW * random(0.9, 1.05);
      let h = imgH * random(0.9, 1.05);

      image(imgs[i], x * imgW + xOffset, y * imgH + yOffset, w, h);
      i++;
    }
  }
}
