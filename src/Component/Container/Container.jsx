import React from 'react';
import './Container.css'

const Container = (props) => {
  const { authorName, blogTitle, blogCoverImage, authorImage, readTime, publishDate } = props.container;
  return (
    <div>
      <img src={blogCoverImage} alt="" />
      <img className='abc' src={authorImage} alt="" />
    </div>
  );
};

export default Container;