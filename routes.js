const express = require('express')
const Task = require('./models/task')
const router = express.Router();

//Create Users
router.post('/tasks', async (req, res) => {

    const { title, description, completed } = req.body;

    try {
        const task = new Task({ title, description, completed });
        await task.save();
        res.send(task)
    } catch (error) {
        res.status(500).json({ error: 'Failed to create task' });
    }
});

//Get all users
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks)
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve all tasks' });
    }
});

//Update all users
router.put('/tasks/:id', async (req, res)=>{
    const { id } = req.params;
    const { title, description, completed } = req.body;

    try{
        const task = await Task.findByIdAndUpdate(id, { title, description, completed }, { new: true });
        res.send(task);
    }catch(error){
        console.error(error);
        res.status(500).send(error);
    }

});  

router.delete('/tasks/:id', async (req,res)=>{
    const { id } = req.params;

    try{
        const task = await Task.findByIdAndDelete(id);
        res.send(task);
    }catch(error){
        console.error(error);
        res.status(500).send(error);
    }
});

module.exports = router;