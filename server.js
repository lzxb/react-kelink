var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();


//设置静态文件目录
app.use(express.static(__dirname + '/static'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//获取所有的栏目
app.get('/wapindex.aspx', function (req, res) {
    request.get({
        url: 'http://xk-web.kelink.com/wapindex.aspx', qs: req.query
    }, function (err, httpResponse, body) {
        res.send(body);
    });
});

//获取文章列表
app.get('/article/list.aspx', function (req, res) {
    request.get({
        url: 'http://xk-web.kelink.com/article/list.aspx', qs: req.query
    }, function (err, httpResponse, body) {
        res.send(body);
    });
});

//获取文章内容
app.get('/article/view.aspx', function (req, res) {

    request.get({
        url: 'http://xk-web.kelink.com/article/view.aspx', qs: req.query
    }, function (err, httpResponse, body) {
        res.send(body);
    });
});

//登录

app.post('/waplogin.aspx', function (req, res) {
    request.post({ url: 'http://xk-web.kelink.com/JsonAPI/waplogin.aspx', form: req.body }, function (err, httpResponse, body) {
        res.send(body);
    });

});

//设置任意路由都返回html
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/webapp.html')
});

//创建服务器
app.listen(3000, function () {
    console.log('请在浏览器中打开：http://localhost:3000/')
});