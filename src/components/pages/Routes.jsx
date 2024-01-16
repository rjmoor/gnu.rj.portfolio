import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SplashPage from './components/SplashPage'; // Your splash page component
import WelcomeMaster from './welcomeMaster'; // Your main welcome page
import SignIn from '../signup/sign_3'; // Sign-in component
import SignUp from './components/SignUp'; // Sign-up component

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleAuthentication = (status) => {
        setIsAuthenticated(status);
    };

    return (
        <Router>
        <Switch>
            <Route exact path="/">
            {isAuthenticated ? <Redirect to="/welcome" /> : <SplashPage />}
            </Route>
            <Route path="/signin">
            <SignIn onAuthenticate={handleAuthentication} />
            </Route>
            <Route path="/signup">
            <SignUp onAuthenticate={handleAuthentication} />
            </Route>
            <Route path="/welcome">
            {isAuthenticated ? <WelcomeMaster /> : <Redirect to="/" />}
            </Route>
            {/* Add routes for your AEM, Front-end, and Back-end projects */}
        </Switch>
        </Router>
    );
}

    export default App;
