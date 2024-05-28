import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const AboutMe = ({ cursorPos }) => {
    const aboutMeRef = useRef(null);
    const [bars, setBars] = useState([]);

    useEffect(() => {
        const calculateBars = () => {
            if (aboutMeRef.current) {
                const containerHeight = aboutMeRef.current.offsetHeight;
                const barHeight = 40; // Height of each bar plus margin
                const numberOfBars = Math.floor(containerHeight / barHeight);
                setBars(new Array(numberOfBars).fill(0));
            }
        };

        calculateBars();
        window.addEventListener('resize', calculateBars);

        return () => {
            window.removeEventListener('resize', calculateBars);
        };
    }, []);

    return (
        <section className="about-me" ref={aboutMeRef}>
            <div className="background-movement">
                <div className="horizontal-bars">
                    {bars.map((_, index) => {
                        const distance = Math.abs(cursorPos.y - (index * 20+150)); // Approximate the vertical position of each bar
                        const isActive = distance < 70; // Activate bar if the mouse is within 70px vertically
                        const width = isActive ? `${100 - distance}%` : '0%';
                        return (
                            <div key={index} className="horizontal-bar" style={{ width, top: `${index * 20}px` }}></div>
                        );
                    })}
                </div>
                <div className="about-content" id="about">
                    <div className="triangle" style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}></div>
                    <h2>About Me</h2>
                    <div className="about-articles">
                        <article>
                            <h3>Engineering</h3>
                            <p className="about-text">
                                Allow me to introduce myself - I am <span className="text-l">R J Moore</span>, a highly versatile professional with a passion for <span className="text-l">customer service</span>, <span className="text-l">engineering</span>, and <span className="text-l">web development</span>. With <span className="text-l">15 years of experience</span> in the field of customer service, I have developed a keen eye for detail, a strong commitment to client satisfaction, and exceptional communication skills. Throughout my career, I have consistently surpassed expectations, ensuring that each customer interaction is a positive and enriching experience. For the past <span className="text-l">decade</span>, I have worked as an <span className="text-l">Engineering Technician</span>, specializing in the fascinating realm of <span className="text-l">automation</span> and <span className="text-l">robotics</span>. This field has allowed me to acquire an extensive skill set, working with state-of-the-art technologies, troubleshooting complex issues, and implementing innovative solutions. My deep understanding of engineering principles and ability to navigate intricate systems propelled me to the forefront of my field.
                            </p>
                        </article>
                        <article>
                            <h3>Front-end</h3>
                            <p className="about-text">
                                Driven by a desire to embrace new challenges and expand my horizons, I successfully transitioned into my current role as a <span className="text-l">Front End Web Author</span>. Drawing on my technical acumen and creative flair, I now have the privilege of crafting captivating and user-friendly web experiences. By seamlessly blending aesthetics and functionality, I create web solutions that engage users on multiple platforms. My proficiency in <span className="text-l">HTML</span>, <span className="text-l">CSS</span>, and <span className="text-l">JavaScript</span> enables me to bring ideas to life and deliver exceptional results.
                            </p>
                        </article>
                        <article>
                            <h3>Back-end</h3>
                            <p className="about-text">
                                Furthermore, I am formally trained as a <span className="text-l">Python Technical Consultant</span>, augmenting my skill set and providing me with a comprehensive understanding of back-end web development. This expertise allows me to bridge the gap between front-end design and back-end functionality, ensuring cohesive and robust web solutions that meet and exceed expectations.
                                With my diverse background in customer service, engineering, and web development, I bring a unique perspective and a multifaceted skill set to any project. I thrive in collaborative environments and am committed to delivering excellence in every endeavor. My passion for continuous improvement, combined with my adaptability to diverse roles, makes me an invaluable asset to any team.
                            </p>
                        </article>
                        <article>
                            <h3>Summary</h3>
                            <p className="about-text">
                                In summary, I am <span className="text-l">R J Moore</span> - a consummate professional with <span className="text-l">15 years of experience</span> in customer service, a <span className="text-l">decade of expertise</span> as an Engineering Technician in automation and robotics, and a current focus on front-end web development as a Web Developer. With a proven track record of success across multiple industries, I am poised to make a significant impact and thrive in any professional endeavor.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

AboutMe.propTypes = {
    cursorPos: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }).isRequired,
};

export default AboutMe;
