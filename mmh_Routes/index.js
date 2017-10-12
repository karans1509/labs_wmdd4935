const hapi = require('hapi')
const server = new hapi.Server()

server.connection({
	port:Number(process.argv[2]), host : 'localhost'
})

server.route({
	method : 'GET',
	path : `/{name}`,
	handler : function(request, reply){
		reply('Hello ' +encodeURIComponent(request.params.name))
	}
})

server.start((err)=>{
	if(err) {
		console.log(err);
	}
	console.log('Server running at :'+server.info.uri)
})