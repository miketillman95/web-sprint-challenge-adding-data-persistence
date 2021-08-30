// build your server here and require it from index.js
// build your server here and require it from index.js
const express = require('express');
const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');


const server = express();

const authMiddleWare = (req, res, next) => {
    console.log('entering auth mode')
    let number = Math.random()
    if( number >= 0.7){
        console.log('authenticated', number)
         return next()

    }
    console.log('nope', number)

}

server.use(express.json());
server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)



server.use((err, req, res, next )=> { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack:err.stack,
        customMessage: 'It dont work'
    })
})