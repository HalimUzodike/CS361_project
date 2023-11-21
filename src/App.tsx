import React, { useState, useEffect } from 'react';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
import HomePage from './HomePage'; // Import your HomePage component

function App() {
  // const [currentForm, setCurrentForm] = useState("login"); // "login", "register", or "home"
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // Track authentication status

  // useEffect(() => {
  //   // Here, you'd check if the user is already logged in (e.g., check auth token)
  //   // If logged in, set isLoggedIn to true and setCurrentForm to "home"
  // }, []);

  // const toggleForm = (formName: string) => {
  //   setCurrentForm(formName);
  // };

  // const handleLoginSuccess = () => {
  //   // This function gets called when the user successfully logs in
  //   setIsLoggedIn(true);
  //   setCurrentForm("home");
  // };

  return (
    <div className="App">
      {
        // !isLoggedIn ?
        // (
        //   currentForm === "login" ?
        //     <Login onFormSwitch={toggleForm} onLoginSuccess={handleLoginSuccess} /> :
        //     <Register onFormSwitch={toggleForm}/>
        // ) :
        <HomePage />
      }
    </div>
  );
}

export default App;
