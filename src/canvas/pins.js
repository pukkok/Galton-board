import { rows, pinRadius, pinVerticalGap, topY } from './constants.js'
import { canvas } from './setupCanvas.js'

// pinHorizontalGap는 canvas 및 rows 정보 필요
const pinHorizontalGap = canvas.width / (rows + 1)

let pins = []
for (let r = 0; r < rows; r++) {
  let rowPins = []
  for (let i = 0; i <= r; i++) {
    const x = (canvas.width / 2) - (r * pinHorizontalGap / 2) + i * pinHorizontalGap
    const y = topY + r * pinVerticalGap
    rowPins.push({ x, y })
  }
  pins.push(rowPins)
}

export { pins, pinHorizontalGap }
