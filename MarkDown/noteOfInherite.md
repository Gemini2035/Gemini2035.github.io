# 继承与原型链
***
## 什么是原型链
每个对象（object）都有一个私有属性指向另一个名为原型（prototype）的对象。原型对象也有一个自己的原型，层层向上直到一个对象的原型为 null。根据定义，null 没有原型，并作为这个原型链（prototype chain）中的最后一个环节。可以改变原型链中的任何成员，甚至可以在运行时换出原型。

## 基于原型链的继承
### 继承属性
使用__proto__: ... 扩展原型链
### 继承方法
当继承的函数被调用时，this 值指向的是当前继承的对象，而不是拥有该函数属性的原型对象。
## 构造函数
构造函数是使用 new 调用的函数。

类是构造函数的语法糖，这意味着你仍然可以修改 Class.prototype 来改变所有实例的行为。

Constructor.prototype 仅在构造实例时有用。它与 Constructor.[[Prototype]] 无关，后者是构造函数的自有原型，即 Function.prototype。也就是说，Object.getPrototypeOf(Constructor) === Function.prototype。

JavaScript 中的一些字面量语法会创建隐式设置 [[Prototype]] 的实例。如数组、正则表达式
有趣的是，由于历史原因，一些内置构造函数的 prototype 属性本身就是其自身的实例。例如，Number.prototype 是数字 0，Array.prototype 是一个空数组，RegExp.prototype 是 /(?:)/。

然而，对于用户定义的构造函数，以及 Map 等现代的构造函数，则并非如此。

要构建更长的原型链，我们可用通过 Object.setPrototypeOf() 函数设置 Constructor.prototype 的 [[Prototype]]。

在类的术语中，这等同于使用 extends 语法。