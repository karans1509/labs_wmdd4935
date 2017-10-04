const http = require('http')
const fs = require('fs')
http.createServer((req, res)=>{
   if(req.method === 'POST') {
     let body = ''
     req.on('data' , function(chunk){
     	body += chunk.toString().toUpperCase(	)
     })

     req.on('end', function(){
     	res.writeHead(200, {'Content-type':'text/plain'})
     	res.write(body)
     	res.end()
     })
     
  }
  

}).listen(process.argv[2])