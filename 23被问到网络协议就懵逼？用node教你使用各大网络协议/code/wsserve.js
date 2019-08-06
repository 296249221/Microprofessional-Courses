// websocket node不自带
const websocket = require('ws');
const websocketServer = websocket.Server;
const wss = new websocketServer({
    port: 3000
})
wss.on('connection', function (ws) {
    ws.send('嘿嘿嘿，你连上我了');
    setTimeout(function () {
        ws.send('两秒钟了，你说话啊');
    }, 2000);
    ws.on('message', function (mes) {
        console.log(mes);
        ws.send('收到');
    })
})