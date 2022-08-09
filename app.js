const express = require('express')
const db = require('./db/db')
const http = require('http')
const socketio = require('socket.io')
const path = require('path')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
// app.use(express.json())
const publicDirectotyPath = path.join(__dirname,'./public')

app.use(express.static(publicDirectotyPath))

const userRouter = require('./router/database')
const exp = require('constants')
app.use(userRouter)

io.on('connection' ,(socket) => {
    console.log('New connection in place')
    setInterval (() => {
        db.find({}, (data) => {
            socket.emit('data', {datas: data})
        })
    })
})

server.listen(4000, () => {
    console.log('Connected..')
})
