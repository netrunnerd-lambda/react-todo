import React from 'react';
import Todo from './todo';

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    { todos.map(todo => <Todo completed={ todo.completed }key={ todo.id } text={ todo.task } /> ) }
  </ul>
);

export default TodoList;