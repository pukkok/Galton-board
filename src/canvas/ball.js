import { canvas } from './setupCanvas.js'
import { rows, pinRadius, pinVerticalGap, topY } from './constants.js'
import { pinHorizontalGap } from './pins.js'
import { slotBins, slotsCount, slotWidth, isDropping } from './state.js'

class Ball {
  constructor(startDelay) {
    this.x = canvas.width / 2 // * 공이 처음 생성되는 x
    this.y = topY - 20 // * 공이 처음 생성되는 y
    this.radius = 5
    this.done = false // * 공이 다 떨어졌는지 체크
    this.currentRow = 0 // * 현재 행 체크
    this.speedY = 4 + Math.random() * 2 // * 떨어지는 속도(랜덤)
    this.startDelay = startDelay // * 시작전 딜레이
    this.started = false // * 떨어지는 중인가?
  }
  
  update(frameCount) {
    if (this.done) return // * 끝났다면 종료
    if (frameCount < this.startDelay) return
    if (!isDropping && !this.started) return
    
    this.started = true

    if (this.currentRow < rows) {
      this.y += this.speedY
      let targetY = topY + this.currentRow * pinVerticalGap
      if (this.y >= targetY - pinRadius * 2) {
        let direction = Math.random() < 0.5 ? -1 : 1
        this.x += direction * (pinHorizontalGap / 2)
        this.currentRow++
      }
    } else {
      this.y += this.speedY
      if (this.y > canvas.height - 50) {
        let slotIndex = Math.floor(this.x / slotWidth)
        if (slotIndex < 0) slotIndex = 0
        if (slotIndex >= slotsCount) slotIndex = slotsCount - 1
        slotBins[slotIndex]++
        this.done = true
      }
    }
  }
  
  draw(ctx) {
    if (this.done || !this.started) return
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.closePath()
  }
}

export default Ball
