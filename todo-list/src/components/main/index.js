import React from 'react';
import './index.css';
import ListItem from '../listItem/index.js'

class App extends React.Component {
  state = {
    name: "Chris",
    textInput: "",
    todos: [
      {
        id: 1,
        text: "Bleh",
        complete: true,
      },
      {
        id: 2,
        text: "Blud",
        complete: false,
      }
    ]
  }

  updateText = (event) => this.setState({ textInput: event.target.value })

  addItem = () => this.setState({ todos: this.state.todos.concat({
    id: this.state.todos.length + 1,
    text: this.state.textInput,
    complete: false,
  })})

  removeItem = (id) => {
    this.setState({todos: this.state.todos.filter(function(todo) {
      return todo.id !== id
    })})
  }

  toggle = (status) => {
    let statusChanged = !status
    // so now I want to change the todos.complete value to the statusChanged
  }


  render() {
    return (
      <div>
        <h3> My name is {this.state.name} and this is my To Do app! </h3>
        {this.state.todos.map(todo => (
          <ListItem
            id={todo.id}
            text={todo.text}
            complete={todo.complete}
            removeItem={this.removeItem}
            toggle={this.toggle}
          />
        ))}
        <input
          onChange={(event) => this.updateText(event)}
          type="text"
        />
        <button onClick={() => this.addItem()} >Add to list</button>
      </div>
    );
  }
}

export default App