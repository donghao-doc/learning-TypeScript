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
        // 禁止水平掉头
        if (this.bodies[1] && x === (this.bodies[1] as HTMLElement).offsetLeft) {
            if (x > this.position.x) {
                x = this.position.x - 10
            } else if (x < this.position.x) {
                x = this.position.x + 10
            }
        }
        // 禁止垂直掉头
        if (this.bodies[1] && y === (this.bodies[1] as HTMLElement).offsetTop) {
            if (y > this.position.y) {
                y = this.position.y - 10
            } else if (y < this.position.y) {
                y = this.position.y + 10
            }
        }
        this.moveBody()
        if (this.position.x !== x) this.head.style.left = `${x}px`
        if (this.position.y !== y) this.head.style.top = `${y}px`
        this.checkHeadBody()
    }
    // 增加蛇身操作
    addBody() {
        console.log('addBody')
        const div = document.createElement('div')
        this.snake.insertAdjacentElement('beforeend', div)
    }
    // 移动蛇身操作
    moveBody() {
        console.log('this.bodies.length:', this.bodies.length)
        for (let i = this.bodies.length-1; i > 0; i --) {
            const x = (this.bodies[i-1] as HTMLElement).offsetLeft
            const y = (this.bodies[i-1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = `${x}px`;
            (this.bodies[i] as HTMLElement).style.top = `${y}px`  
        }
    }
    // 检查蛇头与蛇身是否相撞
    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; i ++) {
            let body = this.bodies[i] as HTMLElement
            if (body.offsetLeft === this.position.x && body.offsetTop === this.position.y) {
                throw new Error('游戏结束')
            }
        }
    }
}

export default Snake