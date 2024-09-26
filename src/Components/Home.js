import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
   
   <div className="Home-page">
      <h1>Welcome to Blog</h1>
      <div className="Home-options">
        <Link to="/viewBlog" className="Home-option">
          View Existing Blogs
        </Link>
        <Link to="/addBlog" className="Home-option">
          Add New Blog
        </Link>
      </div>
    </div>
  
  </div>
);
};

export default Home;