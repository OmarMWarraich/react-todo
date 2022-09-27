import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class TodosList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    );
  }
}
