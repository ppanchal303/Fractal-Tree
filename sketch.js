let len = 150
let angle = Math.PI / 6

function setup () {
  createCanvas(400, 400)
}

function draw () {
  background(50)
  stroke(255)
  translate(200, 400)
  drawLine(0, len)
}

function drawLine (i, j) {
  let x = i
  let y = j
  if (y > 2) {
    y = y * 0.67
    line(0, 0, x, -y)
    translate(x, -y)
    push()
    rotate(angle)
    drawLine(x, y)
    pop()
    rotate(-angle)
    drawLine(x, y)
  }
}
