const http = require('http')
const url = require('url')

http.createServer((req, res)=>{
	if(req.method === 'GET'){
      let path = url.parse(req.url, true)
      let pathname = path.pathname
      let dt = path.query.iso
      res.writeHead(200 , {'Content-type':'application/json'})
      if(pathname === '/api/parsetime'){
      	
      	let newDt = {
      		hour : '',
      		minute : '',
      		second : ''
      	}
      	let date = new Date(dt);
      	newDt.hour = date.getHours();
      	newDt.minute = date.getMinutes();
      	newDt.second = date.getSeconds();
      	
        res.end(JSON.stringify(newDt))
        res.end()
      }
      if(pathname === '/api/unixtime') {
      	let newTime = {
           unixtime : ''
      	}
      	newTime.unixtime = Date.parse(dt);
      	res.end(JSON.stringify(newTime))
      }
	}
}).listen(process.argv[2])