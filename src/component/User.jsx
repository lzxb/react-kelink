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
import erweima from '../erweima.png';


class User extends Component {
    constructor (props) {
        super(props);   
    }
    render() {
        return (
            <div>
                <Header title="我的" />
                <div className="user">
                    <div className="head">
                        <div className="headimg" data-flex="dir:top main:center cross:center">
                            <div className="pictrue" style={{ backgroundImage: 'url(http://vpic.video.qq.com/4252003160/t0156a0xb39_ori_1.jpg)' }}></div>
                            <div className="name">狼族小狈</div>
                        </div>
                    </div>
                    <div className="logins" data-flex="box:mean"> 
                        <div className="item">
                            <Link to="/login">登录</Link>
                        </div>
                        <div className="item">
                            <Link to="/register">注册</Link>
                        </div>
                    </div>
                    <ul className="nav">
                        <li>
                            <Link to="#"  data-flex="box:justify">
                                <div className="font" data-flex="cross:center">
                                    <i className="iconfont icon-wenzhang"></i>
                                </div>
                                <div className="tit">我的文章</div>
                                <div className="arrow" data-flex="cross:center">
                                    <i className="iconfont icon-arrow-right"></i>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="#"  data-flex="box:justify">
                                <div className="font" data-flex="cross:center">
                                    <i className="iconfont icon-xiaoxi"></i>
                                </div>
                                <div className="tit">我的消息</div>
                                <div className="arrow" data-flex="cross:center">
                                    <i className="iconfont icon-arrow-right"></i>
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav">
                        <li>
                            <Link to="#"  data-flex="box:justify">
                                <div className="font" data-flex="cross:center">
                                    <i className="iconfont icon-shezhi"></i>
                                </div>
                                <div className="tit">设置</div>
                                <div className="arrow" data-flex="cross:center">
                                    <i className="iconfont icon-arrow-right"></i>
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav">
                        <li>
                            <Link to="#"  data-flex="box:justify">
                                <div className="font" data-flex="cross:center">
                                    <i className="iconfont icon-lianxi"></i>
                                </div>
                                <div className="tit">联系我们</div>
                                <div className="arrow" data-flex="cross:center">
                                    <i className="iconfont icon-arrow-right"></i>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/about"}  data-flex="box:justify">
                                <div className="font" data-flex="cross:center">
                                    <i className="iconfont icon-guanyu"></i>
                                </div>
                                <div className="tit">关于</div>
                                <div className="arrow" data-flex="cross:center">
                                    <i className="iconfont icon-arrow-right"></i>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Footer index="2"/>
            </div>
        );
    }
};
export default User;