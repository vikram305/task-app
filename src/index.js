const express = require('express')
const bodyParser = require('body-parser')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded( {extended: false}))
app.use(bodyParser.json())

app.post('/users', async (req,res) => {
   const user = new User(req.body)
   try{
     await user.save()
     res.status(201).send(user)
   } catch(error){
     res.status(400).send(error)
   }
})

app.get('/users', async (req,res) => {

     try{
          const users = await User.find({})
          res.send(users)
     } catch(error){
          res.status(500).send()
     }
     
})

app.get('/users/:id', async (req,res) => {
     const id=req.params.id
     try{
          const user = await User.findById(id)
          if(!user){
               return res.status(404).send()
          }

          res.send(user)
     } catch(error){
          res.status(500).send()
     }
     
})

app.patch('/users/:id', async (req,res) => {
     const id = req.params.id
     console.log(`id: ${id}`)
     const updates = Object.keys(req.body)
     const allowedOperatios = ['name', 'email','age', 'password']
     const isValidOperation = updates.every((update) => allowedOperatios.includes(update))

     if(!isValidOperation){
          return res.status(400).send({error: 'Invalid Updates'})
     }

     try{
          const user = await User.findByIdAndUpdate(id, req.body, {new: true, runValidators:true})

          if(!user){
               return res.status(404).send()
          }

          res.send(user)
     } catch(error){
          res.status(500).send(error)
     }
})

app.delete('/users/:id', async (req,res) => {
     const id = req.params.id
     try{
          const user = await User.findByIdAndDelete(id)

          if(!user){
               return res.status(404).send()
          }

          res.send(user)
     } catch(error){
          res.status(500).send()
     }
})

app.post('/tasks', async (req,res) => {
     const task = new Task(req.body)
     
     try{
          await task.save()
          res.status(201).send(task)
     } catch(error){
          res.status(500).send(error)
     }
     
})

app.get('/tasks', async (req,res) => {

     try{
          const tasks = await Task.find({})
          res.send(tasks)
     } catch(error){
          res.status(500).send()
     }
})

app.get('/tasks/:id', async (req,res) => {
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

app.patch('/tasks/:id', async (req,res) => {
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

app.delete('/tasks/:id', async (req,res) => {
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

app.listen(port, () => {
})
