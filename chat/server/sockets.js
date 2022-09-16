module.exports = {

    connect: function(io, PORT){

    const chat = io.of('/chat');

    chat.on('connection', (socket) => {
        socket.on('message', (message)=>{
            chat.to.emit('message',message);
        })
    })
    }
}