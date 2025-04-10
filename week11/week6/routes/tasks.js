const express = require('express');
const router = express.Router();
const axios = require('axios');
const { addToDB, findAll, findById, findOne, deleteTask } = require('../db');
const { ObjectId } = require('mongodb');
const { auth } = require('express-oauth2-jwt-bearer');

const checkJwt = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
});

router.post("/", auth, async (req, res) => {
    try{
        console.log("req.body", req.body);
        await addToDB(req.body);
        // res.send("Task added");
        res.status(201).json({ message: "Task added successfully" });
    }catch(err){
        console.log(err.message);
        res.status(500).send("Internal server error");
    }    
});

// router.get('/add', (req, res) => {
//     res.render('taskForm');
// });

router.get('/', async (req, res) => {
    try {
        // const promise = await axios.get("https://jsonplaceholder.typicode.com/todos/");
        // res.json(promise.data);
        const tasks = await findAll();
        res.json(tasks);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Internal server error");
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
        // const [taskResponse, userResponse] = await Promise.all([
        //     axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`),
        //     axios.get(`https://jsonplaceholder.typicode.com/users/${req.params.id}`)
        //     ]);
        const query = { _id: new ObjectId(req.params.id) };

        const task = await findOne(query);
       
       
        if(!task){
            res.status(404).send("Task not found");
            return;
        }

        // const task = taskResponse.data;
        // const user = userResponse.data;

        // res.render('task', {
        //     id: task._id,
        //     title: task.title, 
        //     completed: task.completed,
        //     name: task.username,
        //     date: task.date
        // });
        res.json(task);
    } catch(err){
        console.log(err.message);
        res.status(500).send("Internal server error");
    }
    // res.send(`<p>You are viewing Task ${req.params.id}</p>`);
    // res.render('task', { id: req.params.id });
});

router.get('/test/findOne', async (req, res) => {
    try{
        const query = { title: "Ying" };
        const task = await findOne(query);
        console.log(task);
        res.json({
            message: "Task found",
            rusult: task
        });
    }catch(err){
        console.log(err.message);
        res.status(500).send("Internal server error");
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const taskId = req.params.id;
        console.log("Attempting to delete task with ID:", taskId);
        
        // Use your existing deleteTask function from db.js
        // If you've imported it at the top of the file
        const filter = { _id: new ObjectId(taskId) };
        const result = await deleteTask(filter);
        
        console.log("Delete result:", result);
        
        if (!result || !result.deletedCount || result.deletedCount === 0) {
            return res.status(404).json({ error: "Task not found or already deleted" });
        }
        
        res.json({ message: "Task deleted successfully" });
    } catch (err) {
        console.error("Error deleting task:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;