const http = require('http')
const fs = require('fs')
http.createServer((req, res)=>{
   let fileStream = fs.createReadStream(process.argv[3],'UTF-8')
   res.writeHead(200, {'Content-type':'text/plain'})
   fileStream.pipe(res)

}).listen(process.argv[2])