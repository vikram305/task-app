const mongoose =  require('mongoose')

const databaseName='task-manager'
const connectionURL=`mongodb+srv://vikram305:vikram305@learningprojects.1zeq7.mongodb.net/${databaseName}?retryWrites=true&w=majority`
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
})

