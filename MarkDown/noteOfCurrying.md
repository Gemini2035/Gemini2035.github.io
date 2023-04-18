# JavaScript柯里化
***
## 本质
即函数的递归调用，在参数没有达到一定要求时返回该函数的自调用
## 应用场景
> function myFunction(arg1)(arg2)()...{...};

即不是一次性把所有参数传入
**作用**: 减少重复传递不变部分的参数
### 模版
![](../Assets/MdImgs/currying.png#pic_left=75x75)
将需要柯里化的函数通过fn传入即可