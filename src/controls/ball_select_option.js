import ballCounts from "../ballCounts.js"

const ballSelectOption = () => {
  const select = document.createElement('select')
  const options = ballCounts.map(count => {
    const option = document.createElement('option')
    option.value = count
    option.innerHTML = count+'개'
    return option
  })
  select.append(...options)
  return select
}

export default ballSelectOption