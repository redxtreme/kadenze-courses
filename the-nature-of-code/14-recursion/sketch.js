// Setup function required by p5
function setup() {
  createCanvas(640, 360);
}

// Animation loop
function draw() {
  background(51);

  stroke(255);
  noFill();

  drawCircle(width/2, height/2, 300)
}

function drawCircle(x, y, d) {
  ellipse(x, y, d, d);

  if (d > 10)
    drawCircle(x, y, d/2);
}
