let len = 150
let angle
let color

function setup () {
  createCanvas(400, 400)
  // angleMode(DEGREES)
  color = createSlider(0, 255, 255)
  angle = createSlider(0, Math.PI, 0.21, 0.01)
  len = createSlider(20, 250, 150)
}

function draw () {
  background(50)
  stroke(color.value())
  translate(200, 400)
  drawLine(len.value())
}

function drawLine (i) {
  // let x = i
  let y = i
  if (y > 2) {
    y = y * 0.67
    // stroke(255)
    line(0, 0, 0, -y)
    translate(0, -y)
    push()
    rotate(angle.value())
    drawLine(y)
    pop()
    rotate(-angle.value())
    drawLine(y)
  }
}
