import React from 'react';
import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, 
  Navigate, 
  Outlet
} from "react-router-dom";
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Routes>
            <Route path="/home/*" element={<Home />} />
            <Route path="/" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
