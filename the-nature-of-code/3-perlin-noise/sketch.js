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
    var mouse = createVector(mouseX, mouseY);

    //Make a vector that goes from walker to the mouse
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(2);
    //setMag replaces this code
    // this.acc.normalize(2);
    // this.acc.mult(0.01);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  //draw walker
  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}
