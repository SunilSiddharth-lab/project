// const modbus = require('jsmodbus')
// const net = require('net')
// const socket = new net.Server()
// const server = new modbus.server.TCP(socket)



// server.listen(502)

getdata = require('./modbustcp')

getdata()



// setInterval(() => getData(3,[1,2,3,4,5]), 500)

