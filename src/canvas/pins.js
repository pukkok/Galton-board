import { rows, pinVerticalGap, topY } from './constants.js'
import { canvas } from './setupCanvas.js'

// ? pinHorizontalGap는 canvas(크기) 및 rows 정보 필요
const pinHorizontalGap = canvas.width / (rows + 1)

// TODO : 갈림길(pin)을 생성한다.
let pins = []
for (let r = 0; r < rows; r++) {
  // ? 행만큼의 핀의 개수를 생성
  let rowPins = []
  for (let i = 0; i <= r; i++) {
    const x = (canvas.width / 2) - (r * pinHorizontalGap / 2) + i * pinHorizontalGap
    const y = topY + r * pinVerticalGap
    rowPins.push({ x, y })
  }
  pins.push(rowPins)
}

export { pins, pinHorizontalGap }
