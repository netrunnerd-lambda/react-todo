import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import TodoList from './components/todo/todolist';
import TodoForm from './components/todo/todoform';

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: '',
      todos: []
    };

    this.addTodo = this.addTodo.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.updateCurrent = this.updateCurrent.bind(this);
  }

  addTodo() {
    this.setState(state => {
      const todos = state.todos.concat({
        task: state.current,
        id: Date.now(),
        completed: false
      });

      return {
        current: '',
        todos
      };
    });
  }

  clearCompleted() {
    this.setState(state => {
      const todos = state.todos.filter(todo => todo.completed ? null : todo);

      return {
        todos
      };
    });
  }

  updateCurrent(e) {
    this.setState({ current: e.target.value });
  }

  render() {
    return (
      <Fragment>
        <h1>Welcome to my Todo App</h1>
        <TodoList todos={ this.state.todos } />
        <TodoForm addTodo={ this.addTodo } 
                  clearCompleted={ this.clearCompleted }
                  currentValue={ this.state.current }
                  updateCurrent={ this.updateCurrent } />
      </Fragment>
    );
  }
}

const element = document.getElementById('root');

render(<App />, element);