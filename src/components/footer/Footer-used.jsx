import React from 'react';
import { FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';

const Footer = () => (
    <footer className="footer">
        <a href="https://tiktok.com/yourprofile"/><FaTiktok />
        <a href="https://linkedin.com/in/yourprofile"/><FaLinkedin />
        <a href="https://github.com/yourprofile"/><FaGithub />
    </footer>
);

export default Footer;
