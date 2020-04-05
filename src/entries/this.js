
/* 
  1. 全局下this指向window对象(或global对象)，严格模式下指向 undefined;
  2. 指向调用者
  3. 改变this指向：call、apply、bind、new、箭头函数
*/

/* 
  1. window、undefined
*/
function logThis() {
  console.log(this);
}
function strictLogThis() {
  'use strict';
  console.log(this);
}
logThis();
strictLogThis();

/* 
  2. 指向调用者
*/

var jack = {
  name: 'jack',
  logThis
}
jack.logThis();

logThis.call(jack);

var bindLogThis = logThis.bind(jack);
bindLogThis();

new logThis();
// new logThis.call(jack);    // TypeError: logThis.call is not a constructor; 回去寻找名称为 'logThis.call' 的函数，找不到。

var nick = {
  name: 'nick',
  logThis,
  indirectLogThis() {
    logThis();  // 这里调用logThis的并不是 nick，所以指向全局对象window，严格模式下指向 undefined。
  }
}
nick.logThis();
nick.indirectLogThis();   // 非严格模式下返回 window，严格模式下返回 undefined
