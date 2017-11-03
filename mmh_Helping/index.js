const hapi = require('hapi');
const vision = require('vision');

const server =new hapi.Server();

server.connection({
    host : "localhost",
    port : process.argv[2] || 8006
})

server.start((err)=>{
    if(err) {
        console.log(err);
    }
    console.log("Server running at "+server.info.uri);
})

server.register(vision, (err)=>{
    if(err){
        console.log(err);
    }

    server.views({
        engines : {
            html : require('handlebars')
        },
        path : './templates',
        helpersPath : './templates/helpers'
    });

    server.route({
        method : 'GET',
        path : '/',
        handler : function(request, reply) {
            reply.view('index', request.query);
        }
    })
})