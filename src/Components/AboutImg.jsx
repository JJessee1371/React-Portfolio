import React from 'react';
import 'materialize-css';
import '../CSS/Index/AboutImg.css';
import portrait from '../images/me.jpg';

function AboutImg() {
    return (
        <div class="col s12 m6 l6 xl6">
            <img class="main-img responsive-img" src={portrait} alt="Headshot of Jon in the Marine Corps dress blue uniform."></img>
        </div>
    );
};

export default AboutImg;