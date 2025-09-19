
import React, { useState } from 'react';
import './Contact1.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Form Submitted Successfully!');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div 
            className="card shadow-lg p-4"
            style={{ borderRadius: '20px', background: 'linear-gradient(145deg, #e0f7fa, #fff)' }}
          >
            <h2 
              className="text-center mb-4" 
              style={{ background: 'linear-gradient(90deg, #0d6efd, #6610f2)', WebkitBackgroundClip: 'text', color: 'transparent', fontWeight: '700' }}
            >
            Connect with College For More Informatiom
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '12px', padding: '10px' }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '12px', padding: '10px' }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone </label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '12px', padding: '10px' }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Write your message here..."
                  style={{ borderRadius: '12px', padding: '10px' }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-100"
                style={{
                  background: 'linear-gradient(90deg, #0d6efd, #6610f2)',
                  color: '#fff',
                  fontWeight: '600',
                  borderRadius: '12px',
                  padding: '10px',
                  transition: '0.3s'
                }}
                onMouseOver={(e) => e.target.style.background = 'linear-gradient(90deg, #6610f2, #0d6efd)'}
                onMouseOut={(e) => e.target.style.background = 'linear-gradient(90deg, #0d6efd, #6610f2)'}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;