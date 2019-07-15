var request = require('request');
function index(req, res) {
    // res.end('hello world');
    request({
        url: 'http://localhost:3000/',
        methods: 'GET'
    }, function (err, response, body) {
        if (!err && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render('index.art', data); // express独有的方法
        }
    })
    // if (RadioNodeList.indexhtml && RadioNodeList.hash) {
    //     res.end(_redis.indexhtml)
    // } else {

    // }
}
module.exports = index;