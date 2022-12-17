import './App.css';
import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NavScrollBar from './components/Home/NavScrollBar';
import ContestPage from './components/ContestPage/ContestPage';
import Dashboard from './components/Dashboard/Dashboard';
import LeaderBoard from './components/Dashboard/LeaderBoard';

export const UserContext = createContext();

export default function App() {
  const [popup, setPopup] = useState({
    signup: false,
    login: false
  });

  const [authentication, setAuthentication] = useState({
    loggedIn: false,
    email: undefined,
    displayName: undefined,
    photoUrl: undefined,
  })

  return (
    <UserContext.Provider value={[popup, setPopup, authentication, setAuthentication]}>
      <BrowserRouter>
      <NavScrollBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/contest" element={<ContestPage />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/leaderBoard" element={<LeaderBoard />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}


