let j = 0;
let k = 0;
let precision = .1 / 2;
let rPrecision = 1 / precision;

function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  background(0, 0, 102);
  j += .1;

  smooth();
  translate(-width / 2, -height / 2);
  let nWaves = 14;
  for (let i = 0; i < nWaves; i++) {
    let iNorm = norm(i, 0, nWaves);
    perlinWave(i, [255, iNorm * 255, 0], 0.002, iNorm * 1000, j, (i * 10))
  }
}

function perlinWave(idx, color, noiseScale, noiseOffset, rad, yOffset) {
  let flag = (idx % 2 == 0 ? 1 : -1)
  let w = width * precision;
  noiseScale *= rPrecision;
  fill(color);
  noStroke();

  beginShape();
  vertex(width, height);
  vertex(0, height);
  for (let i = 0; i < w; i++) {
    let noiseVal = noise((i + noiseOffset) * noiseScale);
    let iNorm = norm(i, 0, w);

    if (i == w - 1) {
      iNorm = 1;
    }

    vertex(iNorm * width, height - 100 - (noiseVal * height / 2) - cos(rad + i * .01 * flag) * 20 + yOffset);
  }
  endShape();
}