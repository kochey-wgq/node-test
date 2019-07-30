const express = require('express');
let app = express();

app.listen(2222);


app.use('/index',require('./router-module/index.js'));  //中间件引入子路由
app.use('/page',require('./router-module/page.js'));


