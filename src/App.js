import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import LiveVideoFeed from './pages/LiveVideoFeed';
import Settings from './pages/Settings';
import Statistics from './pages/Statistics';
import NotificationPage from './pages/NotificationPage';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/employees" element={<Employees />} />
          <Route path="/live-video-feed" element={<LiveVideoFeed />} />
          <Route path="/notification-page" element={<NotificationPage />} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/statistics" element={<Statistics/>} />
          <Route path="/profile" element={<Profile />} />
        </Route> 
      </Routes>
    </Router>
  );
};

export default App;
