var express = require('express');

var server = express();

const PORT = process.env.PORT || 8080;

var directory = "public";

var path = express.static(directory);

server.use(function(request, response, next) {
    if (request.headers['x-forwarded-proto'] === 'http') {
        next();
    } else {
        response.redirect('http://' + request.hostname + request.url);
    }
});

server.use(path);

server.listen(PORT, function() {
    console.log("Server started on port: " + PORT);
});
