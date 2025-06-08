let imgs = [];
let filenames = [];

function preload() {
  // 124 Bilder img1.jpg bis img124.jpg
  for (let i = 1; i <= 124; i++) {
    filenames.push(`img${i}.jpg`);
  }

  for (let i = 0; i < filenames.length; i++) {
    imgs.push(loadImage(`images/${filenames[i]}`));
  }
}

function setup() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  createCanvas(w, h);
  noLoop();
  imageMode(CENTER);
  angleMode(RADIANS);
}

function draw() {
  background(10);

  for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];

    // 🎯 Positionierung im Zentrum des Canvas mit leichtem Chaos
    let x = random(width * 0.25, width * 0.75);
    let y = random(height * 0.25, height * 0.75);

    // 🖼️ Originalseitenverhältnis beibehalten
    let aspectRatio = img.width / img.height;

    // 📐 Zufällige, aber begrenzte Größe
    let scale = random(0.3, 0.9);
    let maxW = width * 0.22;
    let targetW = min(img.width * scale, maxW);
    let targetH = targetW / aspectRatio;

    // 🔄 Rotation für organischen Stil
    let angle = random(-PI / 10, PI / 10);

    // 🎨 Zeichnen mit Rotation & Position
    push();
    translate(x, y);
    rotate(angle);
    image(img, 0, 0, targetW, targetH);
    pop();
  }
}
