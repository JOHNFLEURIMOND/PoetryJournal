import React, { Component } from 'react';

class Addtodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.Addtodo(this.state.title && this.state.body);
    this.setState({
      title: '',
      body: '',
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
          placeholder='Add Stuff You Need To Do Fool!'
          style={{
            flex: '10',
            padding: '5px',
          }}
        />
        <input
          type='text'
          name='body'
          onChange={this.onChange}
          value={this.state.body}
          placeholder='Add Stuff You Need To Do Fool!'
          style={{
            flex: '10',
            padding: '5px',
          }}
        />
        <button type='Submit'
        name='Submit'
        value='Submit'
        style={{
          flex: '1',
        }}
        className="btn btn-info">Submit</button>

{' '}
      </form>
    );
  }
}

export default Addtodo;
