const mongoose =  require('mongoose')

const databaseName=process.env.DATABASE_NAME
const connectionURL=`${process.env.MONGODB_URL}/${databaseName}`
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
})

