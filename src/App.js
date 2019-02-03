import React, { Component } from 'react';
import Todo from './components/Todo';
import Addtodo from './components/Addtodo';
import Header from './components/Header';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

class App extends Component {
  state = {
    posts: [],
  };

  // Delete Todo
  deleteTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        posts: [...this.state.posts.filter(posts => posts.id !== id)],
      })
    );
  };

  // Add Todo
  Addtodo = (title, body) => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts?', {
        title,
        body,
      })
      .then(res =>
        this.setState({
          posts: [...this.state.posts, res.data],
        })
      );
  };

  render() {
    return (
      <Provider store={store}>
      <div className='App'>
        <div className='container'>
          <Header />
          <Addtodo Addtodo={this.Addtodo} />{' '}
          <Todo
            posts={this.state.posts}
            deleteTodo={this.deleteTodo}
          />{' '}
        </div>{' '}
      </div>
      </Provider>
    );
  }
}

export default App;
