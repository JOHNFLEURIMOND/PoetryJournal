import { FETCH_POSTS, NEW_POSTS } from './actions/types';

export const fetchPosts = () => dispatch => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(res =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts,
        }));
  };
