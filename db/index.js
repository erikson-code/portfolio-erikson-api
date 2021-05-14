const config = require('../config/dev')
const mongoose = require('mongoose')
require('./models/portfolio')

exports.connect = () => {

    return mongoose.connect(config.DB_URI, {

        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false

    }, error => {
        if (error) console.error(error)
        else
            console.log('Conected to DB')


    })

}