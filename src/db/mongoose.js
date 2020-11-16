const mongoose =  require('mongoose')

const databaseName='task-manager'
const connectionURL=`mongodb+srv://vikram305:vikram305@learningprojects.1zeq7.mongodb.net/${databaseName}?retryWrites=true&w=majority`
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
})

const User = mongoose.model('Users', {
    name: {
        type: String
    },
    
    age: {
        type: Number
    }
})

// const me = new User({
//     name: 'ABC',
//     age:'Mike'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log(`Error: ${error}`)
// })

const Task = mongoose.model('task',{
    description: {

        type: String
    },

    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: 'Task1',
    completed: false
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})