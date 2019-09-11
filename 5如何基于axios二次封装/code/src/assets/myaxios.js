import axios from 'axios'
export default function (arr) {
  function _myaxios() {
    this.vueob = null;
    this.status = true;
  }
  _myaxios.prototype.v = function (ob) {
    this.vueob = ob;
  }
  // 生成请求
  _myaxios.prototype.getAxios = function (config) {
    var _url = config.url;
    var _type = config.type;
    var _data = config.data;
    // if(_type === 'get') {
    //   return axios.get(_url);
    // } else {

    // }
    // 工厂模式和策略模式结合
    var factory = {
      get: function () {
        return axios.get(_url);
      },
      post: function () {
        return axios.post(_url, _data);
      },
      delete: function () {

      }
    }
    return factory[_type];
  }
  // 发送请求
  _myaxios.prototype.sendAxios = function (config) {
    var _axios = this.getAxios(config);
    var self = this;
    // status防止重复提交，请求成功后可以再次提交
    if (this.status || !config.isBlock) {
      config.isBlock ? this.status = false : '';
      _axios().then(function (res) {
        self.status = true;
        config.success === 'default' ? self.handleAxios(config.dataname, res.data) : config.success.call(self.vueob, res);
      })
    }
  }
  // 处理请求
  _myaxios.prototype.handleAxios = function (dataname, data) {
    this.vueob[dataname] = data;
  }
  // 初始化部分
  var _a = new _myaxios()
  arr.forEach(function (item, index) {
    _a[item.name] = function (config) {
      _a.sendAxios({
        url: item.url,
        type: config && config.type || 'get',
        success: config && config.success || 'default',
        data: config && config.data || {},
        dataname: config && config.dataname || item.name,
        isBlock: config && config.isBlock || true
      })
    }
  })
  return _a
}
