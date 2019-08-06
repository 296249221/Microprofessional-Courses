/**
 * 外观模式
 * 细分接口，但是给别人调用的接口，必须又集合起来。
 */
function a() {
    console.log('功能1');
    console.log('功能2')
}
function a1() {
    console.log('功能1');
}
function a2() {
    console.log('功能2');
}
function a() {
    a1();
    a2();
    console.log('功能3');
}
/**
 * 惰性模式
 * 如果一个方法，他的状态一开始就决定了，而且后面还会频繁使用。
 */
var a = 10;
// b要在很多地方调用
function b() {
    if (a == 10) {
        return b = function () {
            console.log(1);
        }
        // console.log(1);
    } else {
        return b = function () {
            console.log(2);
        }
        // console.log(2);
    }
}
b();
var on = function (dom, fn) {
    if (dom.addEventListener) {
        on = function (fn) { dom.addEventListener(fn) };
    } else if (dom.attachEvent) {

    } else {
        dom.onclick = fn;
    }
}
/**
 * 装饰着模式
 */
function add(a, b) {
    return a + b;
}
function myadd(a, b) {
    var num = add(a, b);
    console.log(num);
    return num;
}
// 标准推荐专门写一个装饰器方法，来装饰一类需要
dom.onclick = function () {
    dom.style.color = 'red';
}
function decorator(dom, fn) {
    var old = dom.onclick;
    dom.onclick = function () {
        old();
        fn();
        dom.style.backgroundColor = 'blue';
    }
}
/**
 * 状态模式
 * 解决if else
 */
function action(action) {
    // if (action == 'run'){
    //     console.log('run');
    // } else if(action=='shoot'){
    //     console.log('shoot');
    // }else if(action=='jump'){
    //     console.log('jump');
    // }else if(action=='jump'&&action=='shoot'){
    //     console.log('jump');
    //     console.log('shoot');
    // }
    // actionState.actionList[action]();
    actionState.actionAdd(action);
    actionState.actionAdd(action);
    actionState.actionFire();
}
var actionState = {
    actionList: {
        run: function () {

        },
        jump: function () {

        },
        eat: function () {

        }
    },
    actionArr: [],
    actionAdd: function (action) {
        this.actionArr.push(action);
    },
    actionFire: function () {
        this.actionArr.forEach(() => {
            this.actionArr[item]();
        })
        this.actionArr = [];
    }
}
/**
 * 观察者模式
 * 模块之间沟通的问题。
 */
// 需求打印1~100，每打印10个数，打印间隔加1s
// 开始模块-调用-计时模块-调用-数数模块-数完十个重新通知计时模块减慢计时-计时模块
var observe = {
    list: {},
    on: function (way, fn) {
        this.list[way] = fn;
    },
    fire: function (way) {
        this.list[way]();
    },
    remove: function () {
        this.list[way] = undefined;
    }
}
var timerCounter = {
    time: 1000,
    timer: null,
    num: 0,
    hasCount: 0,
    run: function () {
        this.timer = setInterval(() => {
            this.count();
        }, time)
    },
    count: function () {
        this.num++;
        this.hasCount++;
        if (this.hasCount === 10) {
            this.hasCount = 0;
            observe.fire('finish');
        }
    },
    begin: function () {
        this.run();
        observe.on('finish', function () {
            this.timer += 1000;
            clearInterval(this.timer);
            this.run();
        }.bind(this))
    }
}
