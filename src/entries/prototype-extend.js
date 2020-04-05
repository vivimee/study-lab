
/* 
  组合继承-常用的继承写法。
  组合继承的写法，需要调用两次父类的构造函数，并且实例的原型链上（__proto__）会有多余的父类的属性，造成了性能的损耗和资源的浪费。
 */
function Animal(name) {
  this.name = name;
}
Animal.prototype.sayName = function() {
  console.log(this.name);
}

function Dog(name, age) {
  this.age = age;
  Animal.call(this, name);  // 初始化父类，目的是使当前实例具有父类的属性，且不被其他实例共享
}
Dog.prototype = new Animal();   // 原型指向父类的实例，目的是获得父类的方法引用（但这里会在原型链上留下多余的属性）
Dog.prototype.constructor = Dog;  // 纠正constructor指向子类

const oneDog = new Dog('jack', 20);
console.log(oneDog);


/* 
  寄生组合式继承-是实现基于类型继承的最有效方法。
  【es5引入的Object.create方法，专门用来创建原型，返回值是新的原型，第一个参数是要继承的原型对象，第二个参数是追加新的属性到返回的原型上】
 */
function Cat(name, age) {
  this.age = age;
  Animal.call(this, name);
}
Cat.prototype = myCreate(Animal.prototype)
// Cat.prototype = Object.create(Animal.prototype);  // 基于要继承的原型对象，创建一个新的对象，用作当前函数的原型对象。
Cat.prototype.constructor = Cat;

const oneCat = new Cat('Nick', 15);
console.log(oneCat);

/* 
  简易版Object.create实现
 */

function myCreate(prototype) {
  function F() {};
  F.prototype = prototype;
  return new F();
}

console.log(myCreate(null));
console.log(Object.create(null));
