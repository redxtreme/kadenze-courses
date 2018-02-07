var particles = [];

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 50; i++) {
    particles[i] = new Particle(random(width), 100, random(2, 4));
  }
}

function draw() {
  background(51);
  var wind = createVector(0.1, 0);

  for (var i = 0; i < particles.length; i++) {
    var gravity = createVector(0, 0.2 * particles[i].mass);

    // Apply forces
    particles[i].applyForce(gravity);
    if (mouseIsPressed)
      particles[i].applyForce(wind);

    particles[i].update();
    particles[i].edges();
    particles[i].display();
  }
}
