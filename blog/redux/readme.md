# Redux学习笔记

### 题记

* 作为一个前端小白，今天来学习一下redux，顺便整理笔记一是为了复习，二来也希望能给各位小伙伴一点提示和经验。
* 最开始我以为redux是一个react的子组件，只能结合react使用，后来发现我错了，用redux官方自己的解释说就是: ***Redux 是 JavaScript 状态容器，提供可预测化的状态管理。***
* 那么既然是JavaScript用的，我决定用最纯粹的手法学习redux，也就是不是用结合react，这好处在那里呢，其实最大的好处就是我react用的也不熟==||。

### 经典的counter案例

我们本着纯粹的思想，在html里引入两个script分别是babelpolyfill(可选)，redux（必选  “废话==||”）,也可以使用本地文件。
>
```
<script src="https://cdn.bootcss.com/babel-polyfill/7.0.0-rc.4/polyfill.min.js"></script>
```

>   
``` 
<script src="https://cdn.bootcss.com/redux/4.0.1/redux.min.js"></script>
```
这是一个累加器，这个案例的基本实现思想就是将数字放入一个容器，叫**state**，触发累加操作时不是粗暴地直接改变state的值，而是只能通过**触发action**的方式改变state，具体的步骤就是：
```mermaid
graph LR;
    定义reducer-->创建store;
    创建store-->订阅render渲染;
    订阅render渲染-->初始渲染;
    初始渲染-->监听调用dispatch
```
```javascript
/**
    * 
    * todo 鼠标点击数字增加
    * * createStore
    * * store.subscribe
    * * store.dispatch
    * * store.getState
    * 
*/

const { createStore } = Redux;
const counter = ( state = 0, action ) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
const store = createStore(counter);
const render = () => {
    document.body.innerText = store.getState();
}
store.subscribe(render);
render();

document.addEventListener('click', () => {
    store.dispatch({ type: "INCREMENT" })
})
```

