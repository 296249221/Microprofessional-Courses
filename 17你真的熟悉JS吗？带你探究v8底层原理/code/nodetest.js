var http = require('http');
var a = [];
http.createServer(function () {
    function getme() {
        var mem = process.memoryUsage();
        var format = function (bytes) {
            return (bytes / 1024 / 1024).toFixed(2) + "MB";
        }
        console.log('heapTotal:' + format(mem.heapTotal) + 'heapUsed' + format(mem.heapUsed))
    }
    if (a.length > 4) {
        a.shift();
    }
    // 大内存量操作 如读取大文件
    fs.readFile();
    // 读写流
    fs.createReadStream
    a.push(new Array(20 * 1024 * 1024));
    getme();
}).listen(3000);