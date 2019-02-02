import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = ()=> {
    return {
      borderBottom: '1px #ccc dotted',
      padding: '10 px ',
      margin: '3px',
      background: '#f4f4f4',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
     {title}{' '}
          <button
            style={btnStyle}
            onClick={this.props.deleteTodo.bind(this, id)}
          >
            X{' '}
          </button>{' '}
        </p>{' '}
      </div>
    );
  }
}

//PropTypes
TodoItem.PropTypes = {
  todos: PropTypes.object.isRequired,
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '1.5px 3px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
};

export default TodoItem;
