// Setup function required by p5
function setup() {
  createCanvas(640, 360);
}

// Animation loop
function draw() {
  background(51);

  //Pick an angle from 0 - 90 degrees
  angle = PI / 4;

  //Start tree from the bottom
  translate(width/2, height);
  stroke(255);
  branch(120);
}

function branch(len) {
  //Draw branch
  strokeWeight(2);
  line(0,0,0,-len);

  //Move to the end and shrink
  translate(0, -len);
  len *= 0.66;

  if (len > 2) {
    push();
    rotate(angle);
    branch(len);
    pop();

    //Repeat the same thing, only branch off to the left this time
    push();
    rotate(-angle);
    branch(len);
    pop();
  }
}
