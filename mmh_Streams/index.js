const hapi = require('hapi');
const fs = require('fs');
const rot13 = require('rot13-transform');
const server = new hapi.Server();

server.connection({
    port : process.argv[2] || 8005,
    host : "localhost"
})

server.start((err)=>{
    if(err) {
        console.log(err);
    }

    console.log("Server listening at "+server.info.uri);
})

server.route({
    method : 'GET',
    path : '/',
    handler : function(request, reply) {
       reply(fs.createReadStream('./sample.txt').pipe(rot13()));
    }

})

