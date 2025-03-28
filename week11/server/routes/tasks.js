const express = require('express');
const router = express.Router();
const axios = require('axios');
const { addToDB, findAll, findById, findOne, getTasks, addTask, deleteTask } = require('../db');
const { ObjectId } = require('mongodb');
const Task = require('../models/task');

router.post("/", async (req, res) => {
    try{
        console.log("req.body", req.body);
        const result = await addTask(req.body);
        res.status(201).json(result);
    }catch(err){
        console.error("Error adding task:", err);
        res.status(500).json({ error: "Failed to add task" });
    }    
});

router.get('/add', (req, res) => {
    res.render('taskForm');
});

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
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

router.delete("/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        await task.deleteOne();
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;