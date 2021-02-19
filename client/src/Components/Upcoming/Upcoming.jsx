import React from 'react';
import './Upcoming.css';

function Upcoming() {
    return (
        <>
            <h2 className="header">Upcoming Projects</h2>
            <div className="wrapper">
                <h3 className="title1">Semper Study</h3>
                <div className="textbg">
                    <p className="text">As a new developer I am always seeking out opportunities to put my skills
                        to good use and earn valuable experience with new concepts and technologies.
                        For my next project, I intend to build a PWA that will assist those who
                        wish to enlist in the U.S. Marine Corps. Having experienced it myself
                        and after a lot of discussion with people from all walks of life in the
                        Corps, this is an excellent opportunity to build a tool that will 
                        better prepare potential recruits for the unique mental and physical 
                        challenges that they face day to day. I am open to any and all who wish 
                        to contribute to this effort. The primary focus will be on the MERN stack
                        so I ask that any who wish to contribute have a basic undestanding of 
                        the associated technologies. 
                    </p>
                </div>
            </div>
            <div className="wrapper2">
                <h3 className="title2">Mindful</h3>
                <div className="textbg">
                    <p className="text">We all know that life is full of non stop challenges and obstacles.
                    When the world seems to be spinning out of control it is essential that we take time to slow
                    down and gather ourselves before proceeding. Mindful is here to give you the tools to combat
                    stress and document your journey to becoming the master of your mind. As a PWA it gives users
                    easier access to it at any time and provides a multitude of tips and tricks to maintaining a 
                    calm demeanor even in the most stressful of situations.  
                    </p>
                </div>
            </div>
        </>
        
    );
};

export default Upcoming;