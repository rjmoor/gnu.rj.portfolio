import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navigation from '../links/navigation';
import Register from '../signup/Register';
import LoginForm from '../signup/Signin_form';
import Basic from './Basic';
import Main from './Main';
import WelcomePage from './Welcome';

function MainPage() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);

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
          <Route path="/signin" element={isSignedIn ? <LoginForm onLogin={handleLogin} /> : <Navigate to="/" />} />
          <Route path="/register" element={isSignedIn ? <Register /> : <Navigate to="/" />} />
          <Route path="/test" element={isSignedIn ? <Basic /> : <Navigate to="/" />} />
          <Route path="/gnu.rj.portfolio" element={isSignedIn ? <Main /> : <WelcomePage />} />

          {/* Add more routes as needed */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default MainPage;
