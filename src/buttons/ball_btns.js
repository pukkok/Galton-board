import ballCounts from "../../ballCounts.js"

const ballBtns = (parent) => {
  const btns = ballCounts.map(ball => {
    const button = document.createElement('button')
    button.innerHTML = ball + 'balls'
    return button
  })
  parent.append(...btns)
}

export default ballBtns