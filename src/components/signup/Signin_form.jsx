import React, { useState } from 'react';
import '../styles/form.css'

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(username, password);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <div className="form-row">
                    <div class="input-data">
                        <input type="text" required/>
                        <div class="underline"></div>
                        <label for="">First Name</label>
                    </div>
                        <div className="input-data">
                            <div className="underline"></div>
                            <label htmlFor="name">Username
                                <input type="text" value={username} onChange={handleUsernameChange} required />
                            </label>
                        </div>
                        <div className="">
                            <input type="text" />
                                <div className=""></div>
                                <label htmlFor="">Email Address</label>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default LoginForm;
