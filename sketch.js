let imgs = [];
let filenames = [];

function preload() {
  // Bilder automatisch erzeugen (1–97), die vorhanden sind:
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
  angleMode(RADIANS);
  imageMode(CENTER); // Zentrierte Platzierung
}

function draw() {
  background(10);
  for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];

    // Zufällige Position
    let x = random(width);
    let y = random(height);

    // Zufällige Größe
    let scale = random(0.4, 1.0);
    let w = img.width * scale;
    let h = img.height * scale;

    // Zufällige Rotation
    let angle = random(-PI / 8, PI / 8);

    push();
    translate(x, y);
    rotate(angle);
    image(img, 0, 0, w, h);
    pop();
  }
}
