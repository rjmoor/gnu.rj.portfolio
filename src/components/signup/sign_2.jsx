import React, { useState } from 'react';
import LoginForm from "./Signin_form";
// Import other components like Logo, Register, Navigation, Main, Footer if they exist

function MainPage() {
    const [route, setRoute] = useState('signin');
    const [isSignedIn, setIsSignedIn] = useState(false);
    
    const handleLogin = (username, password) => {
        // Authentication logic goes here
        // For now, assuming authentication is successful
        setIsSignedIn(true);
        setRoute('home');
    };

    const onRouteChange = (newRoute) => {
        if (newRoute === 'signout') {
            setIsSignedIn(false);
            setRoute('signin');
        } else {
            setRoute(newRoute);
        }
    };

    let content;
    if (route === 'signin' || route === 'signout') {
        content = (
            <div>
                {/* Assume Logo and Signin components exist */}
                <Logo />
                <LoginForm onLogin={handleLogin} />
            </div>
        );
    } else if (route === 'register') {
        // Assume Register component exists
        content = <Register onRouteChange={onRouteChange} />;
    } else {
        // Assume Navigation, Main, and Footer components exist
        content = (
            <div>
                <Navigation onRouteChange={onRouteChange} />
                <Main />
                <Footer />
            </div>
        );
    }

    return (
        <>
            <div className='main-content'>
                {content}
                <h1>Master Rahm is here to win in 2024</h1>
            </div>
        </>
    );
}

export default MainPage;
