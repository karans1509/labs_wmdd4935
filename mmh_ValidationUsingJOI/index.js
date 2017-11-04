const hapi = require('hapi');
const joi = require("joi");
const server = new hapi.Server();

server.connection({
    host : "localhost",
    port : process.argv[2] || 8080
})

server.start((err) => {
    if(err) {
        console.log(err);
    }
    console.log("Server running at "+server.info.uri);
})

server.route({
    method : 'GET',
    path : '/',
    handler : function(request, reply) {
        reply("working");
    },
    config : {
        validate : {
            params : {

            }
        }
    }
})

server.route({
    method : 'POST',
    path : '/login',
    handler : function(request, reply){
        reply("login successful")
    },
    config : {
        validate : {
            payload :joi.object({
                isGuest : joi.boolean(),
                username : joi.string().when('isGuest', { is : false, then:joi.required() }),
                accessToken : joi.string().alphanum(),
                password : joi.string().alphanum()
            }).without('password', 'accessToken').options({allowUnknown : true})
        }
    }
})