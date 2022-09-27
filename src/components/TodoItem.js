import React, { Component } from 'react';
import styles from './TodoItem.module.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class TodoItem extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
      editing: false,
    }

    handleEditing = () => {
      this.setState({
        editing: true,
      });
    }

    handleUpdatedDone = (event) => {
      if (event.key === 'Enter') {
        this.setState({ editing: false });
      }
    }

    render() {
      const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };
      /* eslint-disable-next-line react/destructuring-assignment */
      const { completed, id, title } = this.props.todo;

      const viewMode = {};
      const editMode = {};

      /* eslint-disable-next-line react/destructuring-assignment */
      if (this.state.editing) {
        viewMode.display = 'none';
      } else {
        editMode.display = 'none';
      }

      return (
        <li className={styles.item}>
          <div onDoubleClick={this.handleEditing} style={viewMode}>
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
            >
              Delete
            </button>
            <span style={completed ? completedStyle : null}>
              {title}
            </span>
          </div>
          <input 
            type="text" 
            style={editMode} 
            className={styles.textInput} 
            value={title} onChange={(e) => { this.props.setUpdate(e.target.value, id); }}
            onKeyDown={this.handleUpdatedDone}
             />
          {/* eslint-enable */}
        </li>
      );
    }
}
