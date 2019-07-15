const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.json({
        status: 200,
        arr: [
            { title: 'this is title1', content: 'hello node' },
            { title: 'this is title2', content: 'node is good' }
        ]
    })
})
app.listen(3000);