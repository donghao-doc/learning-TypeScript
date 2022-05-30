import './index.less'
import Food from './modules/Food'
import ScorePanel from './modules/ScorePanel'

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
