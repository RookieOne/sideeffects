/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({
  getInitialState() {
    return {
      chats: []
    }
  },
  renderChats() {
    this.state.chats.map((chat) => {
      return (
        <li>
          { chat }
        </li>
      )
    })
  },
  render() {
    return (
      <ul>
        { this.renderChats() }
      </ul>
    )
  }
})
