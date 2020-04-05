




/* 
  new 运算符的行为：
  创建一个空的简单JavaScript对象（即{}）；
  链接该对象到另一个对象（即设置该对象的原型） ；
  将步骤1新创建的对象作为this的上下文 ；
  如果该函数没有返回对象，则返回this。
*/
function myNew(fn, ...args) {
  const obj = {};
  obj.__proto__ = fn.prototype;
  const res = fn.call(obj, ...args);
  return typeof res === 'object' ? res : obj;
}

function Cat(name) {
  this.name = name;
}
Cat.prototype.sayName = function() {
  console.log("name is:", this.name);
};

var cat = new Cat('new-cat');
var mycat = myNew(Cat, 'myNew-cat');
console.log(cat, mycat);
cat.sayName();
mycat.sayName();


/* 
  obj instanceof fn，用来检测obj对象的原型链上是否存在fn的prototype原型对象。
*/
function myInstanceof(obj, fn) {
  let proto = obj.__proto__;
  while(proto) {
    if (proto === fn.prototype) {
      return true;
    }
    proto = proto.__proto__;
  }
  return false;
}

console.log(mycat instanceof Cat);
console.log(myInstanceof(mycat, Cat));
console.log(myInstanceof(mycat, Object));
