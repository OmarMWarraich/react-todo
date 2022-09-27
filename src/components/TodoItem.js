import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class TodoItem extends Component {
  render() {
    const { todo } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => console.log('You clicked me')}
        />
        {todo.title}
      </li>
    );
  }
}
