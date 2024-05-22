
import { useAuth } from './Auth';
import { useNavigate } from 'react-router-dom';

const Task = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch {
      // handle error
    }
  };

  return (
    <div>
      <h2>Welcome, {currentUser.email}</h2>
      <button onClick={handleLogout}>Log Out</button>
      {/* Your task management logic here */}
    </div>
  );
};

export default Task;
