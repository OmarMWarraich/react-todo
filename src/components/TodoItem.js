import React from 'react';

function TodoItem(props) {
  const { todo } = props;
  return <li>{todo.title}</li>;
}

export default TodoItem;
