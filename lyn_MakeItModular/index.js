const mod1 = require('./mod.js');

mod1(process.argv[2], process.argv[3], function(err,data){
	if (err){
		console.log(err);
	}

	for(let i = 0; i<data.length; i++) {
		console.log(data[i]);
	}

});