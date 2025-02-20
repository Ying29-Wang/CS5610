const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('<h1>List of tasks</h1>');
    console.log(req.params);
    console.log(req.query);
});

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`<p>You are viewing Task ${req.params.id}</p>`);
});

module.exports = router;