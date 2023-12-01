# **总结一下几种居中的方法**
***
## 水平居中：
### 1、text-align: center;
条件：在没有浮动的情况下<br/>
设置目标元素display: inline/inline-block,在其父元素设置text-align: center;

### 2、margin: 0 auto;
条件：目标元素有确定的width并且display: block;的块级元素<br/>
设置目标元素width，并设置display:block;、margin: 0 auto;

### 3、设置定位
条件：需要知道目标元素和其父元素的具体width和height
使用子绝父相技巧，同时在目标元素中设置left: 50%; margin-left: -50px;（这个50px是通过目标元素的设置宽高计算出来的，即不同的目标元素需要不同的计算）

### 4、jquery实现
3的加强版，不需要知道具体宽高，但注意需要在resize()方法中实现。获取div的左，上的边距偏移量，边距偏移量的算法就是用页面窗口的宽度减去该div的宽度，得到的值再除以2即左偏移量，右偏移量算法相同。<br/>
个人习惯不使用jquery，故不自我推荐

### 5、margin: auto; 与设置定位搭配使用
条件：需要知道目标元素本身的宽度或高度（即需要水平居中时，你需要知道width值，垂直方向同理）<br/>
使用子绝父相技巧，将目标元素的top、right、bottom、left全部设置为0，然后设置margin: auto;

### 6、css3的calc与定位搭配使用
类似于方法3、4
条件：同5
使用子绝父相技巧，设置top: calc(50% - (w / 2)); left: calc(50% - (h / 2));

### 7、使用css3的新属性transform:tranlate(x, y)属性（强力推荐）
无敌，不需要设定特定宽高
使用子绝父相技巧，设置目标元素left、top均为50%，transform: translate(-50%, 50%);

### 8、display: flex;
使用flex居中不需要知道目标元素的任何属性<br/>
在父元素中设置display: flex; justify-content: center; aligh-items: center;

### 9、display: table-cell
需要添加额外的元素作为外部容器 <br/>
在最外部容器设置display: table; 目标元素设置display: table-cell; text-aligh: center; vertical-aligh: middle;

## 垂直居中
和水平居中相似。基本写在了水平居中方法中