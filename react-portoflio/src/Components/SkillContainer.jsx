import React from 'react';
import 'materialize-css';
import '../CSS/SkillContainer.css';
import Skills from './Skills';
import Certs from './Certs';

function SkillContainer() {
    return (
        <div className="row row2">
            <Skills/>
            <Certs/>
        </div>
    );
};

export default SkillContainer;