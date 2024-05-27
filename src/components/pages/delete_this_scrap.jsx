import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';
import '../styles/welcomeMaster.css';
import ProfileBackground from '../../assets/smooth-ai.jpg';
import { projectInfo } from '../cards/projects/projects'
import { simpleNavLinks } from '../links/navigationLinks'
import NavBar from './page-components/Navigation';
import HeroSection from './page-components/HeroSection';
import AboutMe from './page-components/AboutMe';
import Projects from './page-components/Projects';
import Footer from './Footer';


function WelcomeMaster() {
    const [contact, setContact] = useState({ name: '', email: '', message: '' });
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [barWidths, setBarWidths] = useState({ engineering: 50, frontend: 50, backend: 50 });
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setContact({ ...contact, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (contact.name && contact.email && contact.message) {
            alert('Form submitted successfully!');
            // Handle form submission logic here
        } else {
            setError('All fields are required.');
        }
    };

    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = event.clientX;
            const y = event.clientY;
            setCursorPos({ x, y });
            // setCursorPos({ x: event.clientX, y: event.clientY });
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const newWidthEngineering = (x / windowWidth) * 100;
            const newWidthFrontend = (y / windowHeight) * 100;
            const newWidthBackend = ((x + y) / (windowWidth + windowHeight)) * 100;

            setBarWidths({
                engineering: newWidthEngineering,
                frontend: newWidthFrontend,
                backend: newWidthBackend,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="App">
            <section className="nav-section">
                <div className="navbar">
                    <nav className="main-nav">
                        <ul>
                            {simpleNavLinks.map((link) => (
                                <li key={link.text}>
                                    <a href={link.path}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

            </section>
            <section className="hero-section">
            {/* <div className="tooltip-container">
                    Hover over me!
                <span className="tooltip-text">Tooltip text goes here</span>
            </div> */}
                
                <div className="grid-hero-content">
                    <div className='kicker-heading'>
                        <h1 className='message'> I&apos;m R.&nbsp;J.</h1>
                        <h2>I&apos;m a master at Web&nbsp;Development</h2>
                        {/* <h3>This page is under construction</h3> */}
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
                                <input type="text" id="name" name="name" value={contact.name} onChange={handleInputChange} placeholder='First name is required.'/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Your email</label>
                                <input type="email" id="email" name="email" value={contact.email} onChange={handleInputChange} placeholder='Your email address is...'/>
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
            
            <section className="about-me">
                <div className="background-movement">
                {/* <img 
                    src="../../../public/logo_rmg.png" // Replace with your image path
                    alt="Moving triangle"
                    className="triangle" 
                    style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
                /> */}
                    <div className="about-content" id='#about'>
                        <h2 >About Me</h2>
                    <div className="triangle" style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}></div>
                            <div className='about-articles'>
                                <article>
                                    <h3>Engineering</h3>
                                    <p className="about-text">
                                        Allow me to introduce myself - I am <span className="text-l">R J Moore</span>, a highly versatile professional with a passion for <span className="text-l">customer service</span>, <span className="text-l">engineering</span>, and <span className="text-l">web development</span>. With <span className="text-l">15 years of experience</span> in the field of customer service, I have developed a keen eye for detail, a strong commitment to client satisfaction, and exceptional communication skills. Throughout my career, I have consistently surpassed expectations, ensuring that each customer interaction is a positive and enriching experience. For the past <span className="text-l">decade</span>, I have worked as an <span className="text-l">Engineering Technician</span>, specializing in the fascinating realm of <span className="text-l">automation</span> and <span className="text-l">robotics</span>. This field has allowed me to acquire an extensive skill set, working with state-of-the-art technologies, troubleshooting complex issues, and implementing innovative solutions. My deep understanding of engineering principles and ability to navigate intricate systems propelled me to the forefront of my field.
                                    </p>
                                <div className="skill-bar-container">
                                    <div className="skill-bar" style={{ width: `${barWidths.engineering}%` }}></div>
                                </div>
                                <div className="horizontal-bar"></div>
                                </article>
                                <article>
                                    <h3>Front-end</h3>
                                    <p className="about-text">
                                        Driven by a desire to embrace new challenges and expand my horizons, I successfully transitioned into my current role as a <span className="text-l">Front End Web Author</span>. Drawing on my technical acumen and creative flair, I now have the privilege of crafting captivating and user-friendly web experiences. By seamlessly blending aesthetics and functionality, I create web solutions that engage users on multiple platforms. My proficiency in <span className="text-l">HTML</span>, <span className="text-l">CSS</span>, and <span className="text-l">JavaScript</span> enables me to bring ideas to life and deliver exceptional results.
                                </p>
                                <div className="skill-bar-container">
                                    <div className="skill-bar" style={{ width: `${barWidths.frontend}%` }}></div>
                                </div>
                                </article>
                                <article>
                                    <h3>Back-end</h3>
                                    <p className="about-text">
                                        Furthermore, I am formally trained as a <span className="text-l">Python Technical Consultant</span>, augmenting my skill set and providing me with a comprehensive understanding of back-end web development. This expertise allows me to bridge the gap between front-end design and back-end functionality, ensuring cohesive and robust web solutions that meet and exceed expectations.

                                        With my diverse background in customer service, engineering, and web development, I bring a unique perspective and a multifaceted skill set to any project. I thrive in collaborative environments and am committed to delivering excellence in every endeavor. My passion for continuous improvement, combined with my adaptability to diverse roles, makes me an invaluable asset to any team.
                                </p>    
                                <div className="skill-bar-container">
                                    <div className="skill-bar" style={{ width: `${barWidths.backend}%` }}></div>
                                </div>
                                </article>
                                <article>
                                    <h3>Summary</h3>
                                    <p className="about-text">
                                        In summary, I am <span className="text-l">R J Moore</span> - a consummate professional with <span className="text-l">15 years of experience</span> in customer service, a <span className="text-l">decade of expertise</span> as an Engineering Technician in automation and robotics, and a current focus on front-end web development as a Web Developer. With a proven track record of success across multiple industries, I am poised to make a significant impact and thrive in any professional endeavor.
                                </p>
                                </article>    
                            </div>
                    </div>
                    <div className="horizontal-bar"></div>
                </div>
            </section>

            <section className="projects" id='#projects'>
                <h1 >Projects</h1>
                <div className="project-cards">
                    {projectInfo.map(info => (
                        <div key={info.text} className="project-card">
                            <h3 className='project-title'>{info.text}</h3>
                            <p className="card-content">{ info.content}</p>
                        </div>
                    ))}
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