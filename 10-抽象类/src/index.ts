/**
 * 以 abstract 开头的类是抽象类
 * 抽象类和其他类区别不大，只是不能用来创建对象
 * 抽象类就是专门用来被继承的类
 */
abstract class Animal {
    name: string
    constructor(name: string) {
        this.name = name
    }
    /**
     * 定义一个抽象方法
     * 抽象方法以 abstract 开头，没有方法体
     * 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
     */
    abstract sayHello(): void
}

class Dog extends Animal {
    age: number
    constructor(name: string, age: number) {
        super(name)
        this.age = age
    }
    sayHello() {
        console.log('汪汪汪')
    }
}

class Cat extends Animal {
    // 子类没有对父类的抽象方法 sayHello 重写，所以会报错
}

const dog = new Dog('旺财', 3)
console.log(dog)
dog.sayHello()

const an = new Animal('蛇')
console.log(an)