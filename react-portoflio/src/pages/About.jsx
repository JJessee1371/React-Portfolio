import React from 'react';
import Navbar from '../Components/Navbar';
import BioContainer from '../Components/BioContainer';
import Awards from '../Components/Awards';
import SkillContainer from '../Components/SkillContainer';
import Footer from '../Components/Footer';

function About() {
    return (
        <div>
            <Navbar/>
            <main className="container">
                <BioContainer/>
                <Awards/>
                <SkillContainer/>
                <Footer/>
            </main>
        </div>
    );
};

export default About;