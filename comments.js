//Create new server
const express = require('express');
const router = express.Router();

//Create new server
const Comment = require('../models/comment');
const User = require('../models/user');

//Create new server
router.get('/new', (req, res) => {
    res.render('comments/new');
});

router.get('/edit', (req, res) => {
    res.render('comments/edit');
});

router.get('/delete', (req, res) => {
    res.render('comments/delete');
});

//Create new server
router.post('/new', (req, res) => {
    const comment = new Comment({
        content: req.body.content,})});