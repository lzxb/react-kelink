import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import route from './config/route';
import store from './config/store';
import './less/style.less'; //css文件
import './iconfont/iconfont.css';

store.subscribe(function () {
    //    console.log(store.getState());
});
ReactDOM.render(
    <Provider store={store}>
        {route}
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);