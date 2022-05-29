"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log('动物在叫~');
    }
}
class Dog extends Animal {
    constructor(name, age) {
        // 与方法类似，子类中的 constructor 也会覆盖父类的 constructor，会报错
        // 所以子类的 constructor 必须要写 super，调用父类的 constructor
        super(name);
        this.age = age;
    }
    sayHello() {
        // 在类的方法中，super 就表示当前类的父类
        super.sayHello();
    }
}
const dog = new Dog('旺财', 3);
console.log(dog);
dog.sayHello();
