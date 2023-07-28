import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Retrieve the user data from local storage
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData && userData.name === formData.name && userData.password === formData.password) {
      // Redirect to the movie list page upon successful login
      window.location.href = '/';
    } else {
      // Show "Invalid Credentials" message
      setMessage('Invalid Credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
        {message && <div>{message}</div>}
      </form>
    </div>
  );
}

export default Login;
