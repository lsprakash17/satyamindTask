import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    profession: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save the form data to local storage or send it to the server for storage
    // (Note: Password should be hashed before storage)
    localStorage.setItem('user', JSON.stringify(formData));
    // Redirect to the login page after signup
    window.location.href = '/login';
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Profession:</label>
          <select name="profession" value={formData.profession} onChange={handleInputChange} required>
            <option value="">Select Profession</option>
            <option value="Engineer">Engineer</option>
            <option value="Doctor">Doctor</option>
            <option value="Teacher">Teacher</option>
            {/* Add other options here */}
          </select>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
