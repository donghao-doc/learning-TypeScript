class Animal {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayHello(word: string) {
        console.log(word)
    }
}

// 此时，Animal 被称为父类，Dog 被称为子类
class Dog extends Animal {
    run() {
        console.log(`${this.name}在跑`)
    }    
}

// 此时，Animal 被称为父类，Cat 被称为子类
class Cat extends Animal {
    // 子类与父类有相同的方法，那么子类会覆盖父类的方法
    sayHello() {
        console.log('喵喵喵！')
    }
}

const dog = new Dog('旺财', 3)
console.log(dog)
dog.sayHello('汪汪汪')
dog.run()

const cat = new Cat('喵喵', 3)
console.log(cat)
cat.sayHello()