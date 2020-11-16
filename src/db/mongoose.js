const mongoose =  require('mongoose')
const validator = require('validator')

const databaseName='task-manager'
const connectionURL=`mongodb+srv://vikram305:vikram305@learningprojects.1zeq7.mongodb.net/${databaseName}?retryWrites=true&w=majority`
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
})

const User = mongoose.model('Users', {
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },

    password: {
        type: String,
        require: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password can not contains "password"')
            }
        }
    },
    
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})

// const me = new User({
//     name: '   DEF   ',
//     email: '  def@gmail.com  ',
//     password: 'def123@'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log(`Error: ${error}`)
// })

const Task = mongoose.model('task',{
    description: {
        type: String,
        required: true,
        trim: true
    },

    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: 'Task2',
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})