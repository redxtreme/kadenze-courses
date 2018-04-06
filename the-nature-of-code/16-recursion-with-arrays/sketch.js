var tree = [];
var leaves = [];

// Setup function required by p5
function setup() {
  createCanvas(640, 360);
  var b = new Branch(createVector(width / 2,
    height), createVector(0, -1), 100);
  tree.push(b);
}

// Animation loop
function draw() {
  background(255);

  for (var i = 0; i < tree.length; i++) {
    //Get the branch, update and draw it
    tree[i].update();
    tree[i].render();

    if (tree[i].timeToBranch()) {
      if (tree.length < 1024) {
        tree.push(tree[i].branch(30)); //Add one going x degrees to the right
        tree.push(tree[i].branch(-25)); //Add one going left
      } else {
        leaves.push(new Leaf(tree[i].end));
      }
    }
  }

  for (var i=0; i < leaves.length; i++) {
    leaves[i].display();
  }

}
