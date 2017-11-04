const hapi = require('hapi');
const auth = require('hapi-auth-basic');
const boom = require('boom');
const bcrypt = require('bcrypt');
const server = new hapi.Server();

server.connection({
    host : 'localhost',
    port : process.argv[2] || 8080
})


const validate = function(request, username, password, callback){
    
    if(username == 'hapi' && password == 'auth') {
        callback(null, true, {id : username, name : password});
    }
    else {
        callback(boom.unauthorized("Bad username or password", 'simple' ), false);
    }
}

server.register(auth, (err)=>{
    if(err) {
        console.log(err);
    }
    server.auth.strategy('simple', 'basic', { validateFunc : validate});

    server.route({
        path : '/',
        method : 'GET',
        config : {
            auth : 'simple',
            handler : (request, reply)=>{
                reply();
            }
        },
    })

    server.start((err)=>{
        if(err){
            console.log(err)
        }
        console.log("Server running at "+server.info.uri);
    })
})
