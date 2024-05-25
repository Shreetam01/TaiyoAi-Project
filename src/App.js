import React from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import "./App.css"
import Navbar from './Navbar/Navbar';
import ContactPages from './ContactPages';

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<ContactPages/>} />
        <Route path='/Charts-and-Maps' element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
