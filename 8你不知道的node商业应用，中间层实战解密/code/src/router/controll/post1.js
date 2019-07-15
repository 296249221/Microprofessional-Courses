function index(req, res) {
    res.json({
        status: 200,
        mes: 'this is a' + req.body.a
    })
}
module.exports = index;