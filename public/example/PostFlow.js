import React, { Component } from 'react';

class PostFlow extends Component {
  state = {
    posts: [],
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.Addposts(this.state.title);
    this.setState({
      title: '',
    });
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{
          display: 'flex',
        }}
      >
        <input
          type='text'
          name='title'
          onChange={this.onChange}
          value={this.state.title}
          placeholder='Name it!'
          style={{
            flex: '10',
            padding: '5px',
          }}
        />

        <textarea
          type='text'
          name='body'
          onChange={this.onChange}
          value={this.state.body}
          placeholder='Let It Flow Like Water!'
          style={{
            flex: '10',
            padding: '5px',
          }}
        />

        <input
          type='Submit'
          name='Submit'
          value='Submit'
          className='btn'
          style={{
            flex: '1',
          }}
        />{' '}
      </form>
    );
  }
}

export default PostFlow;
