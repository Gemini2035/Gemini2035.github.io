# Vue中的生命周期
***
## Vue2
1. beforeCreate: 创建实例之前
2. created: 创建实例成功
3. beforeMount: 渲染Dom之前
4. mounted: 渲染Dom完成
5. beforeUpdate: 重新渲染之前
6. updated: 重新渲染完成
7. beforeDestroy: 组件销毁之前
8. destroyed: 组件销毁完成

## Vue3
1. setup() :开始创建组件之前，在beforeCreate和created之前执行。创建的是data和method
2. onBeforeMount() : 组件挂载到节点上之前执行的函数。
3. onMounted() : 组件挂载完成后执行的函数。
4. onBeforeUpdate(): 组件更新之前执行的函数。
5. onUpdated(): 组件更新完成之后执行的函数。
6. onBeforeUnmount(): 组件卸载之前执行的函数。
7. onUnmounted(): 组件卸载完成后执行的函数
8. onActivated(): 被包含在中的组件，会多出两个生命周期钩子函数。被激活时执行。
9. onDeactivated(): 比如从 A 组件，切换到 B 组件，A 组件消失时执行。
10. onErrorCaptured(): 当捕获一个来自子孙组件的异常时激活钩子函数

## 两个版本对比
Vue2--------------vue3

- beforeCreate -> setup()
- created -> setup()
- beforeMount -> onBeforeMount
- mounted -> onMounted
- beforeUpdate -> onBeforeUpdate
- updated -> onUpdated
- beforeDestroy -> onBeforeUnmount
- destroyed -> onUnmounted
- activated -> onActivated
- deactivated -> onDeactivated
- errorCaptured -> onErrorCaptured