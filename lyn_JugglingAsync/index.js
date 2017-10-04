const http = require('http');
const bl = require('bl');
let message = ['', '', '']
let count=0;

for(let i = 2; i<5 ; i++) {
	http.get(process.argv[i], function(res) {
		res.on('error', console.error)
 
		res.pipe(bl(function(err, data){
			if(err) {
				console.log(err)
			}
			data = data.toString()
			message[i-2]+=data
			count++

			if(count === 3) {
				for(let j = 0; j<3 ; j++) {
					console.log(message[j])
				}
			}
		}))
		
	})
}