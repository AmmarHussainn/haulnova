import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://trucking-startup.onrender.com/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('authToken', data.token); // Save token properly
        toast.success('Login successful! Redirecting...');
        setTimeout(() => {
          navigate('/selection'); // Redirect to selection screen
        }, 2000); // Delay for 2 seconds to show the success message
      } else {
        setError(data.message || 'Invalid email or password');
        toast.error(data.message || 'Invalid email or password');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <ToastContainer />
      <div className='bg-white p-8 rounded-lg shadow-lg w-96 transform transition-all hover:scale-105'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
        {error && (
          <p className='text-red-500 text-sm mb-4 animate-fade-in'>
            {error}
          </p>
        )}
        <form onSubmit={handleLogin}>
          <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input
              type='email'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none  '
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Password</label>
            <input
              type='password'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none  '
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type='submit'
            className='w-full bg-[#333333] cursor-pointer text-white py-2 rounded-lg hover:bg-[#444444] transition-colors duration-300 flex justify-center items-center'
            disabled={loading}
          >
            {loading ? (
              <div className='animate-spin rounded-full h-6 w-6 border-b-2 border-white'></div>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;