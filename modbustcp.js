const  process = require('process')
const Modbus = require('jsmodbus')
const net = require('net')
const { error } = require('console')
const socket = new net.Socket()
const client = new Modbus.client.TCP(socket, 1)
const options = {
  'host': '127.0.0.1',
  'port': '502'
}

// process.stdin.resume()
// process.on('SIGINT', ()=>{
//   process.exit()
// })

socket.on('connect', function () {
  function getData(i,data){
    client.readHoldingRegisters(0, 10)
    .then(async (resp) => {
        while(true){
            // console.log(resp.response._body.valuesAsArray)
            let address = resp.response._body.valuesAsArray
            // let i = 0
            // let j = 0
            // let k = 5
            if(address[i] == 1){
            await client.writeMultipleRegisters(i,[2])
            // client.readHoldingRegisters(0,9).then((res) => {
            //   console.log(res.response._body.valuesAsArray)
            // })
            var arr = []
               
            
            data.forEach(j => {
              client.readHoldingRegisters(j,1).then((res) => {
                arr.push(res.response._body.values)
                // console.log(arr)
                if(arr.length == data.length){
                  var merged = [].concat.apply([], arr)
                  console.log(merged)
                }
              }).catch((error) => {
                console.log(error)
              })
            })
            break
          }else if(address[i] == 0){
            console.log('Not ready')
          }
          break
        // socket.end()
      }
    }
  ).catch(function () {
      console.error(require('util').inspect(arguments, {
        depth: null
      }))
      socket.end()
    })
  }

  setInterval(() => getData(3,[1,2,3,4,5]), 500)
})

socket.on('error', console.error)
socket.connect(options)