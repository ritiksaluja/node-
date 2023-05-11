import  Express from "express";
import cors from "cors"

const server = Express()


server.listen(4200 , ()=>{
    console.log("server started at port 4200")
})
