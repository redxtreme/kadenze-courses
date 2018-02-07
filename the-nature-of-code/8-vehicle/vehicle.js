function Vehicle(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxSpeed = 5;

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    // Reset forces
    this.acc.set(0, 0);
  };

  this.display = function() {
    fill(255, 150);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  };

  // Apply a given force
  this.applyForce = function(force) {

    // Make a copy to protect original force
    var f = force.copy();
    this.acc.add(f);
  };

  this.seek = function(target) {
    var desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.maxSpeed);

    // Craig Renolds: Steering = desired - velocity
    var steering = p5.Vector.sub(desired, this.vel);

    this.applyForce(steering);
  };

  // // Respond to edge interactions
  // this.edges = function() {
  //
  //   // Floor
  //   if (this.pos.y > height) {
  //     this.vel.y *= -1;
  //     this.pos.y = height;
  //   }
  //
  //   // Right wall
  //   else if(this.pos.x > width) {
  //     this.vel.x *= -1;
  //     this.pos.x = width;
  //   }
  //
  //   // Ceiling
  //   else if(this.pos.y < 0) {
  //     this.vel.y *= -1;
  //     this.pos.y = 0;
  //   }
  //
  //   // Left wall
  //   else if(this.pos.x < 0) {
  //     this.vel.x *= -1;
  //     this.pos.x = 0;
  //   }
  // }
}
