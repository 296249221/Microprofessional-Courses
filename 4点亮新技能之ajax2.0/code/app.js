const http = require('http');
const querystring = require('querystring'); // 将一个字符串序列化
const url = require('url');

let app = http.createServer((req, res) => {
    let { pathname, query } = url.parse(req.url, true);

    let arr = [];

    req.on('data', (data) => {
        arr.push(data);
        console.log(arr);
    })

    // 原生的ajax请求拿到的数据是二进制数据需要手动解析，比较复杂
    // 输入username:admin,password:123456
    /**
     * [ <Buffer 2d 2d 2d 2d 2d 2d 57 65 62 4b 69 74 46 6f 72 6d 42 6f 75 6e 64 61 72 79 77 34 73 78 33 77 7a 4b 38 68 57 33 70 5a 53 47 0d 0a 43 6f 6e 74 65 6e 74 2d ... > ]
     * /action [Object: null prototype] {} [Object: null prototype] {
     *     '------WebKitFormBoundaryw4sx3wzK8hW3pZSG\r\nContent-Disposition: form-data; name':'"username"\r\n\r\nadmin\r\n
     *      ------WebKitFormBoundaryw4sx3wzK8hW3pZSG\r\nContent-Disposition: form-data;name="password"\r\n\r\n123456\r\n
     *      ------WebKitFormBoundaryw4sx3wzK8hW3pZSG--\r\n' 
     * }
     */
    req.on('end', () => {
        let buffer = Buffer.concat(arr);

        let post = querystring.parse(buffer.toString());

        console.log(pathname, query, post);
    })
}).listen(2019)