var $ = require('jquery')
var React = require("react")
// var io = require("socket.io-client")

var Main = require("./views/main.jsx")

$(function() {
  console.log("Foo!")
  React.render(<Main />, document.body);


  // var socket = io('http://localhost:3001');
  // socket.on("connect", function() {
  //   console.log("CONNECTED!")
  // })
  //
  // socket.on('news', function (data) {
  //   console.log(data);
  //   socket.emit('my other event', { my: 'data' });
  // });
})
