import React,{Component} from 'react';
import {Link} from 'react-router';

/*
    redux 相关
*/
import { connect } from 'react-redux';
import action from '../action/index';

import Tool from '../lib/Tool/Tool';
import config from '../config/config';
import {Header, Loading} from './common/index';
import erweima from '../erweima.png';


class About extends Component {
    render() {
        return (
            <div>
                <Header leftTo="/" leftIcon="fanhui" title="详情" />
                <div className="about">
                    <div className="saoma">
                        <div className="pictrue"><img src={erweima} /></div>
                    </div>
                    <div className="info">{config.indexTitle} 1.0</div>
                    <div>github：<a href="https://github.com/1340641314/react-kelink" target="_blank">134064134</a></div>
                </div>
            </div>
        );
    }
};


export default About;