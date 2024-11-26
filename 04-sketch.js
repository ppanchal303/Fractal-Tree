// Code for generating dragon curve
let axiom = 'F'

let rule = []

rule[0] = {
  in: 'F',
  out: 'F+G'
}

rule[1] = {
  in: 'G',
  out: 'F-G'
}

let angle = Math.PI / 2

let sentence = axiom
let len = 2

let count = 0

function setup () {
  createCanvas(400, 400)
  background(50)
  turtle()
  let button = createButton('Generate')
  button.mousePressed(generate)
}

function turtle () {
  resetMatrix()
  translate(width / 2, height / 2)
  stroke(200, 200, 20, 200)
  if (count < 15) {
    clear()
    background(50)
    for (i = 0; i < sentence.length; i++) {
      let current = sentence.charAt(i)

      if (current == 'F') {
        line(0, 0, 0, -len)
        translate(0, -len)
      } else if (current == 'G') {
        line(0, 0, 0, -len)
        translate(0, -len)
      } else if (current == '+') {
        rotate(angle)
      } else if (current == '-') {
        rotate(-angle)
      }
    }
  }
  count++
}

function generate () {
  let temp = ''

  for (i = 0; i < sentence.length; i++) {
    let found = false
    for (j = 0; j < rule.length; j++) {
      if (sentence[i] == rule[j].in) {
        found = true
        temp += rule[j].out
        break
      }
    }
    if (!found) {
      temp += sentence[i]
    }
  }

  sentence = temp
  temp = ''
  turtle()
}
