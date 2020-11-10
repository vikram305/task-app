//CRUD operations

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb+srv://vikram305:vikram305@learningprojects.1zeq7.mongodb.net/?retryWrites=true&w=majority'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    console.log('Connected successfully')

    const db = client.db(databaseName)
    console.log(`client db name:  ${client.db.name}`)

    //insrting single document
    // db.collection('users').insertOne({
    //     name: 'DEF',
    //     age:20
    // }, (error,result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    //inserting many documents
    // db.collection('users').insertMany([
    //     {
    //         name:'XYZ',
    //         age:29
    //     },
    //     {
    //         name:'PQR',
    //         age:24
    //     }
    // ], (error,result) => {
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    //inserting tasks
    db.collection('tasks').insertMany([
        {
            description: 'Task 1',
            completed: false
        },
        {
            description: 'Task 2',
            completed: false
        },
        {
            description: 'Task 3',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks')
        }

        console.log(result.ops)
    })

})