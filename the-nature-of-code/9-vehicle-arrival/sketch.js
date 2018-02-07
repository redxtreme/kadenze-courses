var vehicle;

// Setup function required by p5
function setup() {
  createCanvas(640, 360);
  vehicle = new Vehicle(320, 180);
}

// Animation loop
function draw() {
  background(51);

  var target = createVector(mouseX, mouseY);

  // Action Selection
  vehicle.arrive(target);

  vehicle.update();
  vehicle.display();
}
