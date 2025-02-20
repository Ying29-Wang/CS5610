const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    const promise = axios.get("https://jsonplaceholder.typicode.com/todos/");
    console.log(promise);
    promise.then((response) => {
        console.log(response.data);
    }).catch((err) => {
        console.log(err.mesaage);
    });
    // res.json({message: 'List of tasks'});
    // res.send('<h1>List of tasks</h1>');
});

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    // res.send(`<p>You are viewing Task ${req.params.id}</p>`);
    res.render('task', {id: req.params.id});
});

module.exports = router;