const repo = "/path/to/your/repo";

const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

http.createServer(function (req, res) {
    req.on('data', function(chunk) {
        if (req.headers['x-hook-uuid'] == 'xxxxx') { // Find this in your webhook settings
            exec('cd ' + repo + ' && git pull origin master');
        }
    });

    res.end();
}).listen(64554); // change port or use ufw to allow