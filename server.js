var staticServer = require('node-static');
var http = require('http');
var https = require('https');
var options = require('minimist')(process.argv.slice(2));
var port = options.p || options.port || 3333;

// Create a node-static server instance to serve the './public' folder
var file = new staticServer.Server('./public');

if (options.ssl) {
    var sslOptions = require('./lib/ssl.js');
    console.log('Starting HTTPS server on port %d', port);
    https.createServer(sslOptions, function (request, response) {
        request.addListener('end', function () {
        file.serve(request, response);
        }).resume();
    }).listen(port);
} else {
    console.log('Starting HTTP server on port %d', port);
    http.createServer(function (request, response) {
        request.addListener('end', function () {
        file.serve(request, response);
        }).resume();
    }).listen(port);
}
