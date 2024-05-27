import React from 'react';
import ProfileBackground from '../../../assets/smooth-ai.jpg';

const HeroSection = ({ handleSubmit, handleInputChange, contact, error }) => (
    <section className="hero-section">
        <div className="grid-hero-content">
            <div className="kicker-heading">
                <h1 className='message'> I&apos;m R.&nbsp;J.</h1>
                <h2>I&apos;m a master at Web&nbsp;Development</h2>
            </div>
            <div className="hero-image">
                <img src={ProfileBackground} alt='Ra-legacy' />
            </div>
            <div className='kicker-form'>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="tooltip-container">
                        <h1>Contact Me</h1>
                        <span className="tooltip-text">This form will send an email to me.</span>
                    </div>
                    <div className="form-field">
                        <label htmlFor="name">Enter your name</label>
                        <input type="text" id="name" name="name" value={contact.name} onChange={handleInputChange} placeholder='First name is required.' />
                    </div>
                    <div className="form-field">
                        <label htmlFor="email">Your email</label>
                        <input type="email" id="email" name="email" value={contact.email} onChange={handleInputChange} placeholder='Your email address is...' />
                    </div>
                    <div className="form-field">
                        <label htmlFor="message">Please write a message</label>
                        <textarea id="message" name="message" value={contact.message} onChange={handleInputChange} placeholder='I would like to know more about you...'></textarea>
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </section>
);

export default HeroSection;
