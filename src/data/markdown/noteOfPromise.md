# Promise详解
***
## 概述
Promise的出现，解决了
1. 回调地狱问题
回调地狱就是指把函数作为参数层层嵌套请求，这样层层嵌套，人们称之为回调地狱，代码阅读性非常差。
2. 信任问题
回调函数不能保证什么时候去调用回调，以及使用什么方式去调用回调；而Promise一旦被确认成功或失败，就不能再被更改。
Promise成功之后仅调用一次resolve()，不会产生回调多次执行的问题。除非Promise再次调用。所以Promise很好地解决了第三方工具导致的回调多次执行（控制反转）的问题，这个问题也称为信任问题。
## Promise状态
1. pending: 初始状态，表示正在处理
2. fulfilled: 表示操作成功
3. rejected: 表示操作失败
**注意**: 一个Promise在某一时刻只能处于三种状态的其中之一，其中fulfilled和rejected状态又被统称为settled已敲定状态
## Promise静态方法( Api )
促进异步任务的并发
1. Promise.all( ): 在所有传入的 Promise 都被兑现时兑现；在任意一个 Promise 被拒绝时拒绝。
2. Promise.allSettled( ): 在所有的 Promise 都被敲定时兑现。
3. Promise.any( ): 在任意一个 Promise 被兑现时兑现；仅在所有的 Promise 都被拒绝时才会拒绝。
4. Promise.race( )在任意一个 Promise 被敲定时敲定。换句话说，在任意一个 Promise 被兑现时兑现；在任意一个的 Promise 被拒绝时拒绝。

其他

5. Promise.reject(): 返回一个新的 Promise 对象，该对象以给定的原因拒绝。
6. Promise.resolve()
返回一个新的 Promise 对象，该对象以给定的值兑现。如果值是一个 thenable 对象（即具有 then 方法），则返回的 Promise 对象会“跟随”该 thenable 对象，采用其最终的状态；否则，返回的 Promise 对象会以该值兑现。
通常，如果你不知道一个值是否是 Promise，那么最好使用 Promise.resolve(value) 将其转换成 Promise 对象，并将返回值作为 Promise 来处理。