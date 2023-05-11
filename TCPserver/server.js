import net from "net"

const server = net.createServer((socket)=>{
    console.log("server created")
    
    socket.on('data', (data) => {
        console.log("Data received: " + data);
        socket.write("sanjay")})



})

server.listen(3000 , ()=>{
    console.log("port mil gya")
})