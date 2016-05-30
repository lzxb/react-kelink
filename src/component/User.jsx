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
<<<<<<< HEAD
    constructor (props) {
        super(props);   
    }
=======
>>>>>>> 4d1067ce1956f9b98d861e3bcb9198ca8fc326e9
    render() {
        return (
            <div>
                <Header title="我的" />
<<<<<<< HEAD
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
=======
                <div className="login">
                    <div className="line" data-flex="box:first">
                        <div className="key" data-flex="box:mean">
                            <div>用</div>
                            <div>户</div>
                            <div>名</div>
                        </div>
                        <div className="value">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="line" data-flex="box:first">
                        <div className="key" data-flex="box:mean">
                            <div>密</div>
                            <div>码</div>
                        </div>
                        <div className="value">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="btn">登录</div>
                </div>
                <Footer index="3"/>
>>>>>>> 4d1067ce1956f9b98d861e3bcb9198ca8fc326e9
            </div>
        );
    }
};
<<<<<<< HEAD
=======


>>>>>>> 4d1067ce1956f9b98d861e3bcb9198ca8fc326e9
export default User;