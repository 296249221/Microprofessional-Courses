import $ from 'jquery';
import './test.css';
var i = 0;
console.log(1);
/*$.ajax({
    // url:"https://mooc.study.163.com/smartSpec/detail/1202816603.htm",
    url:"/apione",
    type:"get",
    success:function(data){
        console.log(data);
    }
})*/
setInterval(function() {
    i++
    document.getElementById('mydiv').innerHTML = i+"abc";
},1000)
// module.hot.accept();
// document.getElementById('mydiv').innerHTML = i + 'bbb5522';