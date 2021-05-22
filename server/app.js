const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

const router = require('./router/router.js')
const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
dotenv.config()

app.use("/", router)

app.listen(process.env.PORT, () =>{
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(console.log('connected to db'))
        .catch((err) => console.log(err))
})