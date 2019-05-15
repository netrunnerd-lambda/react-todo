import React from 'react';

const TodoForm = ({ addTodo, clearCompleted, currentTask, updateCurrentTask }) => (
  <form className="todo-form" onSubmit={ addTodo }>
    <input onChange={ updateCurrentTask } value={ currentTask } />
    <button type="submit">Add Todo</button>
    <button onClick={ clearCompleted }>Clear Completed</button>
  </form>
);

export default TodoForm;