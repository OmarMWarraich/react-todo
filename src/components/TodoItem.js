import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class TodoItem extends Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          /* eslint-disable-next-line react/destructuring-assignment */
          checked={this.props.todo.completed}
          /* eslint-disable-next-line react/destructuring-assignment */
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        {/* eslint-disable */}
        <button
          type="button"
          onClick={() => this.props.deleteTodoProps(this.props.todo.id)}
          /* eslint-enable */
        >
          Delete
        </button>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        {this.props.todo.title}
      </li>
    );
  }
}
