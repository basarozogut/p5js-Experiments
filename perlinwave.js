let j = 0;
let k = 0;

function setup() {
  createCanvas(320, 240);
}

function draw() {
  background(0);
  j += .1;

  for (let i = 0; i < 10; i++){
    let iNorm = norm(i, 0, 5);
    perlinWave([255, iNorm * 255 / 4, 0, 255], 0.01, i * 50, j, -i * 10)
  }
}

function perlinWave(color, noiseScale, noiseOffset, rad, yOffset) {
  stroke(color);
  for (let i = 0; i < width; i++) {
    let noiseVal = noise((i + noiseOffset) * noiseScale);
    line(i, height, i, height - (noiseVal * height / 2) - cos(rad + i * .01) * 20 + yOffset);
  }
}