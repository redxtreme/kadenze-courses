var w;

// Setup function required by p5
function setup() {
  createCanvas(640, 360);
  w = new Walker();

}

// Animation loop
function draw() {
  background(51);
  w.walk();
  w.display();
}

function Walker() {
  this.pos = createVector(width / 2, height / 2);

  //random walk function
  this.walk = function() {

    //velocity
    this.vel = createVector(random(-5, 5), random(-5, 5));

    //adjust the position vector
    this.pos = this.pos.add(this.vel);
  }

  //draw walker
  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}
