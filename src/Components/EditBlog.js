import React, { useEffect, useState } from 'react';
import './EditBlog.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditBlog() {
  const { id } = useParams();
  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    author: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.post(`http://localhost:3000/individualBlog/${id}`);
        setBlogData(response.data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3000/editBlog/${id}`, blogData)
      .then(() => {
        alert('Blog edited successfully');
        navigate(-1); 
      })
      .catch(() => {
        alert('Failed to edit blog');
      });
  };

  return (
    <div className="edit-blog-main">
      <h2 style={{textAlign:'center'}}>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="edit-blog-input">
          <label>Title</label>
          <input type="text" className="form-control" id="title" name="title" value={blogData.title} onChange={handleChange} required />
        </div>
        <div className="edit-blog-textarea">
          <label>Content</label>
          <textarea className="form-control" id="content" name="content" value={blogData.content} onChange={handleChange} rows="5" required></textarea>
        </div>
        <div className="edit-blog-input">
          <label>Author</label>
          <input type="text" className="form-control" id="author" name="author" value={blogData.author} onChange={handleChange} required />
        </div>
        <button type="submit" className="edit-blog-btn">Submit</button>
      </form>
      <div>
        <button className="edit-blog-btn" style={{marginTop:'2rem'}} onClick={() => navigate(-1)}>Cancel</button>
      </div>
    </div>
  );
}

export default EditBlog;
