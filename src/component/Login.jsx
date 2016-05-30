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
    render() {
        return (
            <div>
<<<<<<< HEAD
                <Header leftIcon="fanhui" title="登录" />
=======
                <Header title="登录" />
>>>>>>> 4d1067ce1956f9b98d861e3bcb9198ca8fc326e9
                <div className="login">
                    <div className="line" data-flex="box:first">
                        <div className="key" data-flex="box:mean">
                            <div>用</div>
                            <div>户</div>
                            <div>名</div>
                        </div>
                        <div className="value">
                            <input type="text" placeholder="用户名/手机号码/ID" />
                        </div>
                    </div>
                    <div className="line" data-flex="box:first">
                        <div className="key" data-flex="box:mean">
                            <div>密</div>
                            <div>码</div>
                        </div>
                        <div className="value">
                            <input type="text" placeholder="密码" />
                        </div>
                    </div>
                    <div className="btn">登录</div>
                </div>
<<<<<<< HEAD
=======
                <Footer index="3"/>
>>>>>>> 4d1067ce1956f9b98d861e3bcb9198ca8fc326e9
            </div>
        );
    }
};


export default User;