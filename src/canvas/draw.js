import { ctx, canvas } from './setupCanvas.js'
import { pins, pinHorizontalGap } from './pins.js'
import { slotBins, slotsCount, slotWidth } from './state.js'
import { pinRadius } from './constants.js'

export const drawPins = () => {
  ctx.fillStyle = 'black'
  for (let r = 0; r < pins.length; r++) {
    for (let p of pins[r]) {
      ctx.beginPath()
      ctx.arc(p.x, p.y, pinRadius, 0, Math.PI * 2) // * 원 그리기
      ctx.fill()
      ctx.closePath()
    }
  }
}

export const drawSlots = () => {
  ctx.strokeStyle = 'blue'
  for (let i = 0; i <= slotsCount; i++) {
    const x = i * slotWidth
    ctx.beginPath()
    ctx.moveTo(x, canvas.height - 50)
    ctx.lineTo(x, canvas.height)
    ctx.stroke()
  }

  const totalBalls = slotBins.reduce((a,b)=>a+b,0)
  const maxCount = Math.max(...slotBins) || 1
  for (let i = 0; i < slotsCount; i++) {
    const count = slotBins[i]
    const h = (count / maxCount) * 80 
    ctx.fillStyle = 'green'
    const barX = i * slotWidth + slotWidth * 0.25
    const barY = canvas.height - h - 5
    const barWidth = slotWidth * 0.5
    ctx.fillRect(barX, barY, barWidth, h)

    // TODO : 떨어지는 값들을 확인하여 해당 통의 퍼센트를 계산한다.
    if (totalBalls > 0 && count > 0) {
      // ? 통에 떨어진 공의 수 / 전체 떨어진 공의 수 * 100 = % 계산법
      const percentage = (count / totalBalls * 100).toFixed(1) + '%'
      ctx.fillStyle = 'black'
      ctx.font = '14px Arial'
      ctx.textAlign = 'center'
      const textX = i * slotWidth + slotWidth / 2
      const textY = barY - 5
      ctx.fillText(percentage, textX, textY)
    }
  }
}
