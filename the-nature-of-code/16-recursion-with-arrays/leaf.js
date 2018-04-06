function Leaf(pos) {

  this.pos = pos.copy();

  this.display = function() {
    noStroke();
    fill(50, 100);
    ellipse(pos.x, pos.y, 4, 4);
  }
}
