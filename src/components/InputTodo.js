import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class InputTodo extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
      title: '',
    };

    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      /* eslint-disable-next-line react/destructuring-assignment */
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    };

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add todo..."
            /* eslint-disable-next-line react/destructuring-assignment */
            value={this.state.title}
            name="title"
            onChange={this.onChange}
          />
          <button type="submit">Submit</button>
        </form>
      );
    }
}
export default InputTodo;
