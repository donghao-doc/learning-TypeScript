class Person {
    /**
     * TS 可以在属性前添加属性的修饰符
     * public 修饰的属性可以在任意位置访问（修改），默认值就是 public
     * private 表示私有属性，私有属性只能在类的内部修改
     *      - 通过在类中添加方法使得私有属性可以被外部访问
     * protected 受保护的属性，只能在当前类和当前类的子类中访问（修改）
     */
    private _name: string
    private _age: number
    constructor(name: string, age: number) {
        this._name = name
        this._age = age
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
        return this._name
    }
    set name(value) {
        this._name = value
    }
    get age() {
        return this._age
    }
    set age(value) {
        if (value < 0) {
            throw new Error('年龄的值不可设置为小于0')
        }
        this._age = value
    }
}

const person = new Person('董董', 18)
console.log(person)

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
console.log(person.name)
person.name = 'dongdong'
console.log(person.name)
console.log(person.age)
person.age = 20
console.log(person.age)
person.age = -20
console.log(person.age)

class A {
    /**
     * TS 可以在属性前添加属性的修饰符
     * protected 受保护的属性，只能在当前类和当前类的子类中访问（修改）
     */
    protected num: number
    constructor(num: number) {
        this.num = num
    }
}

class B extends A {
    test() {
        console.log(this.num)
    }
}

class C1 {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
// 下面这种写法等价于上面的写法
class C2 {
    constructor(public name: string, public age: number) {
    }
}
