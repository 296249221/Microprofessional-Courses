(function(root){
    // var keys = Object.keys;
    // function callkeys() {
        
    // }
    // stream([1,2,3,4,5,6,2,3,4])
    var Stream = function(obj) {
        if(!(this instanceof Stream)) {
            return new Stream(obj);
        }
    };
    // 原型链   扩展
    Stream.prototype.unique = function() {
        return this;
    }
    // stream.unique([1,2,3,4,5,6,2,3,4])
    Stream.unique = function(array, callback) {
        var result = [];
        for (var i=0,len = array.length;i<len;i++) {
            var target = callback ? callback(array[i]) : array[i];
            if (result.indexOf(target) === -1) {
                result.push(target);
            }
        }
        return result;
    }
    Stream.each = function(array) {
        // console.log(array);
        for (var i = 0, len = array.length;i<len;i++) {

        }
    }
    Stream.keys = function(obj) {
        var name;
        var result = [];
        for (name in obj) {
            result.push(name);
        }
        return result;
    }
    // 1.收集   静态方法    2.扩展  原型对象
    Stream.mixin = function() {
        Stream.each(Stream.keys(obj), function(key) {
            var func = obj[key];
            obj.prototype[key] = function() {   // unique
                arguments   // 回调
                console.log(this._wrap);    // 数据
                func.call(this);
            }
        });
    }
    Stream.mixin(Stream);
    root.Stream = Stream;
})(this);