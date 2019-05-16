import React from 'react';
import './todo.css';

const Todo = ({ clickHandler, completed, id, task }) => {
  const isComplete = completed ? 'complete' : '';

  return (
    <li className={ `todo-item ${ isComplete }` } onClick={ _ => clickHandler(id) }>
      <div className={ `progress ${ isComplete }` }> </div> <span>{ task }</span>
    </li>
  );
}

export default Todo;