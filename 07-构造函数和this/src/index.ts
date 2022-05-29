class Dog {
    // 没有定义属性会报错
    name: string
    age: number

    // constructor 被称为构造函数，它会在对象创建时调用
    constructor(name: string, age: number) {
        // 实例方法中，this 就表示当前的实例对象
        // 通过 this 可以向当前实例对象中添加属性
        this.name = name
        this.age = age
    }

    bark() {
        // this 指向当前实例对象
        console.log(`${this.name}-${this.age}`)
    }
}

// new Dog() 的时候会调用 Dog 类中的 constructor 构造函数
const dog1 = new Dog('旺财', 3)
console.log(dog1)
const dog2 = new Dog('小黑', 4)
console.log(dog2)
dog1.bark()
dog2.bark()