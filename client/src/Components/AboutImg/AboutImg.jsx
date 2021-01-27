import React from 'react';
import portrait from '../../images/me.jpg';
import 'materialize-css';
import './AboutImg.css';

function AboutImg() {
    return (
        <div className="col s12 m6 l6 xl6">
            <img className="main-img responsive-img" src={portrait} alt="Headshot of Jon in the Marine Corps dress blue uniform."></img>
        </div>
    );
};

export default AboutImg;