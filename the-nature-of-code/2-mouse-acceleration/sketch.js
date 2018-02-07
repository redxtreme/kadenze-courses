var xoff = 0;

// Setup function required by p5
function setup() {
  createCanvas(640, 360);
}

// Animation loop
function draw() {
  background(51);

  //draw noise, needs a value of time
  var x = noise(xoff) * width;

  xoff += 0.05;

  fill(255);
  ellipse(x, 180, 48, 48);
}
