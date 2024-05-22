import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Auth'; 
import PrivateRoute from './PrivateRoute'; 
import Task from './Task';
import Login from './Login';
import Signup from './Signup';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes >
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} /> {/* Default route */}
          <Route 
            path="/task" 
            element={
              <PrivateRoute>
                <Task />
              </PrivateRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
