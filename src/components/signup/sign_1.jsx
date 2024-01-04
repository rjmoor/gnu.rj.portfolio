import React, { useState } from 'react';
import LoginForm from "./Signin_form";
import Logo from './Logo'; // Replace with your actual Logo component
import Signin from './Signin_form'; // Replace with your actual Signin component
import Register from './Register'; // Replace with your actual Register component
import Navigation from './Navigation'; // Replace with your actual Navigation component
import Main from './Main'; // Replace with your actual Main component
import Footer from './Footer'; // Replace with your actual Footer component

function MainPage() {
    const [route, setRoute] = useState('signin');
    const [isSignedIn, setIsSignedIn] = useState(false);

    const handleLogin = (username, password) => {
        // This is where you would typically check credentials
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
    switch(route) {
        case 'signin':
        case 'signout':
            content = (
                <div>
                    <Logo />
                    <Signin onRouteChange={onRouteChange} />
                </div>
            );
            break;
        case 'register':
            content = <Register onRouteChange={onRouteChange} />;
            break;
        default:
            content = (
                <div>
                    <Navigation onRouteChange={onRouteChange} />
                    <Main />
                    <Footer />
                </div>
            );
    }

    return (
        <div className='main-content'>
            {!isSignedIn ? (
                <LoginForm onLogin={handleLogin} />
            ) : (
                content
            )}
            <h1>Master Rahm is here to win in 2024</h1>
        </div>
    );
}

export default MainPage;
: