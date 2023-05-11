import http from "http"

let arr = [ "ritik" , "saluja"]

const server = http.createServer((request , response)=>{
    if(request.method==="PUT"){
        let details = ""

        request.on('data', (data)=>{
                details += data.toString()
                arr = []
                arr.push(details)
             
        })
        request.on("end" , ()=>{
            response.writeHead( 200 , {"content-type": "application/json"})
            response.end(JSON.stringify(arr))
        })


    }

})
server.listen(4200 , ()=>{
      console.log("server started")
})