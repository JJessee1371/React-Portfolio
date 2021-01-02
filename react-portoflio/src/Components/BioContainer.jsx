import React from 'react';
import 'materialize-css';
import '../CSS/BioContainer.css';
import AboutHeader from './AboutHeader';
import AboutImg from './AboutImg';
import Bio from './Bio';

function BioContainer() {
    return (
        <div className="row bio">
            <AboutHeader/>
            <AboutImg/>
            <Bio/>
        </div>
    );
};

export default BioContainer;