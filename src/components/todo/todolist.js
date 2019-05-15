import React from 'react';
import Todo from './todo';

const TodoList = ({ todos, markComplete }) => (
  <ul className="todo-list">
    { 
      todos.map(todo => 
        <Todo key={ todo.id } 
              completed={ todo.completed } 
              id={ todo.id } 
              markComplete={ markComplete } 
              task={ todo.task } />
      )
    }
  </ul>
);

export default TodoList;