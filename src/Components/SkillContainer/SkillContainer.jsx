import React from 'react';
import Skills from '../Skills/Skills';
import Certs from '../Certs/Certs';
import 'materialize-css';
import './SkillContainer.css';


function SkillContainer() {
    return (
        <div className="row row2">
            <Skills/>
            <Certs/>
        </div>
    );
};

export default SkillContainer;