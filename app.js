const express = require('express')
const db = require('./db/configuration')
const path = require('path')
// const cors = require("cors")
const http = require('http')
const socketio = require('socket.io')


const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.json())

const userRouter = require('./router/database')
app.use(userRouter)


const publicDirectotyPath = path.join(__dirname,'./public')
app.use(express.static(publicDirectotyPath))

// const getData = require('./models/user')
// app.use(
//     cors({
//       origin: "*",
//     })
//   );
io.on('connection' ,(socket) => {
  console.log('New connection in place')
  socket.on('sendMessage', async (message) => {
    if (message === "Variant_A"){
      const data = await db.manyOrNone(`SELECT * FROM "Variant_A" ORDER BY created_at DESC`) 
      io.emit ('Message', { 
          d1 : data[0].load_test, 
          d2: data[0].resistance_testing, 
          d3: data[0].length_test, 
          d4: data[0].quality_control, 
          d5: data[0].current, 
          d6: data[0].time, 
          d7: data[0].force, 
          d8: data[0].distance, 
          d9: data[0].temperature, 
          d10: data[0].water_flow, 
          d11: data[0].serial_number
        })
      }else if (message === "Variant_B"){
        const data = await db.manyOrNone(`SELECT * FROM "Variant_B" ORDER BY created_at DESC`)
        io.emit ('Message', { 
          d1 : data[0].load_test, 
          d2: data[0].resistance_testing, 
          d3: data[0].length_test, 
          d4: data[0].quality_control, 
          d5: data[0].current, 
          d6: data[0].time, 
          d7: data[0].force, 
          d8: data[0].distance, 
          d9: data[0].temperature, 
          d10: data[0].water_flow, 
          d11: data[0].serial_number
        })
      }if (message === "Variant_C"){
        const data = await db.manyOrNone(`SELECT * FROM "Variant_C" ORDER BY created_at DESC`)
        io.emit ('Message', { 
          d1: data[0].load_test, 
          d2: data[0].resistance_testing, 
          d3: data[0].length_test, 
          d4: data[0].quality_control, 
          d5: data[0].current, 
          d6: data[0].time, 
          d7: data[0].force, 
          d8: data[0].distance, 
          d9: data[0].temperature, 
          d10: data[0].water_flow, 
          d11: data[0].serial_number
        })
      }
  })
})  
  

server.listen(4000, () => {
    console.log('Connected..')
})
