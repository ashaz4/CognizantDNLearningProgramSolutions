import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Fetch and load posts
  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        const posts = data.map(item => new Post(item.id, item.title, item.body));
        this.setState({ posts });
      })
      .catch(error => {
        this.setState({ hasError: true });
        alert('Error fetching posts: ' + error.message);
      });
  }

  // Called once after component mounts
  componentDidMount() {
    this.loadPosts();
  }

  // Error boundary method
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert("A component error occurred: " + error);
  }

  render() {
  const { posts, hasError } = this.state;

  if (hasError) {
    return <h3>Something went wrong.</h3>;
  }

  return (
    <div>
      <h2>Posts</h2>
      {posts.length === 0 && <p>Loading...</p>}

      {posts.map(post => (
        <div 
          key={post.id} 
          style={{ 
            border: '1px solid #ccc', 
            padding: '15px', 
            marginBottom: '10px', 
            borderRadius: '5px' 
          }}
        >
          <h4 style={{ marginBottom: '8px' }}>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

}

export default Posts;
