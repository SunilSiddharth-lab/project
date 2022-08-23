const Modbus = require('jsmodbus')
const net = require('net')
const socket = new net.Socket()
const client = new Modbus.client.TCP(socket, 1)
const fs = require('fs')
const options = {
  'host': '127.0.0.1',
  'port': '502'
}

socket.on('connect', function () {
  function getData(i,data){
    client.readHoldingRegisters(0, 10)
    .then(async (resp) => {
        while(true){

            let address = resp.response._body.valuesAsArray

            if(address[i] == 1){
              await client.writeMultipleRegisters(i,[2])

              var arr = []
                
              
              data.forEach(j => {
                client.readHoldingRegisters(j,1).then((res) => {
                  arr.push(res.response._body.values)

                  if(arr.length == data.length){
                    var merged = [].concat.apply([], arr)
                    console.log(merged)
                    var jsonObj = {};

                    for (var i = 0, len = merged.length; i < len; i++) {
                        jsonObj['value' + (i + 1)] = merged[i];
                    }

                    console.log(jsonObj)
                    var dataJSON = JSON.stringify(jsonObj)
                    
                    fs.writeFileSync('Data-json', dataJSON)
                  }



              }).catch((error) => {
                console.log(error)
              })
            })
            break
          }else if(address[i] == 0){
            console.log("Not Ready")
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

  setInterval(() => getData(1,[1,2,3,4,5]), 500)
})

socket.on('error', console.error)
socket.connect(options)

// process.stdin.resume()
// process.on('SIGINT', ()=>{
//   process.exit()
// })

// const  process = require('process')

