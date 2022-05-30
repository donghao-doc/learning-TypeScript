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
        const { x, y } = this.snake.position
        if (!this.isLive) return
        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                this.snake.position = { x, y: y-10 }
                break
            case 'ArrowDown':
            case 'Down':
                this.snake.position = { x, y: y+10 }
                break
            case 'ArrowLeft':
            case 'Left':
                this.snake.position = { x: x-10, y }
                break
            case 'ArrowRight':
            case 'Right':
                this.snake.position = { x: x+10, y }
                break
        }
        if (this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(this.run.bind(this), 300 - (this.scorePanel.level-1) * 30)
    }
}

export default GameControl