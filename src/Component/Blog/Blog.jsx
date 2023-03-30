import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import './Blog.css'

const Blog = () => {
  const [blogContainers, setBlogContainers] = useState([]);
  useEffect(() => {
    fetch('information.json') 
    .then(res => res.json())
    .then(data =>setBlogContainers(data))
  },[])
  return (
    <div className="container">
      <div className="row">
        <div className="blog-post col-lg-9">
          {blogContainers.map((container) => (
            <Container
              key={container.id}
              container={container}
            ></Container>
          ))}
        </div>
        <div className="bookmark-side col-lg-3">
          <h1>Hello Bookmark</h1>
        </div>
      </div>
    </div>
  );
};

export default Blog;