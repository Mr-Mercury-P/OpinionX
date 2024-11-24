import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import LoginPage from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
