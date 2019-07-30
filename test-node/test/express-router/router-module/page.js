const express = require('express');
let router = express.Router();

router.get('/',(req,res)=>{
    res.send('page');
})

router.get('/main',(req,res)=>{
    res.send('page/main');
})

module.exports = router;