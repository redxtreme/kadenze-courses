var particle1;
var particle2;

function setup() {
  createCanvas(640, 360);

  // Create liquid object
  liquid = new Liquid(0, height / 2, width, height / 2, 0.1);

  particle1 = new Particle(200, 100, 3);
  particle2 = new Particle(400, 100, 1);
}

function draw() {
  background(127);

  // Draw water
  liquid.display();

  // Is the Mover in the liquid?
  if (liquid.contains(particle1)) {

    // Calculate drag force
    var dragForce = liquid.calculateDrag(particle1);

    // Apply drag force to Mover
    particle1.applyForce(dragForce);
  }

  // Is the Mover in the liquid?
  if (liquid.contains(particle2)) {

    // Calculate drag force
    var dragForce = liquid.calculateDrag(particle2);

    // Apply drag force to Mover
    particle1.applyForce(dragForce);
  }

  var gravity1 = createVector(0, 0.1 * particle1.mass);
  var gravity2 = createVector(0, 0.1 * particle2.mass);

  // Apply forces
  particle1.applyForce(gravity1);
  particle2.applyForce(gravity2);

  particle1.update();
  particle1.edges();
  particle1.display();
  particle2.update();
  particle2.edges();
  particle2.display();
}
