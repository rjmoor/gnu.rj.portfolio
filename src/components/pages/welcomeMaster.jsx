import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';
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
                        <h1 className='message'> I&apos;m R. J.</h1>
                        <h2>I&apos;m a master at Web Development</h2>
                        <h3>This page is under construction</h3>
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
                        <div className='about-articles'>
                            <article>
                                <h3>Heading 1</h3>
                                <p className="about-text">
                                    Allow me to introduce myself - I am <span className="text-l">R J Moore</span>, a highly versatile professional with a passion for <span className="text-l">customer service</span>, <span className="text-l">engineering</span>, and <span className="text-l">web development</span>. With <span className="text-l">15 years of experience</span> in the field of customer service, I have developed a keen eye for detail, a strong commitment to client satisfaction, and exceptional communication skills. Throughout my career, I have consistently surpassed expectations, ensuring that each customer interaction is a positive and enriching experience. For the past <span className="text-l">decade</span>, I have worked as an <span className="text-l">Engineering Technician</span>, specializing in the fascinating realm of <span className="text-l">automation</span> and <span className="text-l">robotics</span>. This field has allowed me to acquire an extensive skill set, working with state-of-the-art technologies, troubleshooting complex issues, and implementing innovative solutions. My deep understanding of engineering principles and ability to navigate intricate systems propelled me to the forefront of my field.
                                </p>
                            </article>
                            <article>
                                <h3>Heading 2</h3>
                                <p className="about-text">
                                    Driven by a desire to embrace new challenges and expand my horizons, I successfully transitioned into my current role as a <span className="text-l">Front End Web Author</span>. Drawing on my technical acumen and creative flair, I now have the privilege of crafting captivating and user-friendly web experiences. By seamlessly blending aesthetics and functionality, I create web solutions that engage users on multiple platforms. My proficiency in <span className="text-l">HTML</span>, <span className="text-l">CSS</span>, and <span className="text-l">JavaScript</span> enables me to bring ideas to life and deliver exceptional results.
                                </p>
                            </article>
                            <article>
                                <h3>Heading 3</h3>
                                <p className="about-text">
                                    Furthermore, I am formally trained as a <span className="text-l">Python Technical Consultant</span>, augmenting my skill set and providing me with a comprehensive understanding of back-end web development. This expertise allows me to bridge the gap between front-end design and back-end functionality, ensuring cohesive and robust web solutions that meet and exceed expectations.

                                    With my diverse background in customer service, engineering, and web development, I bring a unique perspective and a multifaceted skill set to any project. I thrive in collaborative environments and am committed to delivering excellence in every endeavor. My passion for continuous improvement, combined with my adaptability to diverse roles, makes me an invaluable asset to any team.
                                </p>    
                            </article>
                            <article>
                                <h3>Heading 4</h3>
                                <p className="about-text">
                                    In summary, I am <span className="text-l">R J Moore</span> - a consummate professional with <span className="text-l">15 years of experience</span> in customer service, a <span className="text-l">decade of expertise</span> as an Engineering Technician in automation and robotics, and a current focus on front-end web development as a Web Author. With a proven track record of success across multiple industries, I am poised to make a significant impact and thrive in any professional endeavor.
                                </p>
                            </article>    
                        </div>
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