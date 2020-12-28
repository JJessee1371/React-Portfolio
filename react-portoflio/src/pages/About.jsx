import React from 'react';
import BioContainer from '../Components/BioContainer';
import Awards from '../Components/Awards';
import SkillContainer from '../Components/Skill_Container';

function About() {
    return (
        <main className="container">
            <BioContainer/>
            <Awards/>
            <SkillContainer/>
        </main>
    );
};

export default About;