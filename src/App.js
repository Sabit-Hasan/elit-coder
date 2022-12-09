import './App.css';
import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NavScrollBar from './components/Home/NavScrollBar';

export const UserContext = createContext();

export default function App() {
  const [popup, setPopup] = useState(false);
  return (
    <UserContext.Provider value={[popup, setPopup]}>
      <BrowserRouter>
      <NavScrollBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}


