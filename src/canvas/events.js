import { balls, slotBins, setDropping } from './state.js'
import { Ball } from './ball.js'

function addBalls(count, frameCount) {
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
  // frameCount 상태값도 필요하면 state에서 가져와야 함
  // 여기서는 frameCount를 state에서 export하고, 현재값을 읽어와야 함
  addBalls(selectedCount, /* frameCount from state */)
}

export function pauseEvent() {
  setDropping(false)
  balls = balls.filter(ball => ball.started || ball.done)
}

export function resetEvent() {
  for (let i = 0; i < slotBins.length; i++) {
    slotBins[i] = 0
  }
  balls.length = 0
}
