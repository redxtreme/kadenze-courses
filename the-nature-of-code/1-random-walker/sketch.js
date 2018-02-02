var w;

// Setup function required by p5
function setup() {
  createCanvas(640, 360);
  w = new Walker();

}

// Animation loop
function draw() {
  background(51);
  w.update();
  w.display();
}

function Walker() {
  this.pos = createVector(width / 2, height / 2);

  //velocity
  this.vel = createVector(0, 0);

  this.update = function() {
    //acceleration
    this.acc = createVector(random(-1, 1), random(-1, 1));
    this.acc.mult(0.1);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  //draw walker
  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}
