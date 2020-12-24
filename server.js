// 加载模块
const express = require('express');
const app = express();                          // 执行express返回express实例对象

const bodyparser = require('body-parser');      // 这个模块是用于简化网页提交方法的模块

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    // Access-Control-Allow-Headers   属性： 设置为* 跨域成功 Content-Type也成功
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    if(req.method == 'OPTIONS'){
        res.send(200)
    }else next()
});

// 加载自定义模块
let api = require('./my_modules/routes/api')       // Api接口路由模块

// 使用body这个模块方便输入数据的操作
app.use(bodyparser.json());     // 使用boddyparser中间件
app.use(bodyparser.urlencoded({ extended: true }));



// 调用路由模块, 并且把服务器实例对象进行传参
api(app)

app.listen(1234, (err) => {
    if (err) {
        console.log('服务器开启失败，详细信息为：')
        console.log(err)
    } else {
        console.log('服务器开启成功：端口为：1234')
    }
})