const socket = io()

socket.on('sql', (data) => {
    console.log(data)
})



