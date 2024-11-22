import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your login logic here, e.g., API call
    if (email && password) {
      // Redirect or handle successful login
      console.log('Login successful');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="row justify-content-center w-100">
        <div className="col-md-4 col-sm-6 col-12">
          <div className="card shadow-sm rounded">
            <div className="card-body p-4">
              <h3 className="text-center mb-4">Login</h3>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid">
                    <button
                        type="submit"
                        className="btn btn-sm"
                        style={{
                        backgroundColor: '#343a40',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '5px',
                        }}
                    >
                        Login
                    </button>
                </div>

              </form>
              <div className="mt-3 text-center" style={{ color: '#343a40' }}>
                <p>Don't have an account? <a href="/register" style={{ color: '#343a40' }}>Register here</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
