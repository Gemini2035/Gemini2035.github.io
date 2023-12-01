# 数组方法分类总结
***
## 根据功能分类
增: push、concat、unshift
删: pop、shift、splice
查: indexOf、includes、lastIndexOf、find、findIndex
改: slice、filter、reverse、map、sort、split、join、reduce、reduceRight
**需要注意的是，按照功能分类不是绝对的，有的方法如splice就有多重功能**
## 根据是否改变原数组分类
是否改变原数组，即方法会不会返回一个需要接收的返回值
会改变: push、pop、sort、shift、unshift、splice、reverse

不会改变: 查类型的所有方法(indexOf、lastIndexOf、 includes、find、findIndex)、slice、map、join、concat、filter、reduce、reduceRight、split