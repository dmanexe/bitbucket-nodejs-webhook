const repo = "/path/to/your/repo";

const http = require('http');
const crypto = require('crypto'); // in case you need to use SSL/TLS/HTTPS
const exec = require('child_process').exec;

http.createServer(function (req, res) {
    req.on('data', function(chunk) {
        if (req.headers['x-hook-uuid'] == 'xxxxx') { 
        // Find this in your webhook settings in BitBucket -> Settings -> Webhooks
            exec('cd ' + repo + ' && git pull origin master'); 
            // change origin and master if these aren't your git repo names
        }
        // forgoeing any sort of error message here to discourage random access        
    });

    res.end();
}).listen(xxxxx); // change to desired port and configure your firewall to allow TCP connections on this incoming port
