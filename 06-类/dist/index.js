"use strict";
class Person {
    constructor() {
        /**
         * 直接定义的属性是实例属性，需要通过对象的实例去访问
         *      const person = new Person()
         *      person.name
         *
         * 使用 static 开头的属性是静态属性（类属性），可以直接通过类去访问
         *      Person.age
         */
        // 实例属性
        this.name = '孙悟空';
        // 只读属性
        this.gender = '男';
    }
    /**
     * 直接定义的方法是实例方法，需要通过对象的实例去访问
     *      const person = new Person()
     *      person.sayHello()
     *
     * 使用 static 开头的方法是静态方法（类方法），可以直接通过类去访问
     *      Person.sayHi()
     */
    // 定义实例方法
    sayHello() {
        console.log('hello');
    }
    // 定义静态方法
    static sayHi() {
        console.log('hi');
    }
}
// 静态属性
Person.age = 20;
// 静态只读属性
Person.number = 27;
// 获取实例属性
const person = new Person();
console.log('person:', person);
// 获取静态属性
console.log(Person.age);
// 修改只读属性
console.log(person.gender);
person.gender = '女'; // 报错
console.log(person.gender);
// 修改静态只读属性
Person.number = 100; // 报错
// 调用实例方法
person.sayHello();
// 调用静态方法
Person.sayHi();
