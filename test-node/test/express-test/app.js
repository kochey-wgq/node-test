const express = require('express');
let  app = express();
let obj = {
    name:"KoChey",
    age:"19",
    height:"182cm"
}
app.listen(3000);

let middlewarp = (req,res,next)=>{
    req.json = obj;     //自动转json格式
    req.fun = '这是index的返回值';
    next();
}
app.use('/index',middlewarp);


app.get('/',(req,res)=>{
    res.send('req没有存储对象或数值');
})

app.get('/index',(req,res)=>{
    res.send(req.path);
})