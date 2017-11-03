const hapi = require('hapi');
const joi = require('joi');
const server = new hapi.Server();

server.connection({
    host : "localhost",
    port : process.argv[2]
})

server.start((err)=>{
    if(err) {
        console.log(err);
    }

    console.log("Server running at "+server.info.uri);
})

server.route({
    method : 'GET',
    path : '/chickens/{breed}',
    handler : function(request, reply) {
        reply("Hello "+request.params.breed);
    },
    config : {
        validate : {
            params : {
                breed : joi.string().max(100)
            }
        }
    }

})