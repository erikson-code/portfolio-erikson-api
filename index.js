
const express = require('express')
const server = express()
const { connect } = require('./db')
const bodyParser = require('body-parser')
const portfolioRouter = require('./routes/portfolios')

const runServer = async () => {

    await connect()


    server.use(bodyParser.json())
    server.use('/api/portfolios', require('./routes/portfolios'))

    const PORT = process.env.PORT|| 3001

    server.listen(PORT, err => {

        if (err) console.error(err)
        console.log('Listen in ' + PORT)

    })
}

runServer()






