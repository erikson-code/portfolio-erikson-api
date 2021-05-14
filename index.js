
const express = require('express')
const server = express()
const { connect } = require('./db')
const bodyParser = require('body-parser')
const portfolioRouter = require('./routes/portfolios')

const runServer = async () => {

    await connect()

    server.use(bodyParser.json())
    server.use('/api/portfolios', require('./routes/portfolios'))

    server.get('/test',(req,res)=>{
        res.json({message:'Welcome in Portfolio API Application'})
    })
    server.get('',(req,res)=>{
        res.sendFile('index.html',{root:__dirname})
     })

    const PORT = process.env.PORT|| 3001

    server.listen(PORT, err => {

        if (err) console.error(err)
        console.log('Listen in ' + PORT)

    })
}

runServer()






