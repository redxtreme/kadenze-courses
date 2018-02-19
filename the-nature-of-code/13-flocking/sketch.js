var vehicles = [];
var slider1;
var slider2;

function setup() {
  createCanvas(640, 360);

  slider1 = createSlider(0, 5, 1, 0.1); // min, max, starting val, step
  slider2 = createSlider(0, 5, 1, 0.1); // min, max, starting val, step

  // We are now making random vehicles and storing them in an array
  for (var i = 0; i < 100; i++) {
    vehicles.push(new Vehicle(random(width), random(height)));
  }
}

function draw() {
  background(51);

  for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].applyBehaviors(vehicles);
    vehicles[i].update();
    vehicles[i].borders();
    vehicles[i].display();
  }
}
