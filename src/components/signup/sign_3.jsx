import React, { useState } from 'react';
import '../styles/form.css';

function SignUp({ onAuthenticate }) {
    const [userDetails, setUserDetails] = useState({
        email: '',
        username: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserDetails(prevDetails => ({
        ...prevDetails,
        [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('User Details:', userDetails);
        // Add logic to handle sign up (e.g., making an API call to a server)
        // onAuthenticate(true); // Call this upon successful sign up
    };

    return (
        <div className='container text'>
            <form onSubmit={handleSubmit}>
                <div className='form-row'>
                    <label htmlFor="name">Email:</label>
                    <input className='input-data'
                    type="email"
                    name="email"
                    value={userDetails.email}
                        onChange={handleChange}
                        placeholder='Your email address is...'
                    required
                    />
                </div>
                <div className='form-row'>
                    <label htmlFor="name">Username:</label>
                    <input className='input-data'
                    type="text"
                    name="username"
                    value={userDetails.username}
                        onChange={handleChange}
                        placeholder='What is your name...'
                    required
                    />
                </div>
                <div className='form-row'>
                    <label htmlFor="name">Password:</label>
                    <input className='input-data'
                    type="password"
                    name="password"
                    value={userDetails.password}
                        onChange={handleChange}
                        placeholder='Enter a password...'
                    required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
