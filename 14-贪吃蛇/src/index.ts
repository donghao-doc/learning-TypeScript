import './index.less'

class Food {
    element: HTMLElement
    constructor() {
        this.element = document.querySelector('#food')!
    }
    // 获取食物的坐标
    get position() {
        return {
            x: this.element.offsetLeft,
            y: this.element.offsetTop
        }
    }
    // 改变食物的坐标（坐标随机）
    changePosition() {
        const width = (this.element.parentElement!.offsetWidth - 14) / 10
        const height = (this.element.parentElement!.offsetHeight - 14) / 10
        const left = Math.round(Math.random() * width) * 10
        const top = Math.round(Math.random() * height) * 10
        this.element.style.left = `${left}px`
        this.element.style.top = `${top}px`
    }
}

// const food = new Food()
// console.log(food.position)

// setTimeout(() => {
//     food.changePosition()
// }, 1000)