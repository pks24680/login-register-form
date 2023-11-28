// Register.jsx
import React, { useState } from 'react';

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password: pass }),
      });

      if (response.ok) {
        console.log('Registration successful');
        // Add logic to handle successful registration (e.g., redirect to a login page)
      } else {
        console.log('Registration failed');
        // Add logic to handle failed registration (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          value={name}
          name="name"
          id="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">email</label>
        <input
          value={email}
          type="email"
          placeholder="example@example.com"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch('login')}
      >
        Already have an account? Login here
      </button>
    </div>
  );
};
