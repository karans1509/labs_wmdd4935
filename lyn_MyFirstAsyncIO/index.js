let fs = require('fs');

fs.readFile(process.argv[2] , function(err, data){
	if(err) throw err;

	let content = data.toString().split('\n').length - 1;
	console.log(content);
});