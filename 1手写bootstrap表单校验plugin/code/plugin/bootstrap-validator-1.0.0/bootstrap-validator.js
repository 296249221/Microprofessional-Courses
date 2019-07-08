(function(global, factory, plug) {
    // 调用工厂创建闭包
    return factory.call(global, global.jQuery, plug);
})(this, function($, plug) {
    // 默认值
    var __DEFS__ = {
        raise: "change"
    };
    // 规则引擎
    var __RULES__ = {
        "require": function() {
            return !!this.val();
        }, // 必填项
        "regex": function() {return true;}, // 正则表达式
        "email": function() {
            return  /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(this.val());
        }, // 邮箱地址
        "mobile": function() {return true;}, // 手机号码
        "phone": function() {return true;}, // 座机号码
        "ipaddress": function() {return true;}, // ip地址
        "number": function() {return true;}, // 数字
        "amount": function() {return true;}, // 金额
        "maxlength": function() {return true;}, // 最大长度
        "minvalue": function() {return true;}, // 最小值
        "maxvalue": function() {return true;} // 最大值
        // ...
    };
    // 创建$插件
    $.fn[plug] = function(ops) {
        this.each(function() {
            var $this = $(this);
            $.extend($this, ops);
            // 优先级 用户自选(data-bv-raise)>用户统一设置(bootstrapValidator)>程序默认(__DEFS__)
            $this.raise = $this.data("bv-raise") || $this.raise || __DEFS__.raise; 
            var $fields = $this.find("[data-bv=true]");
            console.log($this.raise);
            $fields.on(ops.raise, function() {
                var $field =$(this); // 目标元素
                var $group = $field.parents(".form-group").removeClass("has-success has-error");
                $group.find(".help-block").remove();
                var result =true, err = null; // 校验结果
                $.each(__RULES__, function(rule, valid) {
                    if ($field.data("bv-" + rule)) {
                        result = valid.call($field);
                        // if (!result) {
                        //     error = $field.data("bv-" + rule + "-error");
                        //     $field.after("<span class=\"help-block\">"+ error +"</span>")
                        // }
                        !result && ($field.after("<span class=\"help-block\">"+ $field.data("bv-" + rule + "-error") +"</span>"));
                        return result;
                    } 
                });
                $group.addClass(result? "has-success": "has-error")
                // console.log($group);
            });
        });
    };
}, "bootstrapValidator");