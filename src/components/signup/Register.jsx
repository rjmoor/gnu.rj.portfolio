import React, { useState } from 'react';

function RegisterForm() {
    
    return (
        <div>
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white-10">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0 white">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 white" type="email" name="email-address" id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 white" type="password" name="password" id="password" />
                            </div>
                        </fieldset>
                        <div className="submit">
                            <input
                                onClick={() => onLogin('home')}
                                className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white"
                                type="submit"
                                value="Sign in"
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onLogin('register')} className="f6 link dim white db pointer">Register</p>
                        </div>
                    </div>
                </main>
            </article>

        </div>
    );
}

export default RegisterForm