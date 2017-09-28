const http = require('http');

http.get(process.argv[2].toString(), function(response){
   
   response.setEncoding('utf8').on('data', function(data){
   	console.log(data);
   })
})