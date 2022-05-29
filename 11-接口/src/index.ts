// 描述一个对象的类型（类型声明）
type myType = {
    name: string, age: number
}
const obj: myType = {
    name: '董董', age: 18
}

// 重复声明一个类型会报错
type myType = {}

/**
 * 接口用来定义一个类结构，定义一个类中应该包含哪些属性和方法
 * 同时，接口也可以当做一个类型声明去使用
 */
interface myInterface {
    name: string, age: number
}
const obj2: myInterface = {
    // 因为下面重复声明了 myInterface 接口，所以不写 gender 会报错
    name: '董董', age: 18, gender: '男'
}

// 重复声明一个接口不会报错，重复声明的接口会合并起来
interface myInterface {
    gender: string
}

/**
 * 接口可以用于限制一个类的结构
 * 接口中的属性都不能有实际的值，接口只定义对象的结构，而不考虑实际的值
 * 在接口中，所有的方法都是抽象方法
 */
interface myInter {
    name: string
    sayHello(): void
}

/**
 * 定义类时，可以使类去实现一个接口
 * 实现接口就是使类去满足接口的要求
 */
class MyClass implements myInter {
    name: string
    constructor(name: string) {
        this.name = name
    }
    sayHello(): void {
        
    }
}

// 接口相当于是类的一个规范，只有当类满足了这个规范，这个类才可以在特定的场景中去使用