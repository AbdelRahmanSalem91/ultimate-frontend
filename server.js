var StaticServer = require('static-server');
var Server = new StaticServer({
    rootPath: './dist/',
    port: 8500
});

Server.start(function(){
    console.log('Server Started At Port: ', Server.port);
})

