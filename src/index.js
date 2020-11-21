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


const main = async () => {
    // const task = await Task.findById('5fb8fa038f0eed322cf81c32')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5fb8f8905a80272a3cea01e8') 
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()
