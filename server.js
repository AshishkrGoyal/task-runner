const staticServer = require('static-server');

const server = new staticServer({
    rootPath: './public_static',
    port:4242,
    templates: {
        index: 'box-sizing.html'
    }
});

server.start(function () {
    console.log("server started!!")
});