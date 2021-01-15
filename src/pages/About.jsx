import React from 'react';
import BioContainer from '../Components/BioContainer';
import Awards from '../Components/Awards';
import SkillContainer from '../Components/SkillContainer';

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