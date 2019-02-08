import React, { Component } from 'react';
import Todo from './components/Todo';
import Addtodo from './components/Addtodo';
import Header from './components/Header';
import axios from 'axios';
import './App.css';
import { Animated } from 'react-animated-css';

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(res =>
        this.setState({
          posts: res.data,
        }),
      );
  }

  // Delete Todo
  deleteTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res =>
      this.setState({
        posts: [...this.state.posts.filter(posts => posts.id !== id)],
      }),
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
        }),
      );
  };

  render() {
    return (
      <div class="container">
      <Header />
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <Addtodo Addtodo={this.Addtodo} />{' '}
            <Todo posts={this.state.posts} deleteTodo={this.deleteTodo} />{' '}
            </Animated>
          </div>
          <div class="col-sm-1"></div>
        </div>
      </div>
    );
  }
}

export default App;
