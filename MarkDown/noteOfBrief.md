# **一些属性简写**
***
## flex

flex CSS 简写属性设置了弹性项目如何增大或缩小以适应其弹性容器中可用的空间。
此属性是以下 CSS 属性的简写：

- flex-grow: 设置flex项主尺寸的flex增长系数。值越大，增长效果越明显

- flex-shrink: 指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。值越大效果越明显

- flex-basis: 指定了 flex 元素在主轴方向上的初始大小。如果不使用 box-sizing 改变盒模型的话，那么这个属性就决定了 flex 元素的内容盒（content-box）的尺寸。

**注意:** 默认情况下，元素不会缩短至小于内容框尺寸，若想改变这一状况，请设置元素的min-width 与 min-height属性。

## background

**background: #000 url(images/bg.gif) no-repeat top right:**

- background-color: #000;

- background-image: url(images/bg.gif);

- background-repeat: no-repeat;

- background-position: top right;

简写的形式实际上等价于以上普通属性再加上 background-attachment: scroll 以及 CSS3 中的一些附加属性。
## font
**font: italic bold .8em/1.2 Arial, sans-serif:**

- font-style: italic;

- font-weight: bold;

- font-size: .8em;

- line-height: 1.2;

- font-family: Arial, sans-serif;

这个简写声明实际上等价于以上普通属性再加上 font-variant: normal、font-size-adjust: none 和 font-stretch: normal。
## border
**border: 1px solid #000:**

- border-width: 1px;

- border-style: solid;

- border-color: #000;


