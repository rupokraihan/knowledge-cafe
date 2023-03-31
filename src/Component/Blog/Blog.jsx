import React, { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import Container from '../Container/Container';
import './Blog.css'

const Blog = ({ handleReadTime,readTime }) => {
  const [blogContainers, setBlogContainers] = useState([]);
  useEffect(() => {
    fetch("information.json")
      .then((res) => res.json())
      .then((data) => setBlogContainers(data));
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="blog-post col-lg-9">
          {blogContainers.map((container) => (
            <Container
              key={container.id}
              container={container}
              handleReadTime={handleReadTime}
            ></Container>
          ))}
        </div>
        <div className="bookmark-side col-lg-3">
          <Bookmark readTime={readTime}></Bookmark>
        </div>
      </div>
    </div>
  );
};

export default Blog;