const hapi = require('hapi')
const vision  = require('vision')

const server = new hapi.Server()

server.connection({
	port : process.argv[2],
	host : 'localhost'
})

server.start((err)=>{
	if(err) {
		console.log(err)
	}
	console.log(`Server running at ${server.info.uri}`);
})

server.register(vision, (err)=>{
	if(err) {
		console.log(err)
	}

	server.views({
		engines : {
			html : require('handlebars')
		},
		path : './templates'
	});

	server.route({
		method : 'GET',
		path : '/',
		handler : {
			view : 'index.html'
		}
	})
})