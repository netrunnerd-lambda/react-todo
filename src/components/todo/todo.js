import React from 'react';

const Todo = ({ completed, text }) => <li className={ completed ? 'todo-item complete' : 'todo-item' }>{ text }</li>;

export default Todo;