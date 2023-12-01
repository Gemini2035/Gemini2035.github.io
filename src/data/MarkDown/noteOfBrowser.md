# **浏览器环境下资源加载与脚本执行**
***
## 资源的加载
### 1、总体思路
    · 自上而下，加载和渲染同步进行
    · 加载不会阻塞下载，解析会阻塞下载，但解析js的时候会阻塞其他下载
    · js文件一般最后解析，可能会导致回流(reflow)和重绘(repaint)
### 2、具体顺序
1. 将资源分类
    - kMainResource: 即主资源，html页面文件资源就属于该类型
    - kImage: 各种图片资源
    - kCSSStyleSheet: 顾名思义，就是层叠样式表css资源
    - kScript: 脚本资源，例如js资源
    - kFont: 字体资源，例如网页中常用的字体集.woff资源
    - kRaw: 混合类型资源，最常见的ajax请求就属于这类资源
    - kSVGDocument: SVG可缩放矢量图形文件资源
    - kXSLStyleSheet: 扩展样式表语言XSLT，是一种转换语言，关于该类型可以查阅w3c XSL来了解
    - kLinkPrefetch: HTML5页面的预读取资源(Link prefetch)，例如dns-prefetch。下面会有详细介绍
    - kTextTrack: video的字幕资源，即标签
    - kImportResource: HTML Imports，将一个HTML文件导入到其他HTML文档中，例如。详细了解请查阅相关文档。
    - kMedia: 多媒体资源，video or audio都属于该类资源
    - kManifest: HTML5 应用程序缓存资源
    - kMock: 预留的测试类型
2. 安全策略检查
        跨域问题就是在这个阶段产生的
        网页安全政策（Content Security Policy，缩写 CSP）是由浏览器提供的一种白名单制度
            第一种，就是通过页面HTTP请求头的Content-Security-Policy字段来限制
            第二种，通过标签来设置。是以key-value的方式来进行配置的
3. 计算资源优先级
    - 对于XHR请求资源：将同步XHR请求的优先级调整为最高。
    - 对于图片资源：会根据图片是否在可见视图之内来改变优先级。
    - 图片资源的默认优先级为Low。
    现代浏览器为了提高用户首屏的体验，在渲染时会计算图片资源是否在首屏可见视图之内，在的话，会将这部分视口可见图片(Image in viewport)资源的优先级提升为High
    - 对于脚本资源：浏览器会将根据脚本所处的位置和属性标签分为三类，分别设置优先级
    首先，对于添加了defer/async属性标签的脚本的优先级会全部降为Low
    对于没有添加该属性的脚本，根据该脚本在文档中的位置是在浏览器展示的第一张图片之前还是之后，又可分为两类。在之前的(标记early**)它会被定为High优先级，在之后的(标记late**)会被设置为Medium优先级
### 3、下载资源 (根据计算好的优先级)
关键请求链: 可视区域渲染完毕（首屏），并对于用户来说可用时，必须加载的资源请求队列，就叫做关键请求链
优化关键请求链的方法: 
- 第一种：利用Preload和Prefetch。
- 第二种：利用LocalStorage

### 4、Prefetch关键字
关键字prefetch作为元素属性rel的值，是为了提示浏览器，用户未来的浏览有可能需要加载目标资源，所以浏览器有可能通过事先获取和缓存对应资源。
它的作用是告诉浏览器加载下一页面可能会用到的资源。
注意，是下一页面，而不是当前页面。不受跨域限制。只有带有关系类型为 next 或 prefetch 的 标签会被预拉取，即a标签不会被预拉取

什么是链接预取？
链接预取是一种浏览器机制，其利用浏览器空闲时间来下载或预取用户在不久的将来可能访问的文档。网页向浏览器提供一组预取提示，并在浏览器完成当前页面的加载后开始静默地拉取指定的文档并将其存储在缓存中。当用户访问其中一个预取文档时，便可以快速的从浏览器缓存中得到。

### 5、Preload关键字
元素的rel属性的预加载值允许您在HTML的中声明获取请求，指定您的页面将很快需要的资源，您希望`在页面生命周期的早期开始加载这些资源，在浏览器的主要呈现机制开始之前`。 这确保它们更早可用，并且`不太可能阻塞页面的呈现，从而提高性能`。
表示用户十分有可能需要在当前浏览中加载目标资源，所以浏览器必须预先获取和缓存对应资源

link中reload用法
- rel=“preload”
- href：指定需要被预加载资源的资源路径
- as：指定需要被预加载资源的类型
- type：可以包含该元素所指向资源的MIME类型

加载资源优先级说明
1. preload 使用 “as” 属性加载的资源将会获得与资源 “type” 属性所拥有的相同的优先级。比如说，preload as=“style” 将会获得比 as=“script” 更高的优先级
2. 不带 “as” 属性的 preload 的优先级将会等同于异步请求

## 脚本的执行
### 概述
任何 JavaScript 引擎通常都包含一个调用栈和一个堆。调用栈是代码执行的地方。堆是一个非结构化的内存池，用于存储应用程序所需的所有对象。
### 执行上下文
**什么是执行上下文**: 浏览器的JavaScript引擎会创造一个特殊的环境来处理这些JavaScript代码的转换和执行。这个特殊的环境被称为执行上下文。

JavaScript中有两种执行上下文：
1. 全局执行上下文（GEC）
每当 JavaScript 引擎接收到脚本文件时，它首先会创建一个默认的执行上下文，称为全局执行上下文(GEC)。
GEC是基础/默认的执行上下文，所有不在函数内部的JavaScript代码都在这里执行。
**每一个JavaScript文件只能有一个GEC。**
2. 函数执行上下文（FEC）
每当函数被调用时，JavaScript引擎就会在GEC内部创建另一种执行上下文，称为函数执行上下文（FEC），并在FEC中评估和执行函数中的代码。
因为每个函数调用都创建自己的FEC，所以在脚本运行期间会有多个FEC。

### 执行上下文是如何被创建
1. 创建阶段
    1. 创建变量对象(VO)
    变量对象（VO）是一个在执行上下文中创建的类似于对象的容器，存储执行上下文中变量和函数声明。
    在GEC中，每当使用var关键字声明变量，VO就会添加一个指向该变量的属性，并将值设置为"undefined"。
    同时，每当函数声明时，VO就会添加一个指向该函数的属性，并将这个属性存储在内存中。这就意味着在开始运行代码之前，所有函数声明就已经存储在VO中，并可以在VO中访问。
    在FEC中并不创建VO，而是生成一个类数组对象，称为arguments对象，包含传入函数的所有参数。想要进一步了解arguments对象，可以参见此处。
    **提升**: 即在申明前使用的行为，一般只出现在var和函数申明上
    2. 创建作用域链
    JavaScript引擎一路向上遍历执行上下文直至解析处在函数内部触发的变量和函数的概念就叫作用域链。
    3. 设置this关键字的值
    在GEC（所有函数和对象之外）中，this指向全局对象——window对象。
    同时，由var关键字初始化的函数声明和变量会被作为全局对象（window对象）的方法或者属性。
    在FEC中，并没有创建this对象，而是能够访问this被定义的环境。
    在对象中，this关键字并不指向GEC，而是指向对象本身。引用对象中的this如同引用 对象.定义 在对象内部的属性或方法;
2. 执行阶段
当浏览器加载脚本，JS引擎从全局上下文也就是默认上下文开始执行代码，所以全局上下文被放在执行栈的最底部。
然后JS引擎再搜索代码中被调用的函数。每一次函数被调用，一个新的FEC就会被创建，并被放置在当前执行上下文的上方。
执行栈最顶部的执行上下文会成为活跃执行上下文，并且始终是JS引擎优先执行。
一旦活跃执行上下文中的代码被执行完毕，JS引擎就会从执行栈中弹出这个执行上下文，紧接着执行下一个执行上下文，以此类推。

## 事件循环
在事件驱动的模式下，至少包含了一个执行循环来检测任务队列中是否有新任务。通过不断循环，去取出异步任务的回调来执行，这个过程就是事件循环，每一次循环就是一个事件周期。

**微任务和宏任务**
- 微任务和宏任务是绑定的，每个宏任务在执行时，会创建自己的微任务队列。
- 微任务的执行时长会影响当前宏任务的时长。比如一个宏任务在执行过程中，产生了 10 个微任务，执行每个微任务的时间是 10ms，那么执行这 10 个微任务的时间就是 100ms，也可以说这 10 个微任务让宏任务的执行时间延长了 100ms。
- 在一个宏任务中，分别创建一个用于回调的宏任务和微任务，无论什么情况下，微任务都早于宏任务执行（优先级更高）。

宏任务和微任务的本质区别如下：
微任务：不需要特定的异步线程去执行，没有明确的异步任务去执行，只有回调；
宏任务：需要特定的异步线程去执行，有明确的异步任务去执行，有回调；