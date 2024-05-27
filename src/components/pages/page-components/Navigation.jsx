import React from 'react';
import { simpleNavLinks } from '../../links/navigationLinks';

const Navigation = () => (
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
);

export default Navigation;
