"use strict";
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    // getter setter 被称为属性的存取器
    // getName() {
    //     return this._name
    // }
    // setName(value: string) {
    //     this._name = value
    // }
    // getAge() {
    //     return this._age
    // }
    // setAge(value: number) {
    //     if (value < 0) {
    //         this._age = 0
    //         return
    //     }
    //     this._age = value
    // }
    // TS 中设置 getter setter 的方式
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0) {
            throw new Error('年龄的值不可设置为小于0');
        }
        this._age = value;
    }
}
const person = new Person('董董', 18);
console.log(person);
// person._name = 'dongdong'
// person._age = 20
// console.log(person)
// console.log(person.getName())
// person.setName('dongdong')
// console.log(person.getName())
// console.log(person.getAge())
// person.setAge(-20)
// console.log(person.getAge())
// 获取值和设置值时可以直接获取或设置
console.log(person.name);
person.name = 'dongdong';
console.log(person.name);
console.log(person.age);
person.age = 20;
console.log(person.age);
person.age = -20;
console.log(person.age);
class A {
    constructor(num) {
        this.num = num;
    }
}
class B extends A {
    test() {
        console.log(this.num);
    }
}
class C1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// 下面这种写法等价于上面的写法
class C2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
