import ballBtns from "./buttons/ball_btns.js"
import startBtn from "./buttons/start_btn.js"

const controls = document.querySelector('.controls')

const buttons = () => {
  const btns = ballBtns()
  const starter = startBtn()
  controls.append(...btns, starter)
}

export default buttons 