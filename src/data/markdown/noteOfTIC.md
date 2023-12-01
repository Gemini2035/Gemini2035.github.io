# **TypeScript中的type、interface、class关键字对比**
***
## type
type 是 TypeScript 中用于定义类型别名、联合类型、交叉类型等复杂类型的声明方式。它在编译后的 JavaScript 代码中被移除，因为它们仅在编译阶段用于类型检查。换句话说，type 不需要运行时信息。

## interface
interface 主要用于定义对象的类型和形状。它支持继承和实现，因此非常适合创建复杂的对象类型。和 type 一样，interface 定义的类型信息在编译后的代码中被移除。
interface 可以通过关键字 extends 实现接口继承，通过关键字 implements 实现接口实现。这让我们可以创建具有多层次的类型结构。
## class
class 是一种定义类型和实现的方式。它既包含类型信息，也包含实际的属性和方法实现。与 type 和 interface 不同，class 定义的类型信息会保留在编译后的代码中，因为它们在运行时是必需的。
class 可以通过关键字 extends 实现类继承，还可以通过关键字 implements 实现接口实现。这使得 class 成为创建具有多层次结构和行为的对象的理想选择。

## type和interface
- type声明的方式可以定义组合类型、交叉类型和原始类型、包括类型别名
- interface能够声明合并

## class和interface
- class 类声明并实现方法，class可以作为interface使用
- interface 接口声明，但是不能实现方法