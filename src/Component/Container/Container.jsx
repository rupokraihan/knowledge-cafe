import React from "react";
import "./Container.css";

const Container = (props) => {
  const {
    authorName,
    blogTitle,
    blogCoverImage,
    authorImage,
    readTime,
    publishDate,
  } = props.container;
  return (
    <div>
      <img className="cover-image" src={blogCoverImage} alt="" />
      <div className="container-info d-flex justify-content-between align-items-center ">
        <div className="d-flex gap-4">
          <div>
            <img className="author-image" src={authorImage} alt="" />
          </div>
          <div>
            <h3 className="author-name">{authorName}</h3>
            <p className="publish-date">{publishDate}</p>
          </div>
        </div>
        <div>
          <p className="read-time">{readTime}</p>
        </div>
      </div>
      <h1>{blogTitle}</h1>
    </div>
  );
};

export default Container;
