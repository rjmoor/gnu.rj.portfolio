import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from '../signup/Signin_form';
import Footer from '../footer/Footer';
import Navigation from '../links/navigation';
import Register from '../signup/Register';
import Main from './Main';
import Basic from './Basic';

function MainPage() {
  const [isSignedIn, setIsSignedIn] = React.useState(true);

  const handleLogin = (username, password) => {
    // Implement your authentication logic here
    console.log('This is a login routine.')
    setIsSignedIn(true);
  };

  return (
    <Router>
      <div className='main-content'>
        <Navigation isSignedIn={isSignedIn} />

        {/* Define Routes */}
        <Routes>
          <Route path="/signin" element={!isSignedIn ? <LoginForm onLogin={handleLogin} /> : <Navigate to="/" />} />
          <Route path="/register" element={!isSignedIn ? <Register /> : <Navigate to="/" />} />
          <Route path="/" element={isSignedIn ? <Basic /> : <Main />} />

          {/* Add more routes as needed */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default MainPage;