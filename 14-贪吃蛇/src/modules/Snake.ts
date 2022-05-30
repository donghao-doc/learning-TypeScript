class Snake {
    snake: HTMLElement      // 蛇的容器
    head: HTMLElement       // 蛇头
    bodies: HTMLCollection  // 蛇身
    constructor() {
        this.snake = document.getElementById('snake')!
        this.head = this.snake.firstElementChild as HTMLElement
        this.bodies = this.snake.getElementsByTagName('div')
    }
    // 获取蛇头坐标
    get position() {
        return {
            x: this.head.offsetLeft,
            y: this.head.offsetTop
        }
    }
    // 设置蛇头坐标
    set position({ x, y }) {
        const width = this.snake.parentElement!.offsetWidth - 14
        const height = this.snake.parentElement!.offsetHeight - 14
        if (x < 0 || x > width || y < 0 || y > height) {
            throw new Error('游戏结束')
        }
        if (this.position.x !== x) this.head.style.left = `${x}px`
        if (this.position.y !== y) this.head.style.top = `${y}px`
    }
    // 增加蛇身操作
    addBody() {
        const div = document.createElement('div')
        this.snake.insertAdjacentElement('beforeend', div)
    }
}

export default Snake