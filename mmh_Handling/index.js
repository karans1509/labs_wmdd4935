const hapi = require('hapi')
const server = new hapi.Server()
const inert = require('inert')

server.connection({
	port : Number(process.argv[2]),
	host : 'localhost'
})


server.start((err)=>{
	if(err) {
		console.log(err)
	}
	console.log('Server running at '+server.info.uri)
})

server.register(inert, (err)=>{
	if(err){
		console.log(err)
	}

	server.route({
	method : 'GET',
	path : '/',
	handler : function(request, reply){
		reply.file('./index.html');
	}
  })
})