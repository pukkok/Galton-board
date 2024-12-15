import { rows } from './constants.js'
import { canvas } from './setupCanvas.js'

// rows + 1 등 canvas 크기에 의존하는 값 계산
const slotsCount = rows + 1
const slotWidth = canvas.width / slotsCount

let slotBins = new Array(slotsCount).fill(0)
let balls = []
let frameCount = 0
let isDropping = false

export { slotBins, balls, frameCount, isDropping, slotsCount, slotWidth }
