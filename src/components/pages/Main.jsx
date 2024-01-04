import React, { useState } from 'react';
import LoginForm from '../signup/Signin_form';

function Main() {
    const [isSignedIn, setIsSignedIn] = React.useState(true);

    return (
        <>
            <div className='main-content'>
                <div>
                    {!isSignedIn ? (
                        <LoginForm onLogin={handleLogin} />
                    ) : (
                            <div>Welcome! You are logged in.</div>
                            
                    )}
                </div>
                <h1>Master Rahm is here to win in 2024</h1>
            </div>
        </>
    )
}

export default Main
