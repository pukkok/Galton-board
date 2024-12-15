const resetBtn = () => {
  const btn = document.createElement('button')
  btn.innerHTML = "초기화"
  btn.className = "reset-btn"
  return btn
}

export default resetBtn