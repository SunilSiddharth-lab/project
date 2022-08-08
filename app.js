const express = require('express')
const db = require('./db/db')

const app = express()

// app.use(express.json())

const userRouter = require('./router/database')
app.use(userRouter)

app.listen(4000, () => {
    console.log('Connected..')
})
