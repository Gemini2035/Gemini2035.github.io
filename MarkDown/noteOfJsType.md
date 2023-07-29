# 几种判定类型的方法，包含类中属性
***
## 判定变量类型
1. typeof
返回值类型为string
返回规则: 除了基本类型( null除外 )和function意外其他均返回object、布尔值直接返回true或false的字符串形式
特点: 由结果可知typeof可以测试出除null外的基本类型及function，而对于null及数组、对象，typeof均检测出为object，不能进一步判断它们的类型。
2. instance of
返回值类型为boolean，后面一定为对象类型且区分大小写
特点: instanceof不能区别undefined和null，而且对于基本类型如果不是用new声明的则也测试不出来，对于是使用new声明的类型，它还可以检测出多层继承关系。
3. 使用constructor
返回布尔类型，undefined和null没有constructor属性
特点: constructor不能判断undefined和null，并且使用它是不安全的，因为contructor的指向是可以改变的
4. 使用Object.prototype.toString.call()
返回字符串
特点: 在任何值上调用 Object 原生的 toString() 方法，都会返回一个 [object NativeConstructorName] 格式的字符串。每个类在内部都有一个 [[Class]] 属性，这个属性中就指定了上述字符串中的构造函数名。
但是它不能检测非原生构造函数的构造函数名。

## 判定类中有无某一属性
1. 使用in关键字
该方法可以判断对象的自由属性和继承来的属性是否存在
2. 使用对象的hasOwnProperty()方法
改方法用于判断自由属性是否存在，注意，不会检查原型链的属性
3. 用undefined判断
用于判断自由属性和继承属性的判断
**注意:** 如果属性的值为undefined的话会miss target
