// 生成证书指令(需要下载Git)
// 生成私钥
// openssl genrsa 1024 > ./keys/private.pem
// 根据私钥生成公钥
// openssl req -new -key ./keys/private.pem -out csr.pem
// 根据公钥和私钥生成证书
// openssl x509 -req -days 365 -in csr.pem -signkey private.pem -out file.crt

const https = require('https');
const fs = require('fs');
var options = {
    keys:fs.readFileSync('./keys/private.pem'),
    cert:fs.readFileSync('./keys/file.crt')
};
https.createServer(options,function(req,res){
    res.end('hello world');
}).listen(3400);