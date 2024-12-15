import { ctx } from './setupCanvas.js'
import { drawPins, drawSlots } from './draw.js'
import { balls, frame } from './state.js'

const animate = () => {
  frame.count++
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  drawPins()
  drawSlots()
  
  for (let ball of balls) {
    ball.update(frame.count)
    ball.draw(ctx)
  }

  requestAnimationFrame(animate)
}

export function startAnimation() {
  requestAnimationFrame(animate)
}
