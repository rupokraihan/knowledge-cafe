import React from 'react';
import './Container.css'

const Container = (props) => {
  const { authorName, blogTitle, blogCoverImage, authorImage, readTime, publishDate } = props.container;
  return (
    <div>
      <img className="cover-image" src={blogCoverImage} alt="" />
      <img className="author-image" src={authorImage} alt="" />
      <h3>{authorName}</h3>
      <p>{publishDate}</p>
      <p>{readTime}</p>
      <h1>{blogTitle}</h1>
    </div>
  );
};

export default Container;