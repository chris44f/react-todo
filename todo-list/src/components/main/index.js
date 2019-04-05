import React from 'react';
import './index.css';
import ListItem from '../list-item/index.js'
import uuidv from 'uuid/v4'
class App extends React.Component {

  state = {
      name: "Chris",
      textInput: "",
      todos: [
        {
          key: uuidv(),
          number: 1,
          text: "This is my most important task",
          complete: true,
        },
        {
          key: uuidv(),
          number: 2,
          text: "This is less important",
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
    this.updateNum()
  }

  toggle = (number) => {
    const todoToFind = this.state.todos.filter((todo) => todo.number === number)
    todoToFind[0].complete = !todoToFind[0].complete
    this.setState({todoToFind})
  }

  handleUp = (num) => {
    if (num > 1) {
      let updatedTodos = [...this.state.todos]
      updatedTodos[num-1].number = num-1
      updatedTodos[num-2].number = num
      console.log(updatedTodos)
      updatedTodos.sort((a,b)=> a.number - b.number)
      console.log(updatedTodos)
      this.setState({todos: updatedTodos})
    } else {alert("This task is already at the top of this list!")}
  }

  handleDown = (num) => {
    if (num < this.state.todos.length) {
      let updatedTodos = [...this.state.todos]
      updatedTodos[num-1].number = num+1
      updatedTodos[num].number = num
      console.log(updatedTodos)
      updatedTodos.sort((a,b)=> a.number - b.number)
      console.log(updatedTodos)
      this.setState({todos: updatedTodos})
    } else {alert("This task is already at the bottom of this list!")}
  }

  render() {
    return (
      <div>
        <h3> My name is {this.state.name} and this is my To Do app! </h3>
        <table>
          <thead>
            <tr className="row-header">
              <th className="column-priority">Priority</th>
              <th className="column-title">Title</th>
              <th className="column-date">Started when?</th>
              <th className="column-status">Complete?</th>
            </tr>
          </thead>
          <tbody>
          {this.state.todos.map(todo => (
          <ListItem
            key={uuidv()}
            number={todo.number}
            text={todo.text}
            complete={todo.complete}
            removeItem={this.removeItem}
            toggle={this.toggle}
            handleUp={this.handleUp}
            handleDown={this.handleDown}
          />
        ))}
          </tbody>
        </table>
        <input
          onChange={(event) => this.updateText(event)}
          type="text"
        />
        <button onClick={() => this.addItem()}>Add new task</button>
      </div>
    );
  }
}

export default App
