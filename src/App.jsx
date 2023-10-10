import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Tracker from './pages/TrackerPage';
import HowTo from './pages/HowTo';
import OfflineLoginFallback from './pages/offLineLoginFallback';
import { useLocation } from 'react-router-dom';
import { auth } from './firebase'; // Import your Firebase auth instance

function App() {
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const location = useLocation(); // You can now use location for route-specific logic

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check if the user is logged in
    const user = auth.currentUser;

    if (user) {
      // Check for the stored path in localStorage
      const lastPath = localStorage.getItem('lastPath');

      if (lastPath) {
        // Navigate to the stored path (/tracker in this case)
        navigate(lastPath);
      } else {
        // If no stored path, navigate to the default path (/tracker)
        navigate('/tracker');
      }
    } else {
      // Check if there's a stored path in localStorage
      const lastPath = localStorage.getItem('lastPath');

      if (lastPath) {
        // Navigate to the stored path
        navigate(lastPath);
      }
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={isOnline ? <Login /> : <OfflineLoginFallback />}
        />
        <Route
          path="/signup"
          element={isOnline ? <Signup /> : <OfflineLoginFallback />}
        />
        <Route path="/About"
        element={isOnline ? <About /> : <OfflineLoginFallback />}
        />
        
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/howto" element={<HowTo />} />
      </Routes>
    </>
  );
}

export default App;
