import { hi } from './m1'

function add(a: number, b: number): number {
    return a + b
}

console.log(add(1, 2))
console.log(add(10, 20))

console.log(hi)

const obj = { name: '', age: 0 }
obj.name = '孙悟空'
obj.age = 20
console.log(obj)

console.log(Promise)