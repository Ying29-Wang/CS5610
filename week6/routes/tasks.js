const express = require('express');
const router = express.Router();
const axios = require('axios');

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
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`);
        res.render('task', {
            id: response.data.taskId,
            title: response.data.title, 
            completed: response.data.completed});
    } catch(err){
        console.log(err.message);
    }
    

    // res.send(`<p>You are viewing Task ${req.params.id}</p>`);
    // res.render('task', { id: req.params.id });
});

module.exports = router;