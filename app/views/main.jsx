/** @jsx React.DOM */
var React = require('react')
var Chats = require("./chats.jsx")
var NewChat = require("./new-chat.jsx")

module.exports = React.createClass({
  render() {
    return (
      <div>
        Hello World?
        <NewChat />
        <Chats />
      </div>
    )
  }
})
