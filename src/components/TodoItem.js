import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/postActions';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    const { id, title, body } = this.props.posts;

    return (
      <div
        className='card border-danger mb-3 auto'
        style={{ maxWidth: '10rem;' }}
      >
        <div className='card-header text-center text-danger'>{title}</div>
        <div className='card-body'>
          <p className='card-text text-center '>{body}</p>
          <button type='button' style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)} className='btn btn-outline-danger'>X</button>{' '}
        </div>
      </div>
    );
  }
}

//PropTypes
TodoItem.PropTypes = {
  todos: PropTypes.object.isRequired,
};

const btnStyle = {
  float: 'right',
};

export default connect(null, { fetchPosts })(TodoItem);
