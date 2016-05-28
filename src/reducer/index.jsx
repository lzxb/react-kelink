import Tool from '../lib/Tool/Tool';

const start = {
    loadMsg: '正在加载中...',
    loadState: 0,  //0 正在加载中, 1加载失败，2加载成功
    title: '正在加载中...',
    data: null,
    scrollX: window.scrollX,
    scrollY: window.scrollY
};

/*
    分类最新列表数据
*/
const classNewList = (state = {def: start, classid: {}}, action) => {
    /*    
        {
            def: {
                getNextBtn: true, //判断所有数据是否已经全部加载完成
                state: 0,  //0 正在加载中, 1加载失败，2加载成功
                page: 1, //加载到第几页
                title: '正在加载中',
                data: null,
                scrollX: window.scrollX,
                scrollY: window.scrollY
            },
            classid: {
                0: {
                    getNextBtn: true, //判断所有数据是否已经全部加载完成
                    state: 0,  //0 正在加载中, 1加载失败，2加载成功
                    page: 1, //加载到第几页
                    title: '正在加载中',
                    data: null,
                    scrollX: window.scrollX,
                    scrollY: window.scrollY
                },
                1: {
                    getNextBtn: true, //判断所有数据是否已经全部加载完成
                    state: 0,  //0 正在加载中, 1加载失败，2加载成功
                    page: 1, //加载到第几页
                    title: '正在加载中',
                    data: null,
                    scrollX: window.scrollX,
                    scrollY: window.scrollY
                }
            }
        }
    */
    if (state._ID && state._ID !== action._ID) return state;
    switch (action.type) {
        case 'GET_DATA_START': //开始加载
            return Tool.merged(state, action.state);
        case 'GET_DATA_SUCCESS': //加载成功
            return Tool.merged(state, action.state);
        case 'GET_DATA_ERROR': //加载失败
            return Tool.merged(state, action.state);
        case 'SETSCROLL': //记录滚动条
            return Tool.merged(state, action.state);
        case 'CLASSID_UPDATE': //栏目id更新
            return Tool.merged(state, action.state);
        default:
            return Tool.merged(state, {
                _ID: 'classNewList', 
                def: {
                    page: 1,
                    getNextBtn: true
                }
            });
    }
}
/*
    分类导航
*/
const classMenuList = (state = start, action) => {
    /*
        {
            loadMsg: '正在加载中',
            loadState: 0,  //0 正在加载中, 1加载失败，2加载成功
            title: '正在加载中',
            data: null,
            scrollX: window.scrollX,
            scrollY: window.scrollY
        }
    */
    if (state._ID && state._ID !== action._ID) return state;
    switch (action.type) {
        case 'GET_DATA_SUCCESS': //加载成功
            return Tool.merged(state, {loadMsg: '加载完成了', data: action.state, loadState: 2});
        case 'GET_DATA_ERROR': //加载失败
            return Tool.merged(state, {loadMsg: '加载失败', title: '加载失败', loadState: 1});
        case 'SETSCROLL': //记录滚动条
            return Tool.merged(state, {scrollX: window.scrollX, scrollY: window.scrollY});
        default:
            return Tool.merged(state, {_ID: 'classMenuList'});
    }
    
}

//导出方法
export default {classNewList, classMenuList};
