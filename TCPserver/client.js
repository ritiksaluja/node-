import net from "net"

const client = net.createConnection({port:3000},()=>{
    console.log("connected to server")
    client.write("yash")
} )
client.on("data" , (data)=>{
 console.log( data + "aa gya hai" )
})