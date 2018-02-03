function Particle(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = m;

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    // Reset forces
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.mass * 10, this.mass * 10);
  }

  // Apply a given force
  this.applyForce = function(force) {

    // Make a copy to protect original force
    var f = force.copy();

    f.div(this.mass);
    this.acc.add(f);
  }

  // Respond to edge interactions
  this.edges = function() {

    // Floor
    if (this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
    }

    // Right wall
    if (this.pos.x > width) {
      this.vel.x *= -1;
      this.pos.x = width;
    }
  }
}
