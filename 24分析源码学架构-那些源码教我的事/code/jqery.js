(function (window, undefined) {
    var jQuery = function () {
        return new jQuery.init();
    }
    jQuery.prototype = {
        init: function () {

        }
    };
    /**
     * $.etend({})  只给一个对象，那么就把这个对象加入到jqery
     * $.extend({},{a:23})  给两个对象，就会把两个对象合并，并且返回出去 
     */
    jQuery.extend = function () {
        // 接收一个对象，然后把这个对象扩展到jqery上
        // 给一个默认值，防止用户使用错误的时候，整个程序错误
        var target = arguments[0] || {};
        var length = arguments.length;
        var i = 1;
        if (typeof target !== 'object') {
            target = {};
        }
        if (length === 1) {
            target = this;
            i--;
        }
        for (; i < length; i++) {
            // 做循环操作
            if (options = arguments[i] != null) {
                for (var name in options) {
                    target[name] = options[name];
                }
            }
        }
        // var arguments = Array.prototype.slice.call(arguments);
    }
    jQuery.extend({
        // 操作css
    })
    jQuery.extend({
        // 动画
    })

    // 对amd进行支持
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define("jQuery", [], function () { return jQuery; })
    }

    jQuery.prototype = jQuery.init.pototype = jQuery.fn;
    window.$ = jQuery;
    window.jQuery = jQuery;
})(window)