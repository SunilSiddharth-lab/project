const express = require('express')
const db = require('./db/configuration')
const path = require('path')
const cors = require("cors")
const http = require('http')
const socketio = require('socket.io')


const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.json())

const userRouter = require('./router/database')
app.use(userRouter)

// app.use(express.json())

const publicDirectotyPath = path.join(__dirname,'./public')
app.use(express.static(publicDirectotyPath))

// const getData = require('./models/user')
// app.use(
//     cors({
//       origin: "*",
//     })
//   );
io.on('connection' ,async(socket, tablename = "Variant_A") => {
  console.log('New connection in place')
  if (tablename === "Variant_A"){
    const data = await db.manyOrNone(`SELECT * FROM "Variant_A" ORDER BY created_at DESC`)
    const load_test = data[0].load_test
    const resistance_testing = data[0].resistance_testing
    const length_test = data[0].length_test
    const quality_control = data[0].quality_control
    const current = data[0].current
    const time = data[0].time
    const force = data[0].force
    const distance = data[0].distance
    const temperature = data[0].temperature
    const water_flow = data[0].water_flow
    const serial_number = data[0].serial_number
    io.emit ('Message', { 
        d1 : load_test, 
        d2: resistance_testing, 
        d3: length_test, 
        d4: quality_control, 
        d5: current, 
        d6: time, 
        d7: force, 
        d8: distance, 
        d9: temperature, 
        d10: water_flow, 
        d11: serial_number
      })
    }else if (tablename === "Variant_B"){
      const data = await db.manyOrNone(`SELECT * FROM "Variant_B" ORDER BY created_at DESC`)
      const load_test = data[0].load_test
      const resistance_testing = data[0].resistance_testing
      const length_test = data[0].length_test
      const quality_control = data[0].quality_control
      const current = data[0].current
      const time = data[0].time
      const force = data[0].force
      const distance = data[0].distance
      const temperature = data[0].temperature
      const water_flow = data[0].water_flow
      const serial_number = data[0].serial_number
      io.emit ('Message', { 
          d1 : load_test, 
          d2: resistance_testing, 
          d3: length_test, 
          d4: quality_control, 
          d5: current, 
          d6: time, 
          d7: force, 
          d8: distance, 
          d9: temperature, 
          d10: water_flow, 
          d11: serial_number
      })
    }if (tablename === "Variant_C"){
      const data = await db.manyOrNone(`SELECT * FROM "Variant_C" ORDER BY created_at DESC`)
      const load_test = data[0].load_test
      const resistance_testing = data[0].resistance_testing
      const length_test = data[0].length_test
      const quality_control = data[0].quality_control
      const current = data[0].current
      const time = data[0].time
      const force = data[0].force
      const distance = data[0].distance
      const temperature = data[0].temperature
      const water_flow = data[0].water_flow
      const serial_number = data[0].serial_number
      io.emit ('Message', { 
          d1 : load_test, 
          d2: resistance_testing, 
          d3: length_test, 
          d4: quality_control, 
          d5: current, 
          d6: time, 
          d7: force, 
          d8: distance, 
          d9: temperature, 
          d10: water_flow, 
          d11: serial_number
      })
    }
})  
  

server.listen(4000, () => {
    console.log('Connected..')
})
