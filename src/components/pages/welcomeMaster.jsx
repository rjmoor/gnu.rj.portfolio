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
            {/* <div className="tooltip-container">
                    Hover over me!
                <span className="tooltip-text">Tooltip text goes here</span>
            </div> */}
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
                        <h2>I&apos;m a master at Web Development</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="tooltip-container">
                            <h1>Contact Me</h1>
                            <span className="tooltip-text">This form will send an email to me.</span>
                        </div>
                        
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
                <div className="about-content">
                    <h2>About Me</h2>
                    <p className="about-text-1">
                        <span className='text-xl'>Allow me to introduce myself - I am R J Moore,</span> a highly versatile professional with a
                        <span className='text-l'> passion </span>for customer service, engineering, and web development. With 15 years of experience in the field of customer service, I have developed a keen eye for detail, a strong commitment to client satisfaction, and exceptional communication skills. Throughout my career, I have consistently surpassed expectations, ensuring that each customer interaction is a positive and enriching experience.

                        For the past decade, I have worked as an Engineering Technician, specializing in the fascinating realm of automation and robotics. This field has allowed me to acquire an extensive skill set, working with state-of-the-art technologies, troubleshooting complex issues, and implementing innovative solutions. My deep understanding of engineering principles and ability to navigate intricate systems propelled me to the forefront of my field.
                    </p>
                    <p className="about-text-2">
                        Driven by a desire to embrace new challenges and expand my horizons, I successfully transitioned into my current role as a Front End Web Author. Drawing on my technical acumen and creative flair, I now have the privilege of crafting captivating and user-friendly web experiences. By seamlessly blending aesthetics and functionality, I create web solutions that engage users on multiple platforms. My proficiency in HTML, CSS, and JavaScript enables me to bring ideas to life and deliver exceptional results.

                        Furthermore, I am formally trained as a Python Technical Consultant, augmenting my skill set and providing me with a comprehensive understanding of back-end web development. This expertise allows me to bridge the gap between front-end design and back-end functionality, ensuring cohesive and robust web solutions that meet and exceed expectations.
                    </p>
                    <p className="about-text-3">
                        With my diverse background in customer service, engineering, and web development, I bring a unique perspective and a multifaceted skill set to any project. I thrive in collaborative environments and am committed to delivering excellence in every endeavor. My passion for continuous improvement, combined with my adaptability to diverse roles, makes me an invaluable asset to any team.

                        In summary, I am R J Moore - a consummate professional with 15 years of experience in customer service, a decade of expertise as an Engineering Technician in automation and robotics, and a current focus on front-end web development as a Web Author. With a proven track record of success across multiple industries, I am poised to make a significant impact and thrive in any professional endeavor.
                    </p>
                </div>
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