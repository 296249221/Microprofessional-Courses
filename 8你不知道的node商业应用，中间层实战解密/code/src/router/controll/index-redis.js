var request = require('request');
function index(req, res) {
    // 判断redis有缓存且是最新的
    if (redis.indexhtml && redis.hash) {
        res.end(_redis.indexhtml);
    } else {
        request({
            url: 'http://localhost:3000/',
            methods: 'GET'
        }, function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var data = JSON.parse(body);
                var _html = Attr('index.art', data); // 调用模版引擎，生成html字符串
                _redis.indexhtml = _html; // redis缓存html
                res.render('index.art', data); // express独有的方法
            }
        })
    }
}
module.exports = index;