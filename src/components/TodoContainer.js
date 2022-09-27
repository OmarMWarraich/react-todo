import React from 'react';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

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

    delTodo = (id) => {
      this.setState({
        todos: [
        /* eslint-disable */
          ...this.state.todos.filter((todo) => todo.id !== id),
        /* eslint-enable */
        ],
      });
    };

    addTodoItem = (title) => {
      /* eslint-disable */
      const newTodo = {
        id: 4,
        title,
        completed: false,
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
      });
        /* eslint-enable */
    };

    render() {
      const { todos } = this.state;
      return (
        <div>
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
          />
        </div>
      );
    }
}
export default TodoContainer;
