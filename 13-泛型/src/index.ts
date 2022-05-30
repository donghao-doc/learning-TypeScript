/**
 * 在定义函数或类时，如果遇到类型不明确的情况，就可以使用泛型
 */
function fn<T>(a: T): T {
    return a
}

// 可以直接调用具有泛型的函数
const result1 = fn(123)     // 不指定泛型，TS 可以自动对类型进行推断
const result2 = fn('123')
const result3 = fn<Boolean>(true)   // 如果 TS 无法推断，可以指定泛型

// 泛型可以同时指定多个
function fn2<T, K>(a: T, b: K): T {
    console.log(b)
    return a
}
fn2(123, 'hello')
fn2<number, string>(123, 'hello')

interface Inter { 
    length: number 
}
// T extends Inter：泛型 T 必须是 Inter 的实现类（子类）
function fn3<T extends Inter>(a: T): number {
    return a.length
}
fn3('123')
fn3(123)
fn3({ name: '董董' })
fn3({ name: '董董', length: 2 })

class MyClass<T> {
    name: T
    constructor(name: T) {
        this.name = name
    }
}
const mc1 = new MyClass('董董')
const mc2 = new MyClass<string>('董董')

