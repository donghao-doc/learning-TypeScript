class ScorePanel {
    score = 0
    level = 1
    maxLevel: number        // 最高等级
    scoreLevel: number      // 多少分升一级
    scoreEle: HTMLElement
    levelEle: HTMLElement
    constructor(maxLevel: number = 10, scoreLevel: number = 10) {
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.scoreLevel = scoreLevel
    }
    // 加分操作
    addScore() {
        this.score += 1
        this.scoreEle.innerText = this.score + ''
        if (this.score % this.scoreLevel === 0) this.levelUp()
    }
    // 升级操作
    levelUp() {
        if (this.level < this.maxLevel) {
            this.level += 1
            this.levelEle.innerText = this.level + ''
        }
    }
}

export default ScorePanel