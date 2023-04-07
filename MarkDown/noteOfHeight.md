# 高度塌陷问题及BFC小记
***
## 高度塌陷产生的原因：
多在浮动布局中，父元素的高度默认被子元素撑开，当子元素浮动后，会脱离文档流，父元素高度丢失，导致排版混乱
## 高度塌陷的解决办法：
### 1、给父元素一个固定高度
### 2、使用块级格式化环境BFC
***
## 浅谈BFC
### 1、什么是BFC
即Block Formatting Context块级格式化上下文
可以将其理解问一个封闭的区域，内部子元素的布局对外部的布局有任何影响
需要注意的是：每一个BFC区域只包含它的直接子元素，不同的BFC区域之间也不会相互影响
### 2、怎么设置BFC
- 设置浮动（float: none;除外）
- 设置定位（position: absolute; position: fixed）
- 设置行内块显示模式（display: inline-block）
- 设置overflow:hidden,auto,scroll任意一个
- 使用表格布局 table-cell
- 使用弹性布局flex
