import React from 'react';
import './todo.css';

const TodoForm = ({ addTodo, clearCompleted, currentTask, updateCurrentTask }) => (
  <form className="todo-form" onSubmit={ addTodo }>
    <input onChange={ updateCurrentTask } value={ currentTask } />
    <section className="actions">
      <button type="submit">Add Todo</button>
      <button onClick={ clearCompleted }>Clear Completed</button>
    </section>
  </form>
);

export default TodoForm;