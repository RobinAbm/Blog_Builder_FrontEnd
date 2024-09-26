import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ViewBlog.css';

function ViewBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    axios.post('http://localhost:3000/viewblog') 
      .then(response => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      });
  };

  return (
    <div className="view-blog-container">
      <h2 className="view-blog-heading">All Blogs</h2>
      {loading ? (
        <p>Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <div className="blog-list">
          {blogs.map(blog => (
            <div key={blog._id} className="blog-item">
              <Link to={`/individualBlog/${blog._id}`} className="blog-title-link">
                <h3 className="blog-title">{blog.title}</h3>
              </Link>
              <p className="blog-author">By {blog.author}</p>
              <p className="blog-date">Published on {new Date(blog.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewBlog;
