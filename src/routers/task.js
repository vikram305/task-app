const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.post('/tasks', async (req,res) => {
    const task = new Task(req.body)
    
    try{
         await task.save()
         res.status(201).send(task)
    } catch(error){
         res.status(500).send(error)
    }
    
})

router.get('/tasks', async (req,res) => {

    try{
         const tasks = await Task.find({})
         res.send(tasks)
    } catch(error){
         res.status(500).send()
    }
})

router.get('/tasks/:id', async (req,res) => {
    const id = req.params.id

    try{
         const task = await Task.findById(id)
         if(!task){
              return res.status(404).send()
         }

         res.send(task)
    } catch(error){
         res.status(500).send()
    }
})

router.patch('/tasks/:id', async (req,res) => {
    const id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update => allowedUpdates.includes(update)))

    if(!isValidOperation){
         return res.status(400).send({error: 'Invalid updates'})
    }

    try{
         const task = await Task.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})

         if(!task){
              return res.status(404).send()
         }

         res.send(task)
    } catch(error){
         res.status(500).send(error)
    }

})

router.delete('/tasks/:id', async (req,res) => {
    const id = req.params.id

    try{
         const task = await Task.findByIdAndDelete(id)

         if(!task){
              return res.status(404).send()
         }

         res.send(task)
    } catch(error){
         res.status(500).send()
    }
})


module.exports = router