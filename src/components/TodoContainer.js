import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

// eslint-disable-next-line react/prefer-stateless-function
class TodoContainer extends React.Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
      todos: [],
    };

    componentDidMount() {
      const temp = localStorage.getItem('todos');
      const loadedTodos = JSON.parse(temp);
      if (loadedTodos) {
        this.setState({
          todos: loadedTodos,
        });
      }
    }

    componentDidUpdate(prevProps, prevState) {
      /* eslint-disable-next-line react/destructuring-assignment */
      if (prevState.todos !== this.state.todos) {
        /* eslint-disable-next-line react/destructuring-assignment */
        const temp = JSON.stringify(this.state.todos);
        localStorage.setItem('todos', temp);
      }
    }

    componentWillUnmount() {
      console.log('Cleaning up...');
    }

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
        id: uuidv4(),
        title,
        completed: false,
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
      });
        /* eslint-enable */
    };

    setUpdate = (updatedTitle, id) => {
      this.setState({
        /* eslint-disable */
        todos: this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.title = updatedTitle;
          }
          return todo;
        }),
        /* eslint-enable */
      });
    }

    render() {
      const { todos } = this.state;
      return (
        <div className="container">
          <div className="inner">
            <Header />
            <InputTodo addTodoProps={this.addTodoItem} />
            <TodosList
              todos={todos}
              handleChangeProps={this.handleChange}
              deleteTodoProps={this.delTodo}
              setUpdate={this.setUpdate}
            />
          </div>
        </div>
      );
    }
}
export default TodoContainer;
