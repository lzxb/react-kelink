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


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logname: '', // 用户ID/用户名/手机号码*
            logpass: '', // 密码
            action: 'login',
            classid: config.indexClassId,
            siteid: config.siteid,
            sid: '-2-0-0-0-0',
            backurl: '' //来源地址
        };

        this.submit = () => {
            Tool.post('/waplogin.aspx', this.state, (text) => {
                console.log(text);
            }, () => {
                console.log('登录失败');
            });
        }

    }
    render() {
        let {logname, logpass} = this.state;
        return (
            <div>
                <Header leftIcon="fanhui" title="登录" />
                <div className="login">
                    <div className="line" data-flex="box:first">
                        <div className="key" data-flex="box:mean">
                            <div>用</div>
                            <div>户</div>
                            <div>名</div>
                        </div>
                        <div className="value">
                            <input type="text" defaultValue={logname} placeholder="用户名/手机号码/ID" onInput={(e) => { this.state.logname = e.target.value; } } />
                        </div>
                    </div>
                    <div className="line" data-flex="box:first">
                        <div className="key" data-flex="box:mean">
                            <div>密</div>
                            <div>码</div>
                        </div>
                        <div className="value">
                            <input type="password" defaultValue={logpass} placeholder="密码"  onInput={(e) => { this.state.logpass = e.target.value; } } />
                        </div>
                    </div>
                    <div className="btn" onClick={this.submit}>登录</div>
                </div>
            </div>
        );
    }
};