import { useState, useEffect } from 'react';
import Navigation from './page-components/Navigation';
import HeroSection from './page-components/HeroSection';
import AboutMe from './page-components/BlogMe';
import Projects from './page-components/Projects';
import Footer from '../footer/Footer-used';
import '../styles/welcomeMaster.css';

function WelcomeMaster() {
    const [contact, setContact] = useState({ name: '', email: '', message: '' });
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
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
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="App">
            <Navigation />
            <HeroSection handleSubmit={handleSubmit} handleInputChange={handleInputChange} contact={contact} error={error} />
            <AboutMe cursorPos={cursorPos} />
            <Projects />
            <Footer />
        </div>
    );
}

export default WelcomeMaster;
