import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class TodoItem extends Component {
  render() {
    const { todo } = this.props;
    return (
      <li>{todo.title}</li>
    );
  }
}
