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

class Menu extends Component {
    constructor(props) {
        super(props);

        /*
            程序初始化时执行
        */
        this.initApp = (props) => {

        }
        /*
            DOM 更新完成后执行方法
        */
        this.DOMLoad = (props) => {
            let {DB, GET_DATA_SUCCESS, GET_DATA_ERROR} = this.props;
            window.scrollTo(DB.scrollX, DB.scrollY); //设置滚动条位置
            if (DB.loadState !== 2) {
                this.ajax = Tool.get('/wapindex.aspx', { output: 'json', siteid: config.siteid, classid: config.indexClassId }, GET_DATA_SUCCESS, GET_DATA_ERROR);
            }
        }

        this.unmount = (props) => {

            if (this.ajax) this.ajax.end(); //解除ajax相关
            this.props.SETSCROLL();
        }

        this.initApp(this.props);

    }
    render() {
        let main = null;
        let {loadState, loadMsg, data} = this.props.DB;
        switch (loadState) {
            case 0:
                main = (<Loading loadState={loadState} loadMsg={loadMsg} />);
                break;
            case 1:
                main = (<div>加载失败</div>);
            case 2:
                main = (<MenuList list={data} />);
                break;
        }
        return (
            <div>
                <Header title="分类" />
                {main}
                <Footer index="1"/>
            </div>
        );
    }
    componentDidMount() {
        this.DOMLoad(this.props);
    }
    componentWillUnmount() {
        this.unmount(this.props);
    }
};

class MenuList extends Component {
    render() {
        return (
            <nav className="class">
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            let {classname, classid, typePath} = item;
                            if (typePath !== 'article/index.aspx') return false;
                            return (
                                <li key={index}>
                                    <Link to={'/?classid=' + classid}>{classname}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        );
    }
}

export default connect((state) => { return { DB: state.classMenuList }; }, action('classMenuList'))(Menu); //连接redux