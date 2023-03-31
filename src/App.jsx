import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Component/Header/Header';
import Blog from './Component/Blog/Blog';

function App() {
  const [readTime, setReadTime] = useState(0);

  const handleReadTime = (time) => {
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

  return (
    <div className="App">
      <Header></Header>
      <Blog handleReadTime={handleReadTime} readTime={readTime}></Blog>
    </div>
  );
}

export default App
