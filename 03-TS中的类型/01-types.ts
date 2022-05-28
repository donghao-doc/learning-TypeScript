let a: 10   // a 的值只能是 数字10
a = 10
a = 20

// 使用 | 来连接多个类型（联合类型）
let b: 'male' | 'female'    // b 的值只能是 'male' 或 'female'
b = 'male'
b = 'female'
b = 'hello'

let c: boolean | string     // c 的值只能是 boolean类型 或 string类型
c = true
c = 'hello',
c = function () {}

let d1: any
d1 = 'hello'
d1 = 100
d1 = true

let d2      // 不指定类型，TS 解析器会自动判断变量为 any 类型（隐式的 any）
d2 = 'hello'
d2 = 100
d2 = true

let e1: unknown
e1 = 'hello'
e1 = 100
e1 = true

let e2: string
e2 = d1     // d1 是 any 类型
e2 = e1     // e1 是 unknown 类型

if (typeof e1 === 'string') e2 = e1
e2 = e1 as string       // 类型断言，可以告诉解析器变量的实际类型
e2 = <string>e1         // 类型断言另一种语法

function fn1(): void {  // 表示返回值为空，但是返回 undefined 和 null 不会报错
    // return
    // return undefined
    return null
}
function fn2(): void {
    return 100
}

function fn3(): never {
    throw new Error('报错了')
}

let obj1: object
obj1 = {}
obj1 = []
obj1 = function () {}

let obj2: { name: string }      // 指定对象只能包含 name 属性，且值是 string
obj2 = {}
obj2 = { age: 18 }
obj2 = { name: 'dongdong' }
obj2 = { name: 'dongdong', age: 18 }

let obj3: { name: string, age?: number }    // age 属性是可选的
obj3 = { name: 'dongdong' }
obj3 = { name: 'dongdong', age: 18 }

// [propName: string]: any 表示属性名的类型是 string，属性值的类型是 any
let obj4: { name: string, [propName: string]: any }
obj4 = { name: 'dongdong', age: 18, gender: '男' }

// 指定函数的结构：两个参数都是 number，返回值也是 number
let fn4: (a: number, b: number) => number
fn4 = function (n1: number, n2: number): number {
    return n1 + n2
}

// string[] 表示 字符串数组（第一种写法）
let arr1: string[]
arr1 = ['111', '222', '333']
arr1 = [111, 222, 333]

// Array<number> 表示 数值数组（第二种写法）
let arr2: Array<number>
arr2 = [111, 222, 333]
arr2 = ['111', '222', '333']

// 定义数组只能有两个元素，且第一个是 string，第二个是 number
let arr3: [string, number]
arr3 = ['hello', 123]

// 将一个属性的所有可能的值枚举出来
// 这样一来，在对象中使用属性时可以不用关心具体的值
enum Gender {
    male = 1,
    female = 0
}
let obj5: { name: string, gender: Gender }
obj5 = {
    name: 'dongdong',
    gender: Gender.male
}

// 定义对象只能有 name 为 string，age 为 number
let obj6: { name: string } & { age: number }
obj6 = { name: 'dongdong', age: 18 }
obj6 = { name: 18, age: 18 }
obj6 = { name: 'dongdong' }
obj6 = { name: 'dongdong', age: 18, gender: '男' }

// 给 1 | 2 | 3 | 4 | 5 类型起个名字为 myType
type myType = 1 | 2 | 3 | 4 | 5
let f1: myType
let f2: myType
f1 = 1
f2 = 5
f1 = 0
f2 = 6

