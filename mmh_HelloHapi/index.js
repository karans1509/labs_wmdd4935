const hapi = require('hapi');
const server = new hapi.Server();

server.connection({
	host:'localhost',
	port : Number(process.argv[2])
})

server.route({ path: '/', method:'GET', handler:function(request, reply){
   	reply("Hello hapi")
}})

server.start(function(err){
	if(err) {
		throw err;
	}
	console.log('Server running at :' , server.info.uri)
})