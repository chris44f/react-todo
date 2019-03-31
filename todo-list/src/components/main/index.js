import React from 'react';
import './index.css';
import ListItem from '../list-item/index.js'

class App extends React.Component {

  state = {
      name: "Chris",
      textInput: "",
      todos: [
        {
          number: 1,
          text: "Bleh",
          complete: true,
        },
        {
          number: 2,
          text: "Blud",
          complete: false,
        }
      ]
    }

  updateText = (event) => this.setState({ textInput: event.target.value })

  updateNum = () => {
    let todos = [...this.state.todos]
    let updatedTodos = todos.forEach((todo, index) => {
      if (todo.number !== index+1 ) { todos[index].number = index+1}
    })
    this.setState({updatedTodos})
  }

  addItem = () => {
    this.setState({ todos: this.state.todos.concat({
      number: this.state.todos.length+1,
      text: this.state.textInput,
      complete: false,
    })})
    this.updateNum()
  }


  removeItem = (number) => {
    this.setState({todos: this.state.todos.filter((todo) => todo.number !== number)})
  }

  toggle = (number) => {
    let todos = [...this.state.todos]
    const todoToFind = this.state.todos.filter((todo) => todo.number === number )
    todoToFind[0].complete = !todoToFind[0].complete
    this.setState({todoToFind})
  }

  render() {
    return (
      <div>
        <h3> My name is {this.state.name} and this is my To Do app! </h3>
        {this.state.todos.map(todo => (
          <ListItem
            key={todo.number}
            number={todo.number}
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
        <button onClick={()=> this.addItem()}>Add to list</button>
      </div>
    );
  }
}

export default App
