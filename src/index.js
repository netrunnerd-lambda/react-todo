import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import TodoList from './components/todo/todolist';
import TodoForm from './components/todo/todoform';

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTask: '',
      todos: []
    };

    this.addTodo = this.addTodo.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.markTaskComplete = this.markTaskComplete.bind(this);
    this.updateCurrentTask = this.updateCurrentTask.bind(this);
  }

  addTodo(e) {
    e.preventDefault();

    if (!this.state.currentTask)
      return;

    const todos = [
      ...this.state.todos,
      {
        task: this.state.currentTask,
        id: Date.now(),
        completed: false
      }
    ];

    this.setState({ currentTask: '', todos });
  }

  clearCompleted(e) {
    e.preventDefault();
    
    const todos = this.state.todos.filter(todo => todo.completed ? null : todo);

    this.setState({ todos });
  }

  markTaskComplete(id) {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id)
        todo.completed = !todo.completed;
    
      return todo;
    });

    this.setState({ todos });
  }

  updateCurrentTask(e) {
    this.setState({ currentTask: e.target.value });
  }

  render() {
    return (
      <Fragment>
        <h1>ALTIMATE TASK MANAGER</h1>
        <main className="container">
          <TodoForm addTodo={ this.addTodo } 
                    clearCompleted={ this.clearCompleted }
                    currentTask={ this.state.currentTask }
                    updateCurrentTask={ this.updateCurrentTask } />
          <TodoList todos={ this.state.todos } clickHandler={ this.markTaskComplete } />
        </main>
      </Fragment>
    );
  }
}

const element = document.getElementById('root');

render(<App />, element);