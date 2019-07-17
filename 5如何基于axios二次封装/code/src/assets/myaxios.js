import axios from 'axios'
export default function (arr) {
  function _myaxios () {

  }
  // 生成请求
  _myaxios.prototype.getAxios = function () {

  }
  // 发送请求
  _myaxios.prototype.sendAxios = function () {

  }
  // 处理请求
  _myaxios.prototype.handleAxios = function () {

  }
  // 初始化部分
  var _a = new _myaxios()
  arr.forEach(function (item, index) {
    _a[item.name] = function (config) {
      _a.sendAxios()
    }
  })
  return _a
}
