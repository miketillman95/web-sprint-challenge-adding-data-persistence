// build your `Task` model here
// build your `Task` model here
const db = require('../../data/dbConfig')
module.exports = {
    createTask,
    getTask,
    

}


async function createTask(tasks){ 
    return await db('task')
                .insert(tasks)

}

function getTask() { 
    return db('task')
}
