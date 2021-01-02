import React from 'react';
import 'materialize-css';
import '../CSS/Bio.css';

function Bio() {
    return (
        <div className="col s12 m6 l6 xl6">
            <p className="bio-text">
            Jon Jessee is a Salt Lake City based developer with a fervor for learning and applying that knowledge to real world problems. He is a firm believer that in a difficult situation
            an individual will not rise to the occassion, but rather fall back to the instincts instilled by their training and habits. It is this philosophy that has repeatedly served him well in all endeavors
            whether it was attending school, learning a new trade, or leading the Marines under his charge. In each of these situations, another important value he learned was teamwork, whether that meant 
            being a good follower or striving to be an exemplary leader. With an unconquerable attitude of positivity, a proven work ethic, and a well practiced ability to be flexible in rapidly changing 
            environments, he has the utomost confidence in his abilites to bring a unique and powerful skillset to the field of web development. 
            </p>
            <p>Want to know more? View my resume <a href="/Certificates/resume.pdf" target="_blank" className="resume">here.</a></p>
        </div>
    );
};

export default Bio;