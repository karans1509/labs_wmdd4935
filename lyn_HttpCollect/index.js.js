const http = require('http');
const bl = require('bl');

http.get(process.argv[2], function(response){
	response.on('error', console.error);
	response.pipe(bl(function(err, data){
		if(err) {
			console.log(err);
		}
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}))
}).on('error', console.error)