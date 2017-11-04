const hapi = require("hapi");
const joi = require("joi");
const server = new hapi.Server();

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

server.route({
    method : 'GET',
    path : '/',
    handler : function(request, reply) {
        reply("working");
    },
})

server.route({
    method : 'POST',
    path : '/upload',
    handler : function(request, reply){
        let body = '';
        let item = {};
        request.payload.file.on('data', function (data){
            body += data;
        });
            
         request.payload.file.on('end', function (){    
            item = {
            description : request.payload.description,
            file : {
                data : body,
                filename : request.payload.file.hapi.filename,
                headers : request.payload.file.hapi.headers
            }
        }
        reply(item);
        });
    },
    config : {
        payload : {
            output : 'stream',
            parse : true
        }  
    }
    
})