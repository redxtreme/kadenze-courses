// Setup function required by p5
function setup() {
  createCanvas(640, 360);
}

// Animation loop
function draw() {
  background(51);

  stroke(255);
  noFill();

  ellipse(width/2, height/2, 300, 300);
}
