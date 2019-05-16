import React from 'react';
import Todo from './todo';
import './todo.css';

const TodoList = ({ todos, clickHandler }) => (
  <ul className="todo-list">
    { 
      todos.map(todo => 
        <Todo key={ todo.id } 
              clickHandler={ clickHandler } 
              completed={ todo.completed } 
              id={ todo.id } 
              task={ todo.task } />
      )
    }
  </ul>
);

export default TodoList;