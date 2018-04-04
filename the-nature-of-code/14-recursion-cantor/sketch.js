// Setup function required by p5
function setup() {
  createCanvas(640, 360);
}

// Animation loop
function draw() {
  background(51);

  stroke(255);
  noFill();

  cantor(200, 100, 300)
}

function cantor(x, y, len) {
  var h = 30;

  if (len >= 1) {
    stroke(255);
    strokeWeight;
    line(x, y, x+len, y);
    y += h;

    cantor(x, y, len/3);
    cantor(x + len*2/3, y, len/3);
  }
}
