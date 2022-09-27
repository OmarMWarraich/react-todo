import React, { Component } from 'react';
import styles from './TodoItem.module.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class TodoItem extends Component {
  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    /* eslint-disable-next-line react/destructuring-assignment */
    const { completed, id, title } = this.props.todo;

    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          /* eslint-disable-next-line react/destructuring-assignment */
          onChange={() => this.props.handleChangeProps(id)}
        />
        {/* eslint-disable */}
        <button
          type="button"
          onClick={() => this.props.deleteTodoProps(id)}
          /* eslint-enable */
        >
          Delete
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </li>
    );
  }
}
