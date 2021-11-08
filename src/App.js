import axios from 'axios';
import React from 'react';
import './App.css';
import { AddTodo } from './components/AddTodo';
import { Todos } from './components/Todos';


class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        this.setState({
          todos: res.data
        });
      });

  }

  
  //todo: markComplete()

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;  //Växla mellan varoerna
        }

        return todo;  //Kolla individual todo
      })
    });
  };

  //Delete Todo
  delTodo = id => {
    axios.delete('https://jsonplaceholder.typicode.com/todos' + id) // här post till api
  .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})); //set state ==== det vi får som respons from api
  }

  // Title: Todo
  addTodo = title => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false}).then(res => {this.setState({todos: [...this.state.todos, res.data]})}); //set state ==== det vi får som respons from api
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <AddTodo addTodo={this.addTodo} />
          <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
        </div>
      </div>
    );
  }
}
export default App;

