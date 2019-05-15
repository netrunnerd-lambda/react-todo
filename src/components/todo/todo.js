import React from 'react';

const Todo = ({ completed, id, markComplete, task }) => {
  const classList = completed ? 'todo-item complete' : 'todo-item';

  return <li className={ classList } onClick={ _ => markComplete(id) }>{ task }</li>
}

export default Todo;