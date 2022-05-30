import './index.less'
import Food from './modules/Food'
import ScorePanel from './modules/ScorePanel'
import Snake from './modules/Snake'

// 测试 Food 类
const food = new Food()
console.log(food.position)
setInterval(() => {
    food.changePosition()
}, 1000)

// 测试 ScorePanel 类
const s = new ScorePanel(12, 5)
setInterval(() => {
    s.addScore()
}, 100)

// 测试 Snake 类
const snake = new Snake()
console.log('snake:', snake)
console.log('snake.head.innerText:', snake.head.innerText)