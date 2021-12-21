let j = 0;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0);

  j += radians(2);
  centerX = width / 2;
  centerY = height / 2;

  strokeWeight(2);

  stroke(255);
  noFill();
  circle(centerX, centerY, height - 16)

  for (let i = 0; i < 12; i++) {
    let offset = (-j * .1) + i * (TWO_PI / 12);
    stroke(255);
    let armLength = height / 2 - 10;
    let armLength2 = height / 2 - 40;
    let textOffset = height / 2 - 50;
    line(centerX + cos(offset) * armLength, centerY + sin(offset) * armLength, centerX + cos(offset) * armLength2, centerY + sin(offset) * armLength2);
    textAlign(CENTER, CENTER);
    text(i + 1, centerX + cos(offset) * textOffset, centerY + sin(offset) * textOffset);
  }

  let traces = 40;
  for (let i = 0; i < traces; i++) {
    let iNorm = norm(i, 0, traces);
    let iNormRev = 1 - iNorm;
    let offset = j * iNormRev;
    let armLength = 20 + 5 * i;
    stroke(255, 0, 0);
    line(centerX, centerY, centerX + cos(offset) * armLength, centerY + sin(offset) * armLength);
  }
}