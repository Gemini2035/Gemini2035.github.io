# **BFC详解**
***
## 什么是BFC
区块格式化上下文（Block Formatting Context，BFC）是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。
## BFC渲染规则
- 内部的盒子会在垂直方向上一个接一个的放置
- 对于同一个BFC的俩个相邻的盒子的margin会发生重叠，与方向无关。
- 每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此
- BFC的区域不会与float的元素区域重叠
- 计算BFC的高度时，浮动子元素也参与计算
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然

## 如何创建BFC
1. 使用float 使其浮动的元素
2. 绝对定位的元素 (包含 position: fixed 或position: sticky)
3. 使用以下属性的元素 display: inline-block 
display: table-cell, 包括使用 display: table-* 属性的所有表格单元格 
表格标题或使用 display: table-caption 的元素
4. 块级元素的 overflow 属性不为 visible
5. 元素属性为 display: flow-root 或 display: flow-root list-item
6. 元素属性为 contain: layout, content, 或 strict
7. flex items
8. 网格布局元素
9. multicol containers
10. 元素属性 column-span 设置为 all
## BFC用途
1. 解决margin重叠问题
2. 清除内部浮动
3. 自适应多栏布局