const socket = io()

socket.on('Message', (data) => {
    document.querySelector('#p1').innerHTML = data.d1
    document.querySelector('#p2').innerHTML = data.d2
})
// (resistance_testing) => {
//     document.querySelector('#p2').innerHTML = resistance_testing}


document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const message = document.querySelector('input').value

    socket.emit('sendMessage', message)
})



