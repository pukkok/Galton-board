import ballCounts from "../../ballCounts.js"
import states from "../../states.js"
const ballBtns = () => {
  const btns = ballCounts.map(ball => {
    const button = document.createElement('button')
    button.innerHTML = ball + ' balls'
    button.addEventListener('click', () => {
      states.ballCount = ball
    })
    return button
  })
  
  return btns
}

export default ballBtns