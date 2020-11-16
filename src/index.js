const express = require('express')
const bodyParser = require('body-parser')
require('./db/mongoose')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded( {extended: false}))
app.use(bodyParser.json())
app.post('/users', (req,res) => {
   const user = new User(req.body)
   console.log(req.body)
   console.log(user)
   user.save().then(() => {
        res.send(user)
   }).catch((e) => {
        res.send(e) 
   })
})

app.listen(port, () => {
    console.log('Server is up on port '+ port)
})
