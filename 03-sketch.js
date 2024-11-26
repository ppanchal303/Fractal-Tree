let axiom = 'F'

let rule = []

rule[0] = {
  in: 'F',
  out: 'FF+[+F-F-F]-[-F+F+F]'
}

rule[1] = {
  in: 'G',
  out: 'FF+[+F-F-F]-[-F+F+F]'
}

let angle = Math.PI / 8

let sentence = axiom
let len = 100

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
  translate(width / 2, height)
  stroke(240, 50, 150, 100)
  if (count < 5) {
    clear()
    background(50)
    for (i = 0; i < sentence.length; i++) {
      let current = sentence.charAt(i)

      if (current == 'F') {
        line(0, 0, 0, -len)
        translate(0, -len)
      } else if (current == '+') {
        rotate(angle)
      } else if (current == '-') {
        rotate(-angle)
      } else if (current == '[') {
        push()
      } else if (current == ']') {
        pop()
      }
    }
  }
  count++
}

function generate () {
  len *= 0.5
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
