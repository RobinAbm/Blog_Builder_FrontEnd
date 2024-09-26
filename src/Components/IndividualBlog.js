import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './IndividualBlog.css';

function IndividualBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
const navigate = useNavigate()
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.post(`http://localhost:3000/individualBlog/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlog();
  }, [id]);


  if (!blog) {
    return null; 
  }

  const deletBlog = ()=>{
    axios.post(`http://localhost:3000/deleteBlog/${id}`)
    .then((data)=>{
      alert(' blog Deleted')
      navigate(-1)
    })
    .catch(()=>{
      alert('Failed')
    })
  }

  return (
    <div className="individual-blog-container">
      <h2 className="individual-blog-heading">{blog.title}</h2>
      <p className="individual-blog-author">By {blog.author}</p>
      <p className="individual-blog-date">Published on {new Date(blog.date).toLocaleDateString()}</p>
      <div className="individual-blog-content">
        <p>{blog.content}</p>
      </div>
      <button type="submit" className="delete-blog-btn" onClick={deletBlog}>Delete</button>
      <button type="submit" className="delete-blog-btn"> <Link to={`/editBlog/${blog._id}`} style={{textDecoration:'none',color:'white'}}>Edit</Link></button>
      <button className="delete-blog-btn" style={{marginTop:'2rem'}} onClick={(()=>{navigate(-1)})}>Back</button>
     
    </div>
  );
}

export default IndividualBlog;
