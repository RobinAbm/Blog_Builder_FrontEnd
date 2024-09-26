import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AddBlog from './Components/AddBlog';
import ViewBlog from './Components/ViewBlog';
import IndividualBlog from './Components/IndividualBlog';
import EditBlog from './Components/EditBlog';

function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/viewBlog" element={<ViewBlog />} />
          <Route path="/individualBlog/:id" element={<IndividualBlog />} />
          <Route path="/EditBlog/:id" element={<EditBlog />} />
        </Routes>
   
    </BrowserRouter>
  );
}

export default App;
