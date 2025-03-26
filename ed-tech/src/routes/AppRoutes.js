import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Dashboard.jsx';
import CourseCreate from '../pages/CourseCreate';
import CourseView from '../pages/CourseView';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

const AppRoutes = () => {
  // const { user } = useAuth();
  
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses/create" element={<CourseCreate />} />
      <Route path="/courses/:id" element={<CourseView />} />
      
      {/* Protected routes */}
      {/* <Route 
        path="/dashboard" 
        element={user ? <Dashboard /> : <Navigate to="/login" />} 
      />
      <Route 
        path="/courses/create" 
        element={user?.role === 'teacher' ? <CourseCreate /> : <Navigate to="/dashboard" />} 
      />
      <Route 
        path="/courses/:id" 
        element={user ? <CourseView /> : <Navigate to="/login" />} 
      /> */}
    </Routes>
  );
};

export default AppRoutes;