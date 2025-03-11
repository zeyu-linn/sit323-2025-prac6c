// 引入 Express 模块，express 为一个函数，用于创建一个 Express 应用
const express = require('express');

// 调用 express 函数，创建一个 Express 应用实例
const app = express();

// 定义服务器监听的端口号，可以自行更改；这里设置为 3000
const PORT = 3000;

// 使用内置中间件 express.static 来托管静态文件（这里用于提供 index.html 文件）
// __dirname 表示当前文件夹路径，'/public' 文件夹存放我们的静态页面文件
app.use(express.static(__dirname + '/public'));

/*
  如果不想使用静态资源托管的方式，也可以直接设置路由来返回 HTML 内容：
  app.get('/', (req, res) => {
    // 发送一个简单的 HTML 字符串作为响应
    res.send('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Simple Node Web Page</title></head><body><h1>Welcome to my Node.js website!</h1></body></html>');
  });
*/

// 定义根路由，当访问 "/" 路径时执行以下回调函数
app.get('/', (req, res) => {
  // 使用 res.sendFile 方法发送 index.html 文件作为响应
  // __dirname 表示当前文件夹路径，'/public/index.html' 为 HTML 文件相对路径
  res.sendFile(__dirname + '/public/index.html');
});

// 启动服务器，监听指定端口
app.listen(PORT, () => {
  // 当服务器启动后在控制台输出提示信息
  console.log(`Server is running on http://localhost:${PORT}`);
});
