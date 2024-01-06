import React, { useState } from 'react';
import LoginForm from '../signup/Signin_form';

function Main() {
    const [isSignedIn, setIsSignedIn] = React.useState(true);

    const handleLogin = (username, password) => {
        // Implement your authentication logic here
        console.log('This is a login routine.')
        setIsSignedIn(true);
    }
    
    return (
        <div className='main-content'>
            {isSignedIn ? (
                <div>
                    <div>Welcome! You are logged in.</div>
                    <h1>Master Rahm is here to win in 2024!!!</h1>
                </div>
            ) : (
                <div>
                    <LoginForm onLogin={handleLogin} />
                </div>
            )}
        </div>

        )
}

export default Main
