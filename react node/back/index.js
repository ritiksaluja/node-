import express from "express"
import bodyParser from "body-parser"
import connection from "./DB/index.js"
import path from "path" 
import Post from "./models/Post.js"


const app = express()
app.use(bodyParser.json())
app.use(express.static(path.join("../front" ,"dist")))

app.get("/" , (req , res)=>{
    // res.json({
    //     "name" : "ritik" ,
    //     "sub": "node"
    // })
   const indexpath = path.resolve("../first" , "dist" , "index.html")
    res.sendFile(indexpath)



})
app.post("/api" , async(req , res)=>{
    let data = req.body
    console.log(req.body) 
    const postData = new Post(data)
    await postData.save()



})


connection.then(()=>{
    app.listen(4500 , ()=>{
        console.log("welcome to my server")
    })
})
.catch((error)=>{
    console.log("error")
})
