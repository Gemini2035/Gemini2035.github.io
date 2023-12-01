# 几种主流浏览器内核
***
## 浏览器内核构成
### 1、渲染引擎
渲染引擎负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后会输出至显示器或打印机。
### 2、Js引擎
JS 引擎则是解析 Javascript 语言，执行 javascript 语言来实现网页的动态效果。
## Trident
以IE为代表的浏览器使用的内核
包括IE6-IE10、猎豹、360、搜狗等
**EdgeHTML内核**: 发展自Trident，用于Edge浏览器
**浏览器内核前缀**: -ms-
## Gecko
Firefox内核，以Mosaic内核为基础编写的跨平台内核
**浏览器内核前缀**: -moz-
## Webkit
Safari浏览器的专属浏览器，前身是KHTML开源引擎
**浏览器内核前缀**: -webkit-
## Chromiun/Blink
前者fork自开源引擎webkit，在原有基础上提高了webkit代码的可读性和编译速度
**V8引擎**: 谷歌公司自己研发的Js引擎
后者是webkit的分支
**浏览器内核前缀**: -webkit-
## Presto
Opera自主研发的渲染引擎，后为节约成本转向Chromium/Blink
**浏览器内核前缀**: -o-