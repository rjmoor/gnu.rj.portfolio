import React, { useState } from 'react';
import LoginForm from "../signup/Signin_form"

function MainPage() {
    const constructor = () => {
        super() {
            this.state = {
                route: 'signin',
                isSignedIn: false
            }
        };
    };
    const [isSignedIn, setIsSignedIn] = useState(false);
    
    const handleLogin = (username, password) => {
        // Here you would typically check credentials, for now, we'll just log them       
        if (route === 'signout') {
            this.setState({ setIsSignedIn: false })
        } else if (route === 'home') {
            this.setState({ setIsSignedIn: true })
        }
        this.setState({ route: route })
    };
    onRouteChange = (route) => {
        const { route } = this.state;
        let content;
        if (route === 'signin' || route === 'signout') {
            content = (
                <div>
                    <Logo />
                    <Signin onRouteChange={this.onRouteChange} />
                </div>
            );
        } else if (route === 'register') {
            content = <Register onRouteChange={this.onRouteChange} />;
        } else {
            content = (
                <div>
                    <Navigation onRouteChange={this.onRouteChange} />
                    <Main />
                    <Footer />
                </div>
            );
        }

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
}

export default MainPage