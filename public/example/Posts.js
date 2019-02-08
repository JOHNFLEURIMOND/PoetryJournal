import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res =>
      this.setState({
        posts: res.data,
      })
    );
  }

  // Delete posts
  deleteposts = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res =>
      this.setState({
        posts: [...this.state.posts.filter(posts => posts.id !== id)],
      })
    );
  };

  // Add posts
  Addposts = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts?', {
        title,
      })
      .then(res =>
        this.setState({
          posts: [...this.state.posts, res.data],
        })
      );
  };

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={posts.id}>
        <h4>{posts.title}</h4>
        <p>{posts.body}</p>
      </div>
    ));
    return (
      <div
        className="card border-danger mb-3 auto"
        style={{ maxWidth: '10rem;' }}
      >
        <div className="card-header text-center">Posts</div>
        <div className="card-body">
          <h4 className="card-title text-center">Danger card title</h4>
          <p className="card-text text-center">{postItems}</p>
        </div>
      </div>
    );
  }
}

export default Posts;
