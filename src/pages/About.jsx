import React from 'react';
import GlobalNavbar from '../Components/GlobalNavbar';
import BioContainer from '../Components/BioContainer';
import Awards from '../Components/Awards';
import SkillContainer from '../Components/SkillContainer';
import Footer from '../Components/Footer';

function About() {
    return (
        <div>
            <GlobalNavbar/>
            <main className="container">
                <BioContainer/>
                <Awards/>
                <SkillContainer/>
            </main>
            <Footer/>
        </div>
    );
};

export default About;