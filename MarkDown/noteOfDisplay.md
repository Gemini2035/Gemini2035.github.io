# 前端生产中几种常见的布局方式
***
## 1、静态布局
固定元素宽高
## 2、弹性布局
采用display: flex; 的方式进行布局
## 3、圣杯布局
即上中下布局，中段又分左中右部分
重点在于主要内容部分优先加载，但需要位于屏幕中间
### 使用浮动的方式
首先给header、footer、container一个固定的高度，宽度100%；给left、right一个固定的宽度，高度为container的定高；center宽度100%。
然后给container内的三个子元素float:left;浮动，但是因为center的宽度是container的100%所以left和right并没有与center浮动在一行。
为了使left和right浮动与center一行，可以使用margin-left属性，给left（margin-left:-100%）这样left就覆盖在center的左边；给right（margin-left:-【right的宽度】）这样子right就覆盖在了center的右边。
虽然container的子元素现在都在一行上面，但是center内容的宽度还是container的100%，所以给container一个padding,左右分别与left和right等宽。
这时候left和right还是覆盖在center上，所以可以给container开启相对定位，然后将left和right分别移动对应的宽度，这样container的子元素刚好占满container 的宽度。
### 使用flex的方式
直接按顺序书写即可，在main-container里将display设置为flex
## 4、自适应布局
即使用@media媒体查询技术
## 5、流式布局
即宽高用百分比，按屏幕分辨率调整，布局不发生改变
## 6、响应式布局
使用meta标签，宽高随窗口调整自动适配，自适应布局和流式布局的综合方式
## 7、栅格布局
