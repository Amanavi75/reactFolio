import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Login"
import Dashboard from './pages/Dashboard';
import { Routes,Route } from 'react-router-dom'
import SignupForm from './components/SignupForm';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

   
  return (
    <>
      <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/login" element= {<Login setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/signup" element= {<SignupForm setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/dashboard" element= {<Dashboard/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
