function Vehicle(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxSpeed = 5;
  this.maxForce = 0.2; // Turning agility
  this.r = 4;

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);

    // Reset forces
    this.acc.set(0, 0);
  };

  this.display = function() {

    // Draw a triangle rotated in the direction of velocity
    var theta = this.vel.heading() + PI / 2;
    fill(127);
    stroke(200);
    strokeWeight(1);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(theta);
    beginShape();
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);
    endShape(CLOSE);
    pop();
  };

  // Apply a given force
  this.applyForce = function(force) {

    // Make a copy to protect original force
    var f = force.copy();
    this.acc.add(f);
  };

  this.arrive = function(target) {
    var desired = p5.Vector.sub(target, this.pos);

    // The arrive behavior!
    var d = desired.mag();

    // If we are getting really close to the target
    if (d < 100) {

      // Map the desired magnitude according to distance
      // This maps the values to a new scale
      var m = map(d, 0, 100, 0, this.maxSpeed);
      desired.setMag(m);
    } else {
      desired.setMag(this.maxSpeed);
    }

    // Craig Reynolds: Steering = desired - velocity
    var steering = p5.Vector.sub(desired, this.vel);
    steering.limit(this.maxForce);

    this.applyForce(steering);
  };
}
