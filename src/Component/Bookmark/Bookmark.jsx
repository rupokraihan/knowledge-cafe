import React, { useEffect, useState } from 'react';
import './Bookmark.css'

const Bookmark = ({ readTime }) => {
  const [time, setTime] = useState(readTime);
   useEffect(() => {
     const getReadTimeFromStorage = localStorage.getItem("readTime");
     setTime(getReadTimeFromStorage);
   }, [readTime]);
  return (
    <div>
      <div className="total-read-time">
        <p>total:{time }</p>

      </div>
    </div>
  );
};

export default Bookmark;