import React from 'react';
import { projectInfo } from '../../cards/projects/projects';

const Projects = () => (
    <section className="projects" id='#projects'>
        <h2>Projects</h2>
        <div className="project-cards">
            {projectInfo.map(info => (
                <div key={info.text} className="project-card">
                    <h3 className='project-title'>{info.text}</h3>
                    <p className="card-content">{info.content}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Projects;
