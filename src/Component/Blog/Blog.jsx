import React, { useEffect, useState } from "react";
import Answer from "../Answer/Answer";
import Bookmark from "../Bookmark/Bookmark";
import Container from "../Container/Container";
import "./Blog.css";

const Blog = ({ handleReadTime, readTime, handleBookmark, blogTitle }) => {
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
              handleBookmark={handleBookmark}
            ></Container>
          ))}
        </div>
        <div className="bookmark-side col-lg-3">
          <Bookmark readTime={readTime} blogTitle={blogTitle}></Bookmark>
        </div>
      </div>
      <Answer></Answer>
    </div>
  );
};

export default Blog;
