import React, { useState } from 'react'
import './AddBlog.css'
import axios from  'axios'
import { useNavigate } from 'react-router-dom';

function AddBlog() {
  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    author: '',
    // date: ''
  });
const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  console.log(blogData); 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3000/addblog`,blogData)
    .then((data)=>{
      alert('New blog added')
      navigate('/')
    })
    .catch(()=>{
      alert('Failed')
    })
    console.log(blogData); 
  };

  return (
    <div className="add-blog-main">
    <h2 style={{textAlign:'center'}}>Add New Blog</h2>
    
    <form onSubmit={handleSubmit}>
      <div className="add-blog-input">
        <label >Title</label>
        <input type="text" className="form-control" id="title" name="title" value={blogData.title} onChange={handleChange} required />
      </div>
      <div className="add-blog-textarea">
        <label>Content</label>
        <textarea className="form-control" id="content" name="content" value={blogData.content} onChange={handleChange} rows="5" required></textarea>
      </div>
      <div className="add-blog-input">
        <label >Author</label>
        <input type="text" className="form-control" id="author" name="author" value={blogData.author} onChange={handleChange} required />
      </div>
      {/* <div className="add-blog-input">
        <label>Date</label>
        <input type="date" className="form-control" id="date" name="date" value={blogData.date} onChange={handleChange} required />
      </div> */}
      <button type="submit" className="add-blog-btn">Submit</button>
    </form>
  </div>
  );
}


export default AddBlog