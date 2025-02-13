// const fs = require('fs');
// console.log(fs);

// fs.writeFile('data.txt', 'Hello, Ying!', (err) => {
//     if (err) {
//         console.log('write fail');
//     }else{
//         console.log('write success');
//         fs.readFile('data.txt', 'utf8', (err, data) => {
//             if(err){
//                 console.log('read fail');
//             }
//             else{
//                 console.log(data);
//             }
//         });
//     }
// });

// const logger = require("./logger.js");
// console.log(logger);
// logger.log();
// console.log(logger.version);

const express = require('express');
console.log(express);
const app = express();
console.log(app);

app.get('/', (req, res) => {
    res.send("Hello, Welcome to Ying's website!");
    console.log('req');
});
a
app.get('/tasks/', (req, res) => {
    res.send('<h1>List of tasks</h1>');
});
const port = 3000;

app.listen(port, function (err) {
    if (err) {
        console.log('error in running server');
    }
    console.log('server is running on port', port);
});