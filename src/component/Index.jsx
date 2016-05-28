/*
    react 相关
*/
import React,{Component} from 'react';
import {Link} from 'react-router';

/*
    redux 相关
*/
import { connect } from 'react-redux';
import action from '../action/index';

/*
    公共react组件
*/
import {Header, Loading} from './common/index';

/*
    相关的模块调用
*/
import Tool from '../lib/Tool/Tool';
import GetNext from '../lib/GetNext/GetNext';
import config from '../config/config';
/*
    组件入口文件
*/
class Index extends Component {
    constructor(props) {
        super(props);

        /*
            初始化
        */
        this.initApp = (props) => {
            let {DB, location} = props;
            this.classid = /^\d+$/.test(location.query.classid) ? location.query.classid : config.indexClassId ; //如果没有栏目id传过来，默认为0
            location.query.classid = this.classid;
            if (!DB.classid[this.classid]) {
                DB.classid[this.classid] = Tool.merged(DB.def); //没有指定栏目的数据库，将默认的复制过来给指定栏目id
            }
        }
        
        /*
            DOM更新完成
        */
        this.DOMLoad = (props) => {
            let {DB, GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_ERROR} = props;
            let classid = DB.classid[this.classid];
            let data = {
                classid: this.classid,
                action: 'new',
                page: classid.page,
                output: 'json'
            };
            window.scrollTo(classid.scrollX, classid.scrollY); //设置滚动条位置
            if(!classid.getNextBtn) return false; //已经全部加载完成分页了，无需重新加载
            this.newGetNext = new GetNext(this.refs.dataload, {
                url: '/article/list.aspx',
                data: data,
                start: (el) => { //开始加载
                    classid.loadState = 0;
                    GET_DATA_START(DB); 
                },
                load: (data) => { //加载成功
                    classid.page++;
                    if (classid.data && data && classid.data[classid.data.length - 1].id == data[data.length - 1].id || !data) {
                        classid.loadState = 2;
                        classid.loadMsg = '没有了';
                        classid.getNextBtn = false;
                        this.newGetNext.end(); //结束分页插件
                        
                        if (!data){
                            classid.title = '';
                            classid.loadMsg = '暂无记录';
                        }
                        
                        return GET_DATA_SUCCESS(DB);

                    }else if (Tool.isArray(classid.data)) {
                        Array.prototype.push.apply(classid.data, data);
                    } else {
                        classid.data = data;
                    }
                    classid.loadMsg = '上拉加载更多';
                    classid.loadState = 2;
                    if (this.classid === config.indexClassId) {
                        classid.title = config.indexTitle;
                    } else {
                        classid.title = data[0].classname;
                    }
                    
                    GET_DATA_SUCCESS(DB);
                },
                error: () => { //加载失败
                    classid.loadState = 1;
                    classid.loadMsg = '加载失败';
                    GET_DATA_ERROR(DB);
                }
            });
        }
        /*
            卸载前
        */
        this.unmount = (props) => {
            let {DB, SETSCROLL} = props;
            let classid = DB.classid[this.classid];
            classid.scrollX = window.scrollX;
            classid.scrollY = window.scrollY;
            SETSCROLL(DB); //记录滚动条位置

            if(this.newGetNext) this.newGetNext.end(); //结束分页插件
        }
        
        this.initApp(this.props);
        
    }
    render() {
        let {loadState, title, data, loadMsg} = this.props.DB.classid[this.classid];
        let main = null;
        if (Tool.isArray(data)) {
            main = (<ArticleList list={data} />);
        }
        
        return (
            <div>
                <Header leftTo="/about" leftIcon="guanyu" title={title} rightTo="/menu" rightIcon="caidan"/>
                {main}
                <div ref="dataload"><Loading loadState={loadState} loadMsg={loadMsg} /></div>
            </div>
        );
    }
    componentDidMount () {
        this.DOMLoad(this.props);
    }
    shouldComponentUpdate (np) {     
        if (np.location.query.classid !== this.classid) {
            this.unmount(this.props); //卸载前一个栏目相关信息
            this.initApp(np);
            this.props.CLASSID_UPDATE(this.props.DB);
            this.classidBtn = true;
            return false;
        }
        
        return true;
    }
    componentDidUpdate () {
        if (this.classidBtn) {
            this.DOMLoad(this.props);
            this.classidBtn = false;
        }
    }
    componentWillUnmount () {
        this.unmount(this.props);
    }
};

/*
    文章列表
*/
export class ArticleList extends Component {
    render() {
        return (
            <ul className="article-list">
                {
                    this.props.list.map((item, index) => {
                        let {id, book_title, book_content, book_click, classname, book_classid} = item;
                        book_content = book_content.substring(0, 50) + '...';
                        return (
                            <li key={index}>
                                <Link to={'/article/' + id}>
                                    <h3>{book_title}</h3>
                                    <div className="content">{book_content}</div>
                                </Link>
                                <div className="bottom" data-flex="main:justify">
                                    <div className="click">阅读：{book_click}</div>
                                    <div className="to">
                                        <Link to={'/?classid=' + book_classid}>{classname}</Link>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default connect((state) => { return {DB: state.classNewList}; },action('classNewList'))(Index); //连接redux