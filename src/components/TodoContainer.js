import React from 'react';
import TodosList from './TodosList';
import Header from './Header';

// eslint-disable-next-line react/prefer-stateless-function
class TodoContainer extends React.Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };

    handleChange = (id) => {
      this.setState((prevState) => ({
        /* eslint-disable-next-line react/destructuring-assignment */
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      }));
    };

    render() {
      const { todos } = this.state;
      return (
        <div>
          <Header />
          <TodosList todos={todos} handleChangeProps={this.handleChange} />
        </div>
      );
    }
}
export default TodoContainer;
