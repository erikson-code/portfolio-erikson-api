const config = require('../config')
const mongoose = require('mongoose')

const FakeDB = require('./FakeDB')



mongoose.connect(config.DB_URI, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

}, async error => {
    if (error) console.error(error)
    else{
        console.log('Starting populating DB')
        await FakeDB.populate()
        await mongoose.connection.close()
        console.log('DB has been populated... ')
    }
        


})

