// build your `/api/resources` router here
const express = require('express');
const resources = require('../resource/model')

const router = express.Router()

const authMiddleWare = (req, res, next) => {
    console.log('entering auth mode')
    let number = Math.random()
    if( number >= 0.7){
        console.log('authenticated', number)
         return next()

    }
    console.log('nope', number)

}

router.post('/', authMiddleWare, (req, res, next) => {
    resources.createResources(req.body)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(next)
})

router.get('/', (req, res, next) => {
    resources.getResources()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})

module.exports = router