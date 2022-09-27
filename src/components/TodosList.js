import React, { Component } from 'react';
import TodoItem from './TodoItem';

// eslint-disable-next-line react/prefer-stateless-function
export default class TodosList extends Component {
  render() {
    return (
      <ul>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            /* eslint-disable-next-line react/destructuring-assignment */
            handleChangeProps={this.props.handleChangeProps}
            /* eslint-disable-next-line react/destructuring-assignment */
            deleteTodoProps={this.props.deleteTodoProps}
          />
        ))}
      </ul>
    );
  }
}
