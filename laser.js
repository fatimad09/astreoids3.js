class Laser {
  constructor(shipX, shipY, shipDX, shipDY) {
    this.x = shipX
    this.y = shipY

    this.dx = shipDX
    this.dy = shipDY
    
    this.hit = false
  }
  step() {
    this.x += this.dx
    this.y += this.dy
    this.dx *= 1.05
    this.dy *= 1.05
  }
  draw() {
    ctx.fillStyle = 'white'
    ctx.beginPath()
    ctx.arc(
      this.x,
      this.y,
      3,
      0,
      2 * Math.PI,
      false
    )
    ctx.fill()
  }
}
