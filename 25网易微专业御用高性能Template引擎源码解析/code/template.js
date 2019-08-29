(function (root) {
    var RULES = {
        expresstion: /<%[\s\S]+?%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%=([\s\S]+?)%>/g
    }

    function extend() {
        var target = arguments[0] || {}; // 扩展的对象
        var length = arguments.length;
        var options;
        if (toString.call(target) !== ["object Object"]) {
            target = {};
        }
        for (var i = 0; i < length; i++) {
            if (options = arguments[i] != null) {
                for (name in options) {
                    target[name] = options[name];
                }
            }
        }
        return target;
    }

    function template(templateString, settings) {   // 配置
        // 解析
        // settings = Object.assign({}, RULES, settings);
        settings = extend({}, RULES, settings);
        // console.log(settings);
        var matcher = new RegExp([
            settings.expresstion.source,
            settings.interpolate.source,
            settings.escape.source
        ].joiin("|"), "g");
        // console.log(matcher);
        // var matcher = /<%=()
        templateString.replace(matcher, function (matcher, interpolate, escape, expresstion, offset) {
            console.log(interpolate);
            console.log(escape);
            console.log(expresstion);
            if (interpolate) {
                // 逻辑
            } else if (escape) {

            } else if (expresstion) {

            }

            // new Function("string"+"with(obj){"+interpolate+"}"); // 创建一个函数
            
        })
    }
    root.template = template;
})(this);