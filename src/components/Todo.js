import React, {
  Component
} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todo extends Component {
  render() {
    return this.props.posts.map(posts => (
      <TodoItem
        key={posts.id}
        deleteTodo={this.props.deleteTodo}
        posts={posts}
      />
    ));
  }
}

//PropTypes
Todo.PropTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todo;
