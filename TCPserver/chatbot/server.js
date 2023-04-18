import net from "net"

const msgs = []
function publish (data){
    msgs.forEach( msg=> msg.write(data))

}
const server = net.createServer((socket)=>{

msgs.push(socket)

socket.on("data" , (data)=>{
    publish(data)
})




})

server.listen(3000 , ()=>{
    console.log("server ban gya ")

})