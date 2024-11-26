function Branch (begin, end) {
  this.begin = begin
  this.end = end
  this.drawn = false

  this.draw = function () {
    stroke(5, 71, 42, 100)
    line(this.begin.x, this.begin.y, this.end.x, this.end.y)
  }

  this.rightBranch = function () {
    let dir = p5.Vector.sub(this.end, this.begin)
    dir.rotate(Math.PI / 6)
    dir.mult(0.67)
    let newEnd = p5.Vector.add(this.end, dir)
    let right = new Branch(this.end, newEnd)
    return right
  }

  this.leftBranch = function () {
    let dir = p5.Vector.sub(this.end, this.begin)
    dir.rotate(-Math.PI / 6)
    dir.mult(0.67)
    let newEnd = p5.Vector.add(this.end, dir)
    let left = new Branch(this.end, newEnd)
    return left
  }
}
