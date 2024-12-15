import ballSelectOption from "./controls/ball_select_option.js";
import startBtn from "./controls/start_btn.js"
import pauseBtn from "./controls/pause_btn.js"
import resetBtn from "./controls/reset_btn.js"

const box = document.querySelector('.controls')

const selectOption = ballSelectOption()
const start = startBtn()
const pause = pauseBtn()
const reset = resetBtn()
box.append(selectOption, start, pause, reset)