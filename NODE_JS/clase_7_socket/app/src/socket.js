module.exports = (io)=>{
    io.on('connection', (socket)=>{
        console.log('Se ha conectado un usuario')
        socket.on('disconnect', ()=>{
            console.log('El usuario se deconectado X')
        })
    })
}