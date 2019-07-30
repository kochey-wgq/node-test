const express = require('express');
let app  = express();
app.listen(1111);

app.use((req,res,next)=>{   //跨域设置请求头
    res.set('Access-Control-Allow-Origin','*');
    next();
})

app.route('/index')    //请求的集合
   .get((req,res)=>{
      res.send('get');
   })
   .post((req,res)=>{
      res.send('post');
   })