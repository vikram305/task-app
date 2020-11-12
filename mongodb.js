//CRUD operations

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb+srv://vikram305:vikram305@learningprojects.1zeq7.mongodb.net/?retryWrites=true&w=majority'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    console.log('Connected successfully')

    const db = client.db(databaseName)
    console.log(`client db name:  ${client.db.name}`)

    // const updatePromise=db.collection('users').updateOne({
    //     _id: new ObjectID("5faa8a72efe79942bc1b738c")
    // }, {
    //     $set:{
    //         name: 'JHK'
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5faa8b2c28296012b4e97561")
    // }, {
    //     $set:{
    //         name: 'ZYH'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set:{
            completed: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})