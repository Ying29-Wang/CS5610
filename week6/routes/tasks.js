const express = require('express');
const router = express.Router();
const axios = require('axios');
const { addToDB } = require('../db');

router.post("/", async (req, res) => {
    try{
        console.log("req.body", req.body);
        await addToDB(req.body);
        // res.send("Task added");
        res.redirect("/tasks");
    }catch(err){
        console.log(err.message);
        res.status(500).send("Internal server error");
    }    
});

router.get('/add', (req, res) => {
    res.render('taskForm');
});

router.get('/', async (req, res) => {
    try {
        const promise = await axios.get("https://jsonplaceholder.typicode.com/todos/");
        res.json(promise.data);
    } catch (err) {
        console.log(err.message);
    }
    // const promise = axios.get("https://jsonplaceholder.typicode.com/todos/");
    // console.log(promise);
    // promise.then((response) => {
    //     console.log(response.data);
    // }).catch((err) => {
    //     console.log(err.mesaage);
    // });
    // res.json({message: 'List of tasks'});
    // res.send('<h1>List of tasks</h1>');
});

router.get('/:id', async (req, res) => {
    try{
        const [taskResponse, userResponse] = await Promise.all([
            axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`),
            axios.get(`https://jsonplaceholder.typicode.com/users/${req.params.id}`)
            ]);

        const task = taskResponse.data;
        const user = userResponse.data;

        res.render('task', {
            id: task.id,
            title: task.title, 
            completed: task.completed,
            name: user.name
        });
    } catch(err){
        console.log(err.message);
    }
    // res.send(`<p>You are viewing Task ${req.params.id}</p>`);
    // res.render('task', { id: req.params.id });
});

module.exports = router;