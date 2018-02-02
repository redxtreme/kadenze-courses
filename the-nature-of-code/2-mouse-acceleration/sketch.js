// Setup function required by p5
function setup() {
  createCanvas(640, 360);
}

// Animation loop
function draw() {
  background(51);

  var time = 0;

  //draw noise, needs a value of time
  var x = noise(time) * width;

  fill(255);
  ellipse(x, 180, 48, 48);
}
