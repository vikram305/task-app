const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/users', async (req,res) => {
    const user = new User(req.body)
    try{
      await user.save()
      res.status(201).send(user)
    } catch(error){
      res.status(400).send(error)
    }
 })
 
 router.get('/users', async (req,res) => {
 
      try{
           const users = await User.find({})
           res.send(users)
      } catch(error){
           res.status(500).send()
      }
      
 })
 
 router.get('/users/:id', async (req,res) => {
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
 
 router.patch('/users/:id', async (req,res) => {
      const id = req.params.id
      console.log(`id: ${id}`)
      const updates = Object.keys(req.body)
      const allowedOperatios = ['name', 'email','age', 'password']
      const isValidOperation = updates.every((update) => allowedOperatios.includes(update))
 
      if(!isValidOperation){
           return res.status(400).send({error: 'Invalid Updates'})
      }
 
      try{
          
          const user = await User.findById(id)

          updates.forEach((update) => user[update] = req.body[update])
          await user.save()
           if(!user){
                return res.status(404).send()
           }
 
           res.send(user)
      } catch(error){
           res.status(500).send(error)
      }
 })
 
 router.delete('/users/:id', async (req,res) => {
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
 

module.exports = router