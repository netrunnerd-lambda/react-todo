import React from 'react';

const TodoForm = ({ addTodo, clearCompleted, currentValue, updateCurrent }) => (
  <section className="todo-form">
    <input onChange={ updateCurrent } type="text" value={ currentValue } />
    <button onClick={ addTodo }>Add Todo</button>
    <button onClick={ clearCompleted }>Clear Completed</button>
  </section>
);

export default TodoForm;