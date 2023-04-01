import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./Container.css";

const Container = ({ container, handleReadTime, handleBookmark }) => {
  const {
    authorName,
    blogTitle,
    blogCoverImage,
    authorImage,
    readTime,
    publishDate,
  } = container;

  return (
    <div>
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
          <div className="d-flex gap-3 align-items-center">
            <p className="read-time">{readTime} min read</p>
            <button
              className="icon-btn"
              onClick={() => handleBookmark(blogTitle)}
            >
              <FontAwesomeIcon className="icon" icon={faBookmark} />
            </button>
          </div>
        </div>
        <h1>{blogTitle}</h1>
        <p className="hash-tag">#beginners #programming</p>

        <p>
          <button
            className="mark-read-time"
            onClick={() => handleReadTime(readTime)}
          >
            Mark as read{" "}
          </button>
        </p>
      </div>
      
      
    </div>
  );
};

export default Container;
