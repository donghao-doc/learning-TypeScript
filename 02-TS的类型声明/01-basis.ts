let a: number = 100
a = 200
a = '200'

console.log(a)

let b = true
b = false
b = '100'

function sum(a: number, b: number) {
    return a + b
}
sum(100, 200)
sum(100, '200')     // 类型错误
sum(100, 200, 300)  // 参数多了
sum(100)            // 参数少了

function add(a: number, b: number): number {
    return a + b + 'hello'      // 返回值类型错误
}



