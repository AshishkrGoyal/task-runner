const staticServer = require('static-server');

const server = new staticServer({
    rootPath: '.',
    port:4242,
    templates: {
        index: 'index.html'
    }
});

server.start(function () {
    console.log("server started!!")
});