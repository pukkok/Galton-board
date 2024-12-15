import ballSelectOption from "./controls/ball_select_option.js";
import ballCountText from "./controls/ball_count_text.js"
import startBtn from "./controls/start_btn.js"
import pauseBtn from "./controls/pause_btn.js"
import resetBtn from "./controls/reset_btn.js"
import {startEvent, pauseEvent, resetEvent} from "./canvas/index.js";


const box = document.querySelector('.controls')

const ballCountTextBox = ballCountText()
const selectOption = ballSelectOption()
const start = startBtn()
const pause = pauseBtn()
const reset = resetBtn()

ballCountTextBox.appendChild(selectOption)
box.append(ballCountTextBox, start, pause, reset)
start.addEventListener('click', startEvent)
pause.addEventListener('click', pauseEvent)
reset.addEventListener('click', resetEvent)