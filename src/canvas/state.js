import { rows } from './constants.js'
import { canvas } from './setupCanvas.js'

// rows + 1 등 canvas 크기에 의존하는 값 계산
const slotsCount = rows + 1
const slotWidth = canvas.width / slotsCount

let slotBins = new Array(slotsCount).fill(0)
let balls = []
let isDropping = false
const frame = {
  count : 0
}

function setDropping(value) {
  isDropping = value
}

export { slotBins, balls, isDropping, setDropping, slotsCount, slotWidth, frame }
