// build your `/api/projects` router here
// build your `/api/projects` router here
const express = require('express');
const projects = require('../project/model');

const router = express.Router()

router.post('/', (req, res, next) => {
    console.log(req.body)
    projects.createProject(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(next)
})

router.get('/', (req, res, next) => {
    // res.send('hi mike')
    projects.getProject()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next)
})

module.exports = router