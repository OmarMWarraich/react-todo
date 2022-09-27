import React, { Component } from 'react';
import TodoItem from './TodoItem';

// eslint-disable-next-line react/prefer-stateless-function
export default class TodosList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
}
