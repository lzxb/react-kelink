import React, {Component} from 'react';
import {Link} from 'react-router';

/*
    全局公共头部
*/
export class Header extends Component {
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
        } else if (leftIcon === 'fanhui') { //返回上一页
            left = (
                <a onClick={this.context.router.goBack}>
                    <i className={'iconfont icon-' + leftIcon}></i>
                </a>
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
Header.contextTypes = {
    router: React.PropTypes.object.isRequired
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

export class Footer extends Component {
    render() {
        let arr = [];
        arr[this.props.index] = 'on';
        return (
            <footer className="common-footer">
                <div className="zhanwei"></div>
                <ul className="menu" data-flex="box:mean">
                    <li className={arr[0]}>
                        <Link to="/">
                            <i className="iconfont icon-zhuye"></i>首页
                        </Link>
                    </li>
                    <li className={arr[1]}>
                        <Link to="/menu">
                            <i className="iconfont icon-caidan"></i>分类
                        </Link>
                    </li>
                    <li className={arr[2]}>
                        <Link to="/user">
                            <i className="iconfont icon-gerenzhongxin"></i>我的
                        </Link>
                    </li>
                </ul>
            </footer>
        );
    }
}