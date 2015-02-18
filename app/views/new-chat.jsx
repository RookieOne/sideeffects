/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({
  sendChat() {
    var chat = "foo"
    console.log("send chat", chat)
  },
  render() {
    return (
      <div>
        NEW CHAT!!!
        <form onSubmit={this.sendChat}>
          <input type="text" />
        </form>
      </div>
    )
  }
})
