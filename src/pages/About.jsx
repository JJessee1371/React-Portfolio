import React from 'react';
import BioContainer from '../Components/BioContainer/BioContainer';
import Awards from '../Components/Awards/Awards';
import SkillContainer from '../Components/SkillContainer/SkillContainer';

function About() {
    return (
        <div>
            <main className="container">
                <BioContainer/>
                <Awards/>
                <SkillContainer/>
            </main>
        </div>
    );
};

export default About;