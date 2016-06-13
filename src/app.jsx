import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import route from './config/route';
import store from './config/store';
import './css/resets.less'; //重置浏览器默认样式
import './css/data-flex.min.css'; //css布局文件
import './css/style.less'; //css文件
import './iconfont/iconfont.css'; //字体图标文件

store.subscribe(function () {
    //    console.log(store.getState());
});
ReactDOM.render(
    <Provider store={store}>
        {route}
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);