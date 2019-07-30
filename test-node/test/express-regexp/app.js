const express = require('express');
let app = express();
app.listen(9999);


// app.get(/index(\d+)/,(req,res)=>{   //正则路由
//     console.log(req.url)
//     res.send(req.params[0])     //获取正则子数据
// })

// app.get("/index/:user/:name/:age",(req,res)=>{  //带指定 参数
//     res.send(req.url)
// })

app.get("/page",(req,res)=>{  
    res.redirect("http://www.baidu.com")    //重定向/page路由直接跳转
})