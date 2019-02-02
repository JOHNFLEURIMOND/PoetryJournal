import React, {
  Component
} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todo extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        deleteTodo={this.props.deleteTodo}
        todo={todo}
      />
    ));
  }
}

//PropTypes
Todo.PropTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todo;
