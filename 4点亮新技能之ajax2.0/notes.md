#### Ajax 1.0存在的不足：
* 支持文本数据的传送，无法很便利的用来读取和上传二进制文件；
* 传送和接收数据时，没有进度信息，只能提示有没有完成；
* 受到“同源策略(Same Orign Policy)”，只能向同一域名的服务器请求数据，使用JsonP解决同源策略；
* `<script><iframe><img><link>`不受同源策略影响。
#### Ajax 2.0：
* 使用FormData对象来管理表单数据；
* 支持文件上传；
* 支持跨域请求；
* 可以获得数据传输的进度信息；
* 不兼容低版本浏览器。
#### FormData主要用于处理上传文件，form表单上传文件的编码方式是multipart/form-data。
`<form action="" enctype="multipart/form-data"></form>`
#### FormData的基本方法：
* set(key, value)增加数据会覆盖；
* append(key, value)追加数据不会覆盖,允许相同的key；
* delete(key)删除指定key的value,保留key；
* get(key)获取指定key的value,如果存在多个value，则获取value[0]；
* getAll(key)获取指定key的全部value，是个数组。
#### 机器之间使用Buffer传递数据，Buffer是缓冲区，操作二进制数据流。
#### concat()方法用于连接两个或多个数组。
#### post相比get安全性更高，数据容量更大。
#### post方法是分段传送数据,提高容错性，避免数据传输阻塞。
#### koa基于promise(),express基于callback()。
#### koa版本区别：
* 1 处理回调使用generator；
* 2 处理回调使用generator(报错)和async/await；
* 3 处理回调使用async/await；
*解决了异步同步化的问题。*
#### package:
* koa-better-body:解析FormData数据；
* koa-convert:将generator函数转化为promise对象。
#### 跨域问题是由`域名、端口号、协议`不同引起的。
#### 当浏览器拿到数据但不返回时，程序报错：
<code>Access to XMLHttpRequest at 'http://localhost:2019/upload' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.</code>
是存在跨域问题，需要在请求头加入Access-Control-Allow-Origin:'[域名]'，*为域名通配符，在实际编程中使用不安全。
