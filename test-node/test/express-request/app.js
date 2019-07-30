const express = require('express');
const path = require('path');
let app = express();
app.listen(4444);


// app.use(express.json())
// app.use(express.urlencoded({extended:true}))     //接受参数

// app.post('/form',(req,res)=>{
//     let data =  req.body;
//     console.log(data.user1)
//     res.send(data.user1);
// })

app.use(express.static('./public'))     //静态资源

app.use('/favicon.ico',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/1.ico'));
})

app.get('/',(req,res)=>{
    console.log(__dirname);
    res.send('asfsd')
})


