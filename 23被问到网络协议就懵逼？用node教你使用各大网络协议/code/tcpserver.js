const net = require('net');
var server = net.createServer(function () {
    // 此回调有连接建立时调用
    console.log('someone connect');
});
// 设置监听-connection
server.on('connection', function (Socket) {
    // Socket端口，后面与客户端的交互都是通过Socket完成
    Socket.write('游戏登录成功');
    Socket.on('data', function () {
        Socket.write('打掉了boss' + Math.random() * 100 + '点血');
    })
});
server.on('close', function () {

});
server.on('error', function () {

});
server.listen(3300);