import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import AnimatedButton from '../components/AnimatedButton';
import LoadingSpinner from '../components/LoadingSpinner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    // Mock API call
    if (email === 'test@test.com' && password === 'password123') {
      navigate("/dashboard");
    } else {
      setError('Invalid email or password');
    }
  };

  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false);
    }, 2000); // Change this timeout as needed
  }, []);

  return (
    <>
    {isLoading ? <LoadingSpinner /> : (
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 w-80 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <AnimatedButton title='Login' />
      </form>
    </div>
     )}
    </>
  );
};

export default Login;
