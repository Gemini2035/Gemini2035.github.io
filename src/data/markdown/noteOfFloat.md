# **Float详解**
***
## Float特性
1. **文字环绕**
最早的设计目的是用于图片，使文字能够环绕在图片周围。
浮动的块虽然脱离的正常的文档流，但是还会占有正常文档流的文本空间，可以看到上面第二种图，p的区域其实是顶到了img的底下的，因为float让img脱离文档流，但是p上的文字却没有顶过去，也就是说p上的一部分文字空间仍然被img占据着，所以从这里也可以看出float的脱离文档流不是完全脱离。
2. **包裹性**
使用float的元素会自动加上一个块级框，也就是可以像块级元素那样设置宽高。
3. **破坏性**
指它会使父容器的高度塌陷，也就是父元素在高度计算的时候会忽略浮动的元素
解决办法之一是使用<a href="https://carloss2035.com/Views/essayDetails.html?title=bfc%E8%AF%A6%E8%A7%A3&pubdate=2023-07-07&classify=web&id=noetOfBfcr">bfc</a>。

## Float和其他几个相似属性对比
### Float和position: absolute
- 两者都是脱离文档流的，但float会占据正常文档流的空间
- 两者都会引起高度塌陷问题，float可以用clear清除浮动，absolute不行
### Float和display: inline-block
- 使用float和inline-block都能使li横向排列。但是，使用float可以选择排列的方向,而inline只有一种方向；
- 在单纯排列图片的时候，如果图片大小是完全一致的，那么使用这两个属性都能完成比较合适的排列，但是如果图片大小不等高，float的脱离文档流特性导致排列的某些图片会被挤到下一行，导致垂直方向无法对齐
- 如果采用display:inline-block， 必须要考虑display:inline-block属性带来的空白间隙问题
