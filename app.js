const express = require('express')
const db = require('./db/configuration')
const http = require('http')
const socketio = require('socket.io')
const path = require('path')
const PushToTable = require('./controllers/pushToTable')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
app.use(express.json())

const userRouter = require('./router/database')
app.use(userRouter)

// app.use(express.json())

// temp
// const publicDirectotyPath = path.join(__dirname,'./public')
// app.use(express.static(publicDirectotyPath))


// io.on('connection' ,(socket) => {
//     console.log('New connection in place')
//     setInterval (() => {
//         db.find({}, (data) => {
//             socket.emit('data', {datas: data})
//         })
//     })
// })

app.listen(4000, () => {
    console.log('Connected..')
})
