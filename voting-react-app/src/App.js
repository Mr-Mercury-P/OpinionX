import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import necessary components
import LoginPage from './components/Login'; // Import LoginPage
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/login" element={<LoginPage />} />  {/* Login page route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
