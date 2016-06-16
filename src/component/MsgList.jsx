import React, {Component} from 'react';
import {Link} from 'react-router';

/*
    redux 相关
*/
import { connect } from 'react-redux';
import action from '../action/index';

import Tool from '../lib/Tool/Tool';
import config from '../config/config';
import {Header, Footer, Loading} from './common/index';

/**
 * (上拉加载box)
 * 
 * @class DrawLoad
 * @extends {Component}
 */
class DrawLoad extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <div>
                {this.props.children[0]}
                {this.props.children[1]}
                {this.props.children[3]}
            </div>
        );
    }
}

/**
 * (上拉加载没有数据时，显示组件)
 * 
 * @class DrawLoadDataNo
 * @extends {Component}
 */
class DrawLoadDataNo extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return this.props.children;
    }
}
/**
 * (上拉加载有数据时显示组件)
 * 
 * @class DrawLoadDataYes
 * @extends {Component}
 */
class DrawLoadDataYes extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return this.props.children;
    }
}

/**
 * (触发加载机制的box)
 * 
 * @class DrawLoadState
 * @extends {Component}
 */
class DrawLoadState extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return this.props.children;
    }
}

export default class MsgList extends Component {
    constructor(props) {
        super(props);
        this.start = () => {
            console.log('开始加载');
        }
        this.success = () => {
            console.log('加载成功');
        }
        this.error = () => {
            console.log('开始加载');
        }
    }
    render() {
        return (
            <div>
                <DrawLoad 
                    url="a.html" 
                    send={{ page: 1, classid: 1 }} 
                    pageName="page" 
                    start={this.start} 
                    success= {this.success} 
                    error={this.error}
                >
                    <DrawLoadDataYes>循环列表</DrawLoadDataYes>
                    <DrawLoadDataNo>没有数据</DrawLoadDataNo>
                    <DrawLoadState>上拉加载更多</DrawLoadState>
                </DrawLoad>
            </div>
        );
    }
}