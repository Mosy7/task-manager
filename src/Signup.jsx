import { useRef, useState } from 'react';
import { useAuth } from './Auth';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/task');
    } catch {
      setError('Failed to create an account');
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <alert>{error}</alert>}
      <form onSubmit={handleSubmit}>
        <input type="email" ref={emailRef} required />
        <input type="password" ref={passwordRef} required />
        <input type="password" ref={passwordConfirmRef} required />
        <button disabled={loading} type="submit">
          Sign Up
        </button>
      </form>
      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default Signup;
