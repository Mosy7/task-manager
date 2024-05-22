import { useRef, useState } from 'react';
import { useAuth } from './Auth';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/task');
    } catch {
      setError('Failed to log in');
    }

    setLoading(false);
  };

  return (
    <div className='login'>
      <h2>Log In</h2>
      {error && <alert>{error}</alert>}
      <form onSubmit={handleSubmit}>
        <input type="email" ref={emailRef} required />
        <input type="password" ref={passwordRef} required />
        <button disabled={loading} type="submit">
          Log In
        </button>
      </form>
      <div>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
