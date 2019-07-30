const express = require('express');
let router = express.Router();

// router.use(express.json());
// router.use(express.urlencoded({extended:true}));

router.get('/',(req,res)=>{
    res.send('index');
})

router.get('/main',(req,res)=>{
    // let data = req.body;
    // console.log(data);
    res.send('data.user1');
})

module.exports = router;