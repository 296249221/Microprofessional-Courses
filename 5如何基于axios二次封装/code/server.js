var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    var pathname = url.parse(req.url).pathname;
    if (pathname == '/apione') {
        res.end('{"status":0,"mes":"hello world"}');
    } else {
        res.end('{"status":0,"mes":"收到消息"}');
    }
}).listen(3000)