// const only = require('./test-02.js');
// only();
// console.log(only)
// const path = require('path');
// // let p = __dirname;
// // let p = __filename;
// // let p = path.join(__dirname,'/a','/b','/c');
// // let p = path.relative('/d','/s');
// let p = path.resolve('d','s');
// console.log(p)

// const URL = require('url').URL;

// let u = new URL('https://www.hao123.com/?tn=93006350_hao_pg');
// console.log(u.search)

const querystring = require('querystring');
let qs = querystring.parse('tn=93006350_hao_pg');
console.log(qs.tn)
