//CRUD operations

const mongodb = require('mongodb')
const MongoClient =  mongodb.MongoClient

const connectionURL = 'mongodb+srv://vikram305:vikram305@learningprojects.1zeq7.mongodb.net/?retryWrites=true&w=majority'
const databaseName='task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error,client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }
    
    console.log('Connected successfully')
    
    const db=client.db(databaseName)
    console.log(`client db name:  ${client.db.name}`)

    db.collection('users').insertOne({
        name: 'ABC',
        age:20
    })
})