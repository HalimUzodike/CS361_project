import React, { useState, useEffect } from 'react';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
import HomePage from './HomePage'; // Import your HomePage component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faArrowLeft, faUndo } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [currentView, setCurrentView] = useState("home"); // "login", "register", "home"

  

  const handleLoginSuccess = (userData: any) => {
    // Logic after successful login
    setCurrentView("home");
  };



  const navigateTo = (view: string) => {
    setCurrentView(view);
  };;



return (
  <div className="App">
    {currentView === "home" && <HomePage onNavigate={() => navigateTo("login")} />}
    {currentView === "login" && 
      <Login 
        onFormSwitch={navigateTo}
        onLoginSuccess={handleLoginSuccess}
      />
    }
    {currentView === "register" && <Register onFormSwitch={navigateTo} />}
  </div>
);

 
}

export default App;
