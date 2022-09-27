import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class TodoItem extends Component {
  render() {
    // const { todo } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          /* eslint-disable-next-line react/destructuring-assignment */
          checked={this.props.todo.completed}
          /* eslint-disable-next-line react/destructuring-assignment */
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        {/* eslint-disable-next-line react/destructuring-assignment */}
        {this.props.todo.title}
      </li>
    );
  }
}
