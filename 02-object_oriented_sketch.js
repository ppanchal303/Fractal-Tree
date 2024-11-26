let tree = []
let count = 0
let leaves = []

function setup () {
  createCanvas(400, 400)
  // color = createSlider(0, 255, 255)
  // angle = createSlider(0, Math.PI, 0.21, 0.01)
  // len = createSlider(20, 250, 150)
  let a = createVector(width / 2, height)
  let b = createVector(width / 2, height - 100)

  let root = new Branch(a, b)

  tree[0] = root
}

function mousePressed () {
  for (i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].drawn && count < 5) {
      tree.push(tree[i].rightBranch())
      tree.push(tree[i].leftBranch())
      tree[i].drawn = true
    }
  }

  count++

  if (count === 5) {
    for (i = 0; i <= tree.length; i++) {
      if (!tree[i].drawn) {
        let leaf = tree[i].end.copy()
        leaves.push(leaf)
      }
    }
  }
}

function draw () {
  background(69, 176, 140)
  for (i = 0; i < tree.length; i++) {
    tree[i].draw()
  }

  for (i = 0; i < leaves.length; i++) {
    fill(255, 0, 100, 150)
    noStroke()
    circle(leaves[i].x, leaves[i].y, 5)
  }
}
