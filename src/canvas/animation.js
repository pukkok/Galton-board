import { ctx } from './setupCanvas.js'
import { drawPins, drawSlots } from './draw.js'
import { balls, incrementFrameCount } from './state.js'

let frameCount = 0 // 이 값 관리는 state.js에서 관리해도 되고 여기서 관리 후 export 해도 됨.

function animate() {
  frameCount++
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  drawPins()
  drawSlots()
  
  for (let ball of balls) {
    ball.update(frameCount)
    ball.draw(ctx)
  }

  requestAnimationFrame(animate)
}

export function startAnimation() {
  requestAnimationFrame(animate)
}
