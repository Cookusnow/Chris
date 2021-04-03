import React, {Component} from 'react';
import './App.css';
import TodoItem from './Todoitem';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({
       todos, 
       newTodo: ''
      })
  }

  render() {

    const todolist = this.state.todos.map((todo, i) => 
      <TodoItem text={todo} key={i}/>)

    return (
      <div className='App'>
        <h1>I am the Todo App</h1>

        <form onSubmit="this.handleSubmit">
          <input
            type="text" 
            className="todo-input"
            autoComplete="off"
            placeholder="What do you need to do?"
            name="newTodo"
            onChange={this.handleChange}
            value={this.state.newTodo}
          />
          <button type="submit" className="save-button">SAVE</button>
        </form>

        <div className="todo-content">
          <ol>
            {todolist}
          </ol>
        </div>
      </div>
    )
  }
}

export default App;
