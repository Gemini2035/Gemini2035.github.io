# **Note of Css**
***
## Css词典
  - background-color: xxx;  
  设置元素背景颜色  
  使用rgb指定颜色，如:  
  > background-color: rgb(10, 10, 10);  
  background-color: rgb(1%, 1%, 1%);

  使用16进制指定颜色，如:  
  > background-color: #cc6600;


  - border: xx xxx xxxx;  
  设置元素边框样式(如果这个元素有边框的话)，  
  包含边框线的粗细，实线或虚线，边框线的颜色  
  <b><u>Tips: border属性内还有top、bottom、left、right四个方向以便于单独设置</u></b>

  - border-radius: xxx;  
  设置边框圆角属性

  - color: xxx;  
  设置元素内文本颜色

  - font-family: xxx;  
  设置文字字体，如雅黑、宋体等  
  在选择时一般会选择多个字体，优先度为从左到右递减  
  使用sans-serif设置为默认字体，通常在最后添加该选项

  - font-weight: xxx;  
  设置文本粗细

  - font-size: xxx;  
  设置文本大小

  - font-style: xxx;
  设置斜体文本

  - left/right/top/bottom: xxx;  
  设置指定元素的左边/右边/顶部/底部所在位置

  - line-height: xxx;  
  设置指定文本元素中的行间距

  - padding: xxx;  
  设置指定元素边缘与它的内容之间需要的距离，称为内边距  
  <b><u>Tips: padding属性内还有top、bottom、left、right四个方向以便于单独设置</u></b>

  - text-aligh: xxx;  
  设置文本的左对齐、居中或是右对齐  
  注意: 该属性会对块元素中所有内联内容对齐，同时只能在块元素上设置

  - text-decoration: xxx;  
  设置文本装饰，如上划线，下划线，删除线等

  - letter-spacing: xxx;  
  设置字母之间的间距

  - list-style: xxx;  
  设置列表想的外观

  - background-image: xxx;  
  设置元素后面的图像

  - background-repeat: xxx;  
  设置背景图片平铺属性

  - background-position: xxx;  
  设置背景图片的位置

  - float: xxx;  
  设置元素浮动属性  
  所有的浮动元素都需要指定宽度(width)  
  除了\<img>元素，因为该元素有默认的宽度，不需要再显式指定
  浮动的工作特点:  
  1、从正常流中删除，会尽量将元素放在指定位置  
  2、若正常流中含有内联元素，会考虑浮动元素的边界，呈现出围绕浮动元素的布局

  - position: xxx;  
  设置元素的定位方式  
  当position: absolute;时css如何工作:  
  1、从正常流中将该元素删除，并将元素摆在指定位置  
  2、所有类型的元素都会忽略采用绝对定位的元素  
  3、可以使用z-index: xxx;指定采用绝对定位元素在显示的上下关系  
  4、采用绝对定位的元素可以不用像采用浮动元素那样指定宽度(width)

  - clear: xxx;  
  检查元素指定方位内有无浮动元素，若有，则将本元素下移

  - display: xxx;  
  设置元素展示形式，多用于表格布局

  - border-spacing: xxx;  
  设置表格边框间距，用于\<table>元素中  
  注意: 在单元格中，不能单独设置各个表格单元格的外边距

  - border-collapse: xxx;  
  将表格单元格边框设置为折叠

  - list-style-type: xxx;  
  设置列表符号

  - list-style-image: xxx;  
  设置列表特殊符号，通常后面接图片链接

***
## Css知识点
  - 形如  
  > h1 {  
  color: grey;  
}

  其中“{}”前面的部分称之为选择器

  - 一般来讲，能影响文本外观的style样式都能继承

  - 类选择器:  
  > p.greenTea

  指向元素\<p>中的greenTea类，  
  若“.”之前没有说明元素，则“{}”内规则将运用到所有拥有该名字的类

  - id选择器:  
  > #footer  
  p#footer

  指向id为footer的元素，  
  id选择器只与页面中的一个元素匹配

  - 子孙选择器:
  > div h2  
  \#ID h2

  指向div元素中的h2元素


  - 一个元素可以指定多个类，只需要在类与类之间添加空格即可  
    此时应用规则为: 谁特殊用谁，一样特殊用最后一个

  - css验证工具  
  网站地址:
  > <http://jigsaw.w3.org/css-validator/>

  - 在线颜色表  
  网站地址:  
  > <http://en.wikipedia.org/wiki/Web_colors>

  - 使用
  > @font-face {  
  &emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&emsp;
  font-family: 'name';  
  &emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&emsp;
  src: url('your font doc');  
}

  来加载自定义字体

  - css单位  
    1、px: 指像素，1px就是指一个像素  
    2、%: 指该元素大小相对于父元素大小的百分比
    3、em: 比例因子， 指该元素大小相对于父元素大小的倍数

  - 外边距(margin)提供元素之间的间距，而内边距(padding)是在内容周围增加额外的空间

  - 如果需要在内容区本身周围有更大的可见空间，就要使用内边距(padding)，如果希望元素与页面边缘之间有更大空间，这种情况下就要使用外边距

  - html link中有media属性允许指定应用这个样式表的设备类型

  - css媒体查询(不使用html link的另一种方案):
  > @media print{  
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
  body{  
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
  font-family: serif;  
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
}  
}

  - width属性只会改变内容区的宽度

  - <div>的默认内边距(padding)为0

  - 使用<span>元素建立内联内容的逻辑分组

  - 选择器的优先度:
  > id > class > element

  - 浏览器并列放置两个内联元素时，会使用它们的外边距来计算它们之间的空间

  - 浏览器上下放置两个块元素时，会之用它们之间更大的那个外边距来计算它们之间的空间

  - 一般来说，不会设置内联元素的外边距，图像除外

  - 对于嵌套元素，只要两个垂直外边距碰到一起，就会产生折叠。  
  但是如果外面一层的元素有一个边框，就不会产生折叠

  - 一般来说，我们希望主内容可以随着页面拓展，所以不实用float属性

  - 通常使用外边距来对齐浮动元素和普通元素

  - css布局:  
  1、浮动布局  
  &emsp;
  左紧右松: 次要内容浮动，放置在页面右侧。代码简洁，但在小屏设备上效果不佳  
  &emsp;
  左松右紧: 主要内容浮动，放置在页面左侧。能在小屏设备上正常工作，但设计感不
  &emsp;&emsp;&emsp;&emsp;&emsp;
  强，不够美观  
  2、凝胶布局  
  &emsp;
  将包裹整个页面的\<div>外边距(margin)指定为auto  
  3、绝对布局  
  &emsp;
  使用绝对定位的方式对页面进行布局，当在需要页面某一部分固定，另一部分可以扩展
  &emsp;
  和收缩时适用，但会有页面遮盖的现象  
  4、表格布局:  
  &emsp;
  创建一个\<div>包含所有的元素作为整个表格，然后对表格中每一行和每一列创建一个
  &emsp;
  \<div>。逻辑清晰，在页面结构比较简单的时候可以采用。但页面复杂时会变成灾难
