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

const db = require('./db.js');
require("dotenv").config();
console.log(process.env);


const express = require('express');
console.log(express);
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');
const tasksRouter = require('./routes/tasks.js');
app.use(express.static('public'));

const cors = require('cors');
app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

console.log(app);

app.use("/api/tasks", tasksRouter);
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

app.listen(port, async function (err) {
    // if (err) {
    //     console.log('error in running server');
    // }
    // console.log('server is running on port', port);
    await db.connect();
    // db.addToDB({task: "Task 1", description: "Description 1"});


});