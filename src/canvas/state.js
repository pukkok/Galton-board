import { rows } from './constants.js'
import { canvas } from './setupCanvas.js'

// * rows + 1 등 canvas 크기에 의존하는 값 계산
const slotsCount = rows + 1

// TODO : 캔버스의 최대 크기에서 슬롯의 개수 만큼 나눈다. 
// ? (캔버스 크기 / 그래프로 담겨질 통의 개수)
const slotWidth = canvas.width / slotsCount 

// ? 처음엔 0으로 아무것도 채워지지 않은 통이다.
let slotBins = new Array(slotsCount).fill(0)

// * 떨어뜨릴 공들이 담기는 배열
let balls = [] 

// * 떨어지는 중 체크(정지 기능을 위해 사용)
let isDropping = false

// ? 다른곳에서도 상태 관리를 위해 사용하기 때문에
// ? 객체를 만들어서 사용한다.
const frame = {
  count : 0
}

// * 정지 기능 스테이트 변경 함수
function setDropping(value) {
  isDropping = value
}

export { slotBins, balls, isDropping, setDropping, slotsCount, slotWidth, frame }
