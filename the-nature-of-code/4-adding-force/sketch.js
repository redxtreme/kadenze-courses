var particle;

function setup() {
  createCanvas(640, 360);
  particle = new Particle();
}

function draw() {
  background(51);

  var gravity = createVector(0, 0.1);
  particle.applyForce(gravity);

  particle.update();
  particle.display();
}
