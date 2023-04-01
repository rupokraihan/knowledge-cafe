import React, { useEffect, useState } from "react";
import "./Bookmark.css";

const Bookmark = ({ readTime, blogTitle }) => {
  
  const [time, setTime] = useState(readTime);
  useEffect(() => {
    const getReadTimeFromStorage = localStorage.getItem("readTime");
    setTime(getReadTimeFromStorage);
  }, [readTime]);

  return (
    <div className="bookmark">
      <div>
        <p className="total-time">Spent time on read : {time ? time : 0}</p>
      </div>
      <div className="bookmark-container">
        <div>
          <p className="bookmarked-blogs">
            Bookmarked Blogs : {blogTitle.length}
          </p>
        </div>
        {blogTitle.map((book) => (
          <div className="bookmark-title">{book}</div>
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
