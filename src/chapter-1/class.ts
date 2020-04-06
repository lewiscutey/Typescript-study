class Dog {
  constructor(name: string) {
    this.name = name
  }
  run() {}
  public name: string = 'dog'
  private pri() {}
  protected pro() {}
  readonly legs: number = 4
  static food: string = 'bones'
}
console.log(Dog.prototype)
let dog = new Dog('wang')
console.log(dog)
// dog.pri()
// dog.pro()
dog.legs
console.log(Dog.food)
// console.log(dog.food)

class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name)
    this.color = color
    // this.pri()
    this.pro()
  }
  color: string
}
console.log(Husky.food)

abstract class Animal {
  eat() {
    console.log('eat')
  }
}
// let animal = new Animal()
class Cat extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() {}
  sleep() {
    console.log('sleep')
  }
}
let cat = new Cat('mao')
cat.eat()
cat.sleep()

class WorkFlow {
  setp1() {
    return this
  }
  step2() {
    return this
  }
}
new WorkFlow().setp1().step2()

class Myflow extends WorkFlow {
  next() {
    return this
  }
}
new Myflow().next().setp1().next().step2()