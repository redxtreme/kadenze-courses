var particle;

function setup() {
  createCanvas(640, 360);
  particle1 = new Particle(200, 100);
  particle2 = new Particle(400, 100);
}

function draw() {
  background(51);

  var gravity = createVector(0, 0.1);
  var wind = createVector(0.1, 0);

  // Apply forces
  particle1.applyForce(gravity);
  particle2.applyForce(gravity);
  if (mouseIsPressed) {
    particle1.applyForce(wind);
    particle2.applyForce(wind);
  }

  particle1.update();
  particle1.edges();
  particle1.display();
  particle2.update();
  particle2.edges();
  particle2.display();
}
