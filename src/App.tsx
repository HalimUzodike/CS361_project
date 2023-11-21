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

  // const showLogin = () => setCurrentView("login");
  // const showRegister = () => setCurrentView("register");
  // const showHome = () => setCurrentView("home");

//   return (
//     <div className="homepage-container">
//         <div className="top-buttons">
//             <button className="icon-button" onClick={/* Define your back function */}>
//                 <FontAwesomeIcon icon={faArrowLeft} /> Back
//             </button>
//             <button className="icon-button" onClick={/* Define your undo function */}>
//                 <FontAwesomeIcon icon={faUndo} /> Undo
//             </button>
//         </div>

//         <div className="login-button">
//             <button onClick={onNavigate}>
//                 <FontAwesomeIcon icon={faSignInAlt} /> Go to Login
//             </button>
//         </div>

//         {/* Rest of your HomePage content */}
//     </div>
// );

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
