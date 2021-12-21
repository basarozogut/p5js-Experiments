let j = 0;
let k = 0;

function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  background(0);
  j += .1;

  translate(-width / 2, -height / 2);
  let nWaves = 5;
  for (let i = 0; i < nWaves; i++) {
    let iNorm = norm(i, 0, nWaves);
    perlinWave(i, [255, iNorm * 255, 0], 0.002, iNorm * 1000, j, -(i * 10 + iNorm * 5))
  }
}

function perlinWave(idx, color, noiseScale, noiseOffset, rad, yOffset) {
  strokeWeight(1);
  stroke(color);

  let flag = (idx % 2 == 0 ? 1 : -1)
  
  beginShape(LINES);
  for (let i = 0; i < width; i++) {
    let noiseVal = noise((i + noiseOffset) * noiseScale);
  
    vertex(i, height);
    vertex(i, height - (noiseVal * height / 2) - cos(rad + i * .01 * flag) * 20 + yOffset);
  }
  endShape();
}