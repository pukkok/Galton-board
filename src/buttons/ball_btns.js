import ballCounts from "../../ballCounts.js"

const ballBtns = () => {
  const btns = ballCounts.map(ball => {
    const button = document.createElement('button')
    button.innerHTML = ball + 'balls'
    return button
  })
  
  return btns
}

export default ballBtns