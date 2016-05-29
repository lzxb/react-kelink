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

class ArticleId extends Component {
    constructor(props) {
        super(props);
        
        
        this.state = {
            loadMsg: '正在加载中...',
            loadState: 0,  //0 正在加载中, 1加载失败，2加载成功
            data: null
        };

        
    }
    render() {
        let main = null;
        let {loadState,loadMsg, title, data} = this.state;
        switch (loadState) {
            case 0:
                main = (<Loading loadState={loadState} loadMsg={loadMsg} />);
                break;
            case 1:
                main = (<div>加载失败</div>);
            case 2:
                main = (<View {...data} />);
                break;
        }
        
        return (
            <div>
                <Header leftTo="/" leftIcon="fanhui" title="详情" />
                {main}
            </div>
        );
    }
    componentDidMount() {
        this.ajax = Tool.get('/article/view.aspx', {
            output: 'json',
            siteid: config.siteid,
            id: this.props.params.id
        }, (data) => {
            this.setState({
                loadMsg: '加载完成',
                loadState: 2,
                data: data
            });
        }, () => {
            this.setState({
                loadMsg: '加载失败',
                loadState: 1
            });
        });
    }
    componentWillUnmount() {
        if(this.ajax) this.ajax.end();
    }
};

class View extends Component {
    render() {
        let {book_title, book_content, book_click} = this.props;
        return (
            <div className="article-view">
                <h2>{book_title}</h2>
                <div className="yue">阅读：{book_click}</div>
                <article dangerouslySetInnerHTML={{__html: book_content}}>{}</article>
            </div>
        );
    }
}

export default ArticleId;