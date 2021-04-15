import React from 'react';
import resume from '../../certificates/Resume.pdf';
import 'materialize-css';
import './Bio.css';


function Bio() {
    return (
        <div className="col s12 m6 l6 xl6 container">
            <p className="bio-text">
            Jon Jessee is a Jacksonville, NC based full stack web developer with a fervor for continuous learning and application of that knowledge to finding innovative solutions to problems. He 
            entered the web development field in search of a new challenge and is wholly dedicated to using his skills to build tools that will magnify the passion and vision of their users. With
            a background in diverse work environments including customer service, construction, tutoring, and the military his experience and skillset offer unique perspective and unmatched flexibility. 
            Whether it was streamlining work processes in the office, going the extra mile to complete a project, or leading Marines in a training maneuver, he has repeatedly demonstrated an ability to 
            flourish in fast paced environments, serve as an irreplaceable member of a team, and maintain an indomitable spirit. 
            </p>
            <p className="bio-text">View my <a href={resume} target="_blank" rel="noreferrer" className="resume">resume</a></p>
        </div>
    );
};

export default Bio;