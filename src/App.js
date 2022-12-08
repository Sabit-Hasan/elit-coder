import './App.css';
import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

export const UserContext = createContext();

export default function App() {
  const [popup, setPopup] = useState(false);
  return (
    <UserContext.Provider value={[popup, setPopup]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}


