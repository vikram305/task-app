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


    // db.collection('users').findOne({ name: 'DEF' }, (error,user) => {
    //     if(error){
    //         return console.log('Unable to fetch user')
    //     } 

    //     console.log(user)
    // })

    // db.collection('users').findOne({ name: 'DEF', age:2}, (error,user) => {
    //     if(error){
    //         return console.log('Unable to fetch user')
    //     } 

    //     console.log(user)
    // })


    // db.collection('users').findOne({_id: "5faa8a72efe79942bc1b738c"}, (error,user) => {
    //     if(error){
    //         return console.log('Unable to fetch user')
    //     } 

    //     console.log(user)
    // })

    // db.collection('users').findOne({_id: new ObjectID("5faa8a72efe79942bc1b738c")}, (error,user) => {
    //     if(error){
    //         return console.log('Unable to fetch user')
    //     } 

    //     console.log(user)
    // })

    // db.collection('users').findOne({ age:20 }, (error,user) => {
    //     if(error){
    //         return console.log('Unable to fetch user')
    //     } 

    //     console.log(user)
    // })

    // db.collection('users').find({ age:20 }).toArray((error, users)=>{
    //     console.log(users)
    // })

    db.collection('users').find({ age:20 }).count((error, count)=>{
        console.log(count)
    })
})