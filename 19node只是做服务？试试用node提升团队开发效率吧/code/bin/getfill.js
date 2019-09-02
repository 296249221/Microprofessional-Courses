var fs = require('fs');
module.exports = function (name) {
    var output = "C:/Users" + name;
    fs.readdir("./project", function (err, files) {
        fs.mkdir(output, function () {
            if (err) {
                return console.log(err);
            }
            for (var i = 0; i < files.length; i++) {
                var stat = fs.lstatSync('./project/' + files[i]);
                if (stat.isDirectory()) {
                    fs.mkdir(output + "/" + files[i], function () { });
                } else {
                    // var data = fs.readFileSync('./project/'+files[i]);
                    // fs.writeFileSync(output+"/"+files[i]);
                    (function (filename) {
                        fs.readFile('./project/' + files[i], function () {
                            fs.writeFile(output + "/" + files[i], data, function () { });
                        })
                    })(files[i])
                }
            }
        });
        // console.log(files);
    })
}