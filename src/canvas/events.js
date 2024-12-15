import { balls, slotBins, setDropping, frame } from './state.js'
import Ball from './ball.js'

const addBalls = (count, frameCount) => {
  const delayStep = 10 
  const startingFrame = frameCount
  for (let i = 0; i < count; i++) {
    balls.push(new Ball(startingFrame + i * delayStep))
  }
}

export function startEvent() {
  const ballCountSelect = document.getElementById('ballCountSelect')
  const selectedCount = parseInt(ballCountSelect.value, 10)
  setDropping(true)
  addBalls(selectedCount, frame.count)
}

export function pauseEvent() {
  setDropping(false)
  const filtered = balls.filter(ball => ball.started || ball.done);
  balls.length = 0      // 기존 balls 내용 제거
  balls.push(...filtered) // 새로운 filtered 결과를 다시 채워넣기
}


export function resetEvent() {
  for (let i = 0; i < slotBins.length; i++) {
    slotBins[i] = 0
  }
  balls.length = 0
}
