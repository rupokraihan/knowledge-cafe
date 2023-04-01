import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import Blog from "./Component/Blog/Blog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [readTime, setReadTime] = useState(0);

  const handleReadTime = (time) => {
    console.log(time)
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const sum = previousReadTime + time;
      localStorage.setItem("readTime", sum);
      setReadTime(sum);
    } else {
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }
  };

  const [blogTitle, setBlogTitle] = useState([]);
  const handleBookmark = (title) => {
    const exist = blogTitle.find((book) => book == title);
    if (exist) {
      toast.error("Already have Bookmarked", { theme: "colored" });
      
    } else {
      toast.success("Added as Bookmark", { theme: "colored" }); 
      setBlogTitle([...blogTitle, title]);
    }
    
  };

  return (
    <div className="App">
      <Header></Header>
      <ToastContainer></ToastContainer>
      <Blog
        handleReadTime={handleReadTime}
        readTime={readTime}
        handleBookmark={handleBookmark}
        blogTitle={blogTitle}
      ></Blog>
    </div>
  );
}

export default App;
