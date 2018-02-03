var Attractor = function() {
  this.pos = createVector(width / 2, height / 2);
  this.mass = 20;
  this.G = 1;

  this.calculateAttraction = function(p) {
    // Calculate direction of force
    var force = p5.Vector.sub(this.pos, p.pos);

    // Distance between objects
    var distance = force.mag();

    // Limiting the  distance to eliminate "extreme" results for very close or very far objects
    distance = constrain(distance, 5, 25);

    // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    force.normalize();

    // Calculate gravitational force magnitude
    var strength = (this.G * this.mass * p.mass) / (distance * distance);

    // Get force vector --> magnitude * direction
    force.mult(strength);
    return force;
  }

  // Method to display
  this.display = function() {
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke(0);
    ellipse(this.pos.x, this.pos.y, this.mass * 2, this.mass * 2);
  }
}
