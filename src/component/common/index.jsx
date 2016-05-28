import React, {Component} from 'react';
import {Link} from 'react-router';

/*
    全局公共头部
*/
export class Header extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        let {title, leftTo, leftIcon, rightTo, rightIcon } = this.props;
        let left = null;
        
        if (leftTo && leftIcon) {
            left = (
                <Link to={leftTo}>
                    <i className={'iconfont icon-' + leftIcon}></i>
                </Link>
            );
        }
        
        let right = null;
        
        if (rightTo && rightIcon) {
            right = (
                <Link to={rightTo}>
                    <i className={'iconfont icon-' + rightIcon}></i>
                </Link>
            );
        }
        
        return (
            <header className="common-header" data-flex>
                <div className="icon" data-flex="main:center cross:center" data-flex-box="0">
                    {left}
                </div>
                <h2 className="title" data-flex-box="1">{title}</h2>
                <div className="icon" data-flex="main:center cross:center" data-flex-box="0">
                    {right}
                </div>
            </header>
        )
    }
}

/*
    loading 加载动画
*/
export class Loading extends Component {
    render() {
        return (
            <div className={'data-load data-load-' + this.props.loadState}>
                <div className="msg">{this.props.loadMsg}</div>
            </div>
        );
    }
}

