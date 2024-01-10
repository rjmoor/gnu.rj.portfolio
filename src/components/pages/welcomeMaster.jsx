import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { Parallax } from 'react-scroll-parallax';
import '../styles/welcomeMaster.css';
import ProfileBackground from '../../assets/Ra-effortless.jpg';

function WelcomeMaster() {
    const [contact, setContact] = useState({ name: '', email: '', message: '' });

    const handleInputChange = (event) => {
        setContact({ ...contact, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Form submitted successfully!');
    // Handle form submission logic here
    };

    return (
        <div className="App">
            <section id="hero" className="hero">
                <div className="navbar">
                    <nav className="main-nav">
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about-me">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            {/* Add other sections as needed */}
                        </ul>
                    </nav>
                </div>
                <div className="hero-content">
                    <div className='top-web-heading'>
                        <h1>Hi, I&apos;m R. J.</h1>
                        <h2>a master at Web Development</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <h1>Contact Me</h1>
                        <div className="form-field">
                            <label htmlFor="name">Please enter your name</label>
                            <input type="text" id="name" name="name" value={contact.name} onChange={handleInputChange} placeholder='First name is required.'/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="email">Please enter your email</label>
                            <input type="email" id="email" name="email" value={contact.email} onChange={handleInputChange} placeholder='Your email address is...'/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="message">Please write a message</label>
                            <textarea id="message" name="message" value={contact.message} onChange={handleInputChange} placeholder='I would like to know more about you...'></textarea>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                    <div className="hero-image">
                        <img src={ProfileBackground} alt='Ra-legacy' />
                    </div>
                </div>
            </section>
            
            <section className="about-me">
                <h2>About Me</h2>
                <p>Your about me content goes here</p>
            </section>

            <section className="projects">
            {/* Repeat this block for each project */}
                <div className="project-card">
                    <h3>Project Title</h3>
                    <p>Project Description</p>
                    <a href="https://github.com/your-github-link">View on GitHub</a>
                </div>
            </section>

            <footer className="footer">
                <a href="https://tiktok.com/yourprofile"><FaTiktok /></a>
                <a href="https://linkedin.com/in/yourprofile"><FaLinkedin /></a>
                <a href="https://github.com/yourprofile"><FaGithub /></a>
            </footer>          
        </div>
    );
}

export default WelcomeMaster;