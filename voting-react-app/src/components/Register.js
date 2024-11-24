import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Placeholder for database logic
  const registerUserInDatabase = async ({ username, email, password }) => {
    // Simulate a database call (replace with actual API/database logic)
    console.log('Registering user in database...', { username, email, password });
    // Example: Call your backend API here
    // const response = await fetch('/api/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ username, email, password }),
    // });
    // return await response.json();

    // Mocking successful database response
    return { success: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if(password !== confirmPassword) {
      setError('Passwords do not match!');
      setSuccess('');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setSuccess('');
      return;
    }

    const mockExistingEmails = ['test@example.com', 'user@example.com'];
    if (mockExistingEmails.includes(email)) {
      setError('Email is already registered!');
      setSuccess('');
      return;
    }

    try {
      const result = await registerUserInDatabase({ username, email, password });
      if (result.success) {
        setError('');
        setSuccess('Registration successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError('Registration failed. Please try again.');
        setSuccess('');
      }
    } catch (err) {
      setError('An error occurred while registering. Please try again.');
      setSuccess('');
      console.error(err);
    }
  };

  const isFormIncomplete =
    !formData.username || !formData.email || !formData.password || !formData.confirmPassword;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card">
            <div className="card-header text-center">
              <h3>User Registration</h3>
            </div>
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                    <button
                        disabled={isFormIncomplete}
                        type="submit"
                        className="btn btn w-100"
                        style={{
                            backgroundColor: '#343a40',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '5px',
                        }}
                    >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
