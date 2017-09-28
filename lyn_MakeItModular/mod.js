module.exports =  function(name, ext, callback) {
	let fs = require('fs');
	fs.readdir(name, function(err, files){
		if(err) {
			return callback(err);
		}
		let format = "." + ext.toString();
		let data = [];
		let count = 0;
		for(let i = 0; i < files.length ; i++) {
			if(files[i].endsWith(format)) {
                data[count] = files[i];
                count++;
			}
		}
		callback(null, data);
	});
}

