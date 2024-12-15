import { balls, slotBins, setDropping, frame } from './state.js'
import Ball from './ball.js'

/**
 * 
 * @param {Number} count // * 공의 개수 
 * @param {Number} frameCount // * 현재 frame
 * 
 * @description
 * 공의 개수를 정한다.
 * frame을 통해 격차를 둔다.
 */
const addBalls = (count, frameCount) => {
  const delayStep = 10 
  const startingFrame = frameCount
  // TODO : 공이 한번에 떨어지는 것이 아닌 격차를 두고 떨어진다.
  for (let i = 0; i < count; i++) {
    balls.push(new Ball(startingFrame + i * delayStep))
  }
}

// TODO : 공이 떨어지는게 시작된다.
export const startEvent = () => {
  const ballCountSelect = document.getElementById('ballCountSelect')
  const selectedCount = parseInt(ballCountSelect.value, 10)
  setDropping(true)
  addBalls(selectedCount, frame.count)
}

// TODO : 공이 그만 떨어지게 한다.
export const pauseEvent = () => {
  setDropping(false)
  const filtered = balls.filter(ball => ball.started || ball.done);
  balls.length = 0 // ? 기존 balls 내용 제거
  balls.push(...filtered) // ? 새로운 filtered 결과를 다시 채워넣기
}

// TODO : 그래프를 초기화 한다. 떨어지는 공도 초기화 한다.
export const resetEvent = () => {
  for (let i = 0; i < slotBins.length; i++) {
    slotBins[i] = 0
  }
  balls.length = 0
}
