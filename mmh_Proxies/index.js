const hapi = require('hapi')
const server = new hapi.Server()

server.connection({
	port : process.argv[2],
	host : 'localhost'
})

server.start((err)=>{
	if(err) {
		console.log(err)
	}

	console.log("Server running at "+server.info.uri)
})

server.register({ register : require('h2o2')}, (err)=>{
    server.route({
    	method : 'GET',
    	path : '/proxy',
    	handler : {
    		proxy : {
    			uri : 'http://localhost:65535/proxy'
    		}
    	}
    })
})