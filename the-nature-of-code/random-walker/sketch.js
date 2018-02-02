var w;

// Setup function required by p5
function setup() {
  createCanvas(640, 360);
  w = new Walker();

}

// Animation loop
function draw() {
  background(51);
  w.display();
}

function Walker() {
  this.x = width/2;
  this.y = height/2;

  this.display = function() {
    fill(255);
    ellipse(this.x, this.y, 48, 48);
  }
}
