import express, { response } from "express"

const server = express();
server.set("view engine", "pug")

 server.get("/" , (request , response)=>{
    response.send("<h1>welcome to pug </h1>")

 })

 server.get("login" , (request , response)=>{
    response.render("Express/views/first"  ,{
        pageTitle: 'ritik',
        pageHeading: 'Login to your game',
        buttonText: 'Login'
    })
 })

server.listen(4000 , ()=>{
    console.log("server started")
})