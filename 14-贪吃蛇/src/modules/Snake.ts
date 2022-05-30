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
        this.head.style.left = `${x}px`
        this.head.style.top = `${y}px`
    }
    // 增加蛇身操作
    addBody() {
        const div = document.createElement('div')
        this.snake.insertAdjacentElement('beforeend', div)
    }
}

export default Snake