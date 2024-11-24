import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="mb-4">About Us</h2>
          <p className="lead">
            Welcome to our voting app! Our platform is designed to make voting 
            easy, transparent, and accessible for everyone. We believe in empowering 
            communities by providing a reliable way to make collective decisions.
          </p>
          <p>
            Whether you're organizing a community poll, a team decision, or 
            a casual survey, we've got you covered. Our app is built with the 
            latest technology to ensure security and usability.
          </p>
          <button className="btn btn-primary mt-3"
          style={{
            backgroundColor: '#343a40',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '5px',
            }}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
