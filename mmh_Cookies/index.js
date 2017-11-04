const hapi = require("hapi");
const server = new hapi.Server();
const boom = require("boom");

server.connection({
    port : process.argv[2] || 8080,
    host : "localhost"
})

server.start((err)=>{
    if(err) {
        console.log(err);
    }

    console.log("Server running at "+server.info.uri);
})

server.state('session',{
    ttl : 10,
    encoding : 'base64json' ,
    isSecure : false,
    domain : "localhost",
    isHttpOnly : false,
    isSameSite : false,
    path : '/'
})

server.route({
    method : 'GET',
    path : '/set-cookie',
    handler : (request, reply) =>{
        reply("working").state('session', {key : 'makemehapi'});
    },
    config : {
        state : {
            parse : true,
            failAction : 'log'
        }
    }
})

server.route({
    method : 'GET',
    path : '/check-cookie',
    handler : (request, reply)=>{
        let cookie = request.state.session;
        if(cookie) {
            reply({user : 'hapi'});
        }
        else {
            reply(boom.badRequest("Invalid cookie value"));
        }
    },
    config : {
        state : {
            parse : true,
            failAction : 'log'
        }
    }
})