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
const tasksRouter = require('./routes/tasks.js');
app.use(express.static('public'));
console.log(app);

app.use("/tasks", tasksRouter);
app.get('/', (req, res) => {
    res.send("Hello, Welcome to Ying's website!");
    console.log('req');
});

// app.get('/tasks/', (req, res) => {
//     res.send('<h1>List of tasks</h1>');
//     console.log(req.params);
//     console.log(req.query);
// });

// app.get('/tasks/:id', (req, res) => {
//     console.log(req.params.id);
//     res.send(`<p>You are viewing Task ${req.params.id}</p>`);
// });


const port = 3000;

app.listen(port, function (err) {
    if (err) {
        console.log('error in running server');
    }
    console.log('server is running on port', port);
});