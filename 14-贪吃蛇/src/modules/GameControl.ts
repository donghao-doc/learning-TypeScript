import Food from "./Food"
import ScorePanel from "./ScorePanel"
import Snake from "./Snake"

class GameControl {
    food: Food
    snake: Snake
    scorePanel: ScorePanel
    direction: string = ''
    timer: any = 0
    isLive = true
    constructor() {
        this.food = new Food()
        this.snake = new Snake()
        this.scorePanel = new ScorePanel()
    }
    // 游戏初始化
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
    }
    // 键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        console.log(event.key)
        this.direction = event.key
        this.run()
    }
    // 蛇移动的操作
    run() {
        if (!this.isLive) return
        const { x, y } = this.snake.position
        let position = { x: 0, y: 0 }
        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                position = { x, y: y-10 }
                break
            case 'ArrowDown':
            case 'Down':
                position = { x, y: y+10 }
                break
            case 'ArrowLeft':
            case 'Left':
                position = { x: x-10, y }
                break
            case 'ArrowRight':
            case 'Right':
                position = { x: x+10, y }
                break
        }
        this.checkEat(position.x, position.y)
        try {
            this.snake.position = position
        } catch (err: any) {
            this.isLive = false
            window.alert(err.message)
        }
        if (this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(this.run.bind(this), 300 - (this.scorePanel.level-1) * 30)
    }
    // 检测蛇是否吃到食物
    checkEat(x: number, y: number) {
        if (x === this.food.position.x && y === this.food.position.y) {
            console.log('吃到了')
            this.food.changePosition()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }
}

export default GameControl