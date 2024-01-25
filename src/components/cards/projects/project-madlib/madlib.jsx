import React, { useState } from 'react';
import './madlib.css';

function MadLibsEngine() {
    const [inputs, setInputs] = useState({
        animal: '',
        adjective1: '',
        adjective2: '',
        verb1: '',
        color: '',
        noun1: '',
        number: ''
    });
    const [story, setStory] = useState('');
    const [showStory, setShowStory] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newStory = `Once upon a time, in a faraway land, a little ${inputs.animal} that could. It was a ${inputs.adjective1} day when the ${inputs.adjective2} engine started its journey. It had to ${inputs.verb1} over the mountain to deliver a load of ${inputs.color} ${inputs.noun1} to the town. The journey was tough, and the load was ${inputs.number} times heavier than the engine, but it kept saying, 'I think I can, I think I can!' And guess what? It did!`;
        setStory(newStory);
        setShowStory(true);
    };

    return (
        <section className="mad-libs-game">
            <div>
                <h1 className="gameheading">Play Mad Libs</h1>
                <p className="gameinfo">"The little animal that did!"</p>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="animal" 
                        value={inputs.animal} 
                        onChange={handleChange} 
                        placeholder="Animal (e.g., 'dog')" 
                    />
                    <input 
                        type="text" 
                        name="adjective1" 
                        value={inputs.adjective1} 
                        onChange={handleChange} 
                        placeholder="Adjective (e.g., 'sunny')" 
                    />
                    <input 
                        type="text" 
                        name="adjective2" 
                        value={inputs.adjective2} 
                        onChange={handleChange} 
                        placeholder="Adjective (e.g., 'tiny')" 
                    />
                    <input 
                        type="text" 
                        name="verb1" 
                        value={inputs.verb1} 
                        onChange={handleChange} 
                        placeholder="Verb (e.g., 'climb')" 
                    />
                    <input 
                        type="text" 
                        name="color" 
                        value={inputs.color} 
                        onChange={handleChange} 
                        placeholder="Color (e.g., 'red')" 
                    />
                    <input 
                        type="text" 
                        name="noun1" 
                        value={inputs.noun1} 
                        onChange={handleChange} 
                        placeholder="Noun (e.g., 'toys')" 
                    />
                    <input 
                        type="number" 
                        name="number" 
                        value={inputs.number} 
                        onChange={handleChange} 
                        placeholder="Number (e.g., 3)" 
                    />
                    <button type="submit">Create Story</button>
                </form>

                {showStory && <p>{story}</p>}
            </div>
        </section>
    );
}

export default MadLibsEngine;
