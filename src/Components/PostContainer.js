import React from 'react'


function PostsContainer({ children }) {
  return (
    <div className="container">
      <div className="row g-3 g-xxl-4">{children}</div>
    </div>
  );
}

export default PostsContainer;