function Particle() {
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    // Reset forces
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }

  // Apply a given force
  this.applyForce = function(force) {
    this.acc.add(force);
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
