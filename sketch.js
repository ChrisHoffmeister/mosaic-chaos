let imgs = [];
let filenames = [];

function preload() {
  // Lade alle Bilder von img1.jpg bis img124.jpg
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
}

function draw() {
  background(10);

  for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];

    // Zufällige Position auf der Leinwand
    let x = random(width);
    let y = random(height);

    // Erhalte Bildseitenverhältnis
    let aspectRatio = img.width / img.height;

    // Zufällige Zielhöhe (Skalierung)
    let targetHeight = random(80, 220);
    let targetWidth = targetHeight * aspectRatio;

    // Zufällige Rotation
    let angle = random(-PI / 10, PI / 10);

    // Zeichne das Bild mit Drehung und Position
    push();
    translate(x, y);
    rotate(angle);
    image(img, 0, 0, targetWidth, targetHeight);
    pop();
  }
}
