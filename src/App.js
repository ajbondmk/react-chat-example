import React, { Component } from 'react';

const Message = (props) => <p><b>{props.name}:</b> {props.value}</p>

class MessageForm extends Component {

  state = {
    value: ""
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.value)
    this.setState({value: ""})
  }

  updateText(e) {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <input placeholder='Type a message...' value={this.state.value} onChange={this.updateText.bind(this)}/>
        <button>Send</button>
      </form>
    )
  }

}

class App extends Component {

  state = {
    messages: [],
  }

  sendMessage(name) {
    return (message) => this.setState({messages: this.state.messages.concat({name: name, value: message})})
  }

  render() {
    return (
      <div className="App">
        {this.state.messages.map((message, i) => <Message key={i} {...message}/>)}
        <MessageForm onSubmit={this.sendMessage("Robin")}/>
        <MessageForm onSubmit={this.sendMessage("Aliyah")}/>
      </div>
    )
  }

}

export default App;
