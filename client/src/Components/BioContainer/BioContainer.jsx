import React from 'react';
import AboutHeader from '../AboutHeader/AboutHeader';
import AboutImg from '../AboutImg/AboutImg';
import Bio from '../Bio/Bio';
import 'materialize-css';
import './BioContainer.css';


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