import http from "http"

let namedetails = ["port:4000", "server:HTTP"]
const server = http.createServer((request, response) => {

    if (request.method === "GET") {
        response.writeHead(200, { "content-type": "application/json" })
        response.end(JSON.stringify(namedetails))
    }

    if (request.method === "POST") {
        let details = ''
        request.on('data', (dt) => {
            details += dt.toString()
            namedetails.push(details)
           
        })
        request.on("end" , ()=>{
            response.writeHead(200, { "content-type": "text/html" })
            response.end( JSON.stringify(namedetails))
        })
        
    }

   

  

})

server.listen(4100, () => {
    console.log("server connected")
})