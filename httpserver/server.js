import http from "http"

const names = [
    "yash", "vinay"
] 
const server = http.createServer((request, response)=>{

    if(request.method==="GET"){
        response.writeHead(200, {"content-type" : "application/json"})
        response.end(JSON.stringify(names))
    }
    
    if(request.method==="POST"){
        response.writeHead(200, {"content-type" : "application/json"})
        request.on("data", (data)=>{
            if(data.includes(",")){
                const getname = data.split(",")
                getname.map((element)=>{
                    names.push(element)
                })
            }
            else{
                names.push(data)
            }

        })
        response.end(JSON.stringify(names))
    }

})
server.listen(4000, ()=>{
    console.log("server started at 4000")
})