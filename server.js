var express = require('express');

var server = express();

var port = 8080;

var directory = "public";

var path = express.static(directory);

server.use(path);

server.listen(port, function() {
    console.log("Server started on port: " + port);
});
