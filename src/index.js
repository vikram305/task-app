const express = require('express')
const bodyParser = require('body-parser')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req,res,next) => {
//     console.log(req.method, req.path)
//     console.log(req.body)
//     next()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
// app.use(bodyParser.urlencoded( {extended: false}))
// app.use(bodyParser.json())

app.listen(port, () => {
})
