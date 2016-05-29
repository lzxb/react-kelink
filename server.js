var axios = require('axios');
var express = require('express');
var app = express();

//设置静态文件目录
app.use(express.static(__dirname + '/static'))

//获取所有的栏目
app.get('/wapindex.aspx', function (req, res) {
    axios.get('http://xk-web.kelink.com/wapindex.aspx?&output=json&classid=' + req.query.classid).then(function (data) {
        res.send(data.data);
    })
});

//获取文章列表
app.get('/article/list.aspx', function (req, res) {
    axios.get('http://xk-web.kelink.com/article/list.aspx?&output=json&classid=' + req.query.classid + '&action=' + req.query.action + '&page=' + (req.query.page || 1)).then(function (data) {
        res.send(data.data);
    })
});
//获取文章内容
app.get('/article/view.aspx', function (req, res) {
    axios.get('http://xk-web.kelink.com/article/view.aspx?&output=json&id=' + req.query.id).then(function (data) {
        res.send(data.data);
    })
});

//设置任意路由都返回html
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/webapp.html')
});

//创建服务器
app.listen(3000, function () {
    console.log('请在浏览器中打开：http://localhost:3000/')
});
