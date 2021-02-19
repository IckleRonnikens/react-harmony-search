  
import React from 'react';

const FanfictionPost = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          <h2>{post.title}</h2><hr /><br />
          {post.summary}
        </li>
      ))}
    </ul>
  );
};

export default FanfictionPost;