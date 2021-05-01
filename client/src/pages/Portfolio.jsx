import React from 'react';
import Card from '../Components/Card/Card';
import projectsArr from '../Projects';

function Portfolio() {
    return (
        <>
            <main>
                <header className="portfolio-header">My Projects</header>
                {projectsArr.map(row => {
                    <Card 
                        key1={row.project1.id}
                        src1={row.project1.src}
                        alt1={row.project1.alt}
                        title1={row.project1.title}
                        desc1={row.project1.desc}
                        deployed1={row.project1.deployed}
                        github1={row.project1.github}
                        key2={row.project2.id}
                        src2={row.project2.src}
                        alt2={row.project2.alt}
                        title2={row.project2.title}
                        desc2={row.project2.desc}
                        deployed2={row.project2.deployed}
                        github2={row.project2.github}
                    />
                })}
            </main>
            <hr></hr>
            {/* Upcoming component */}
            <h2 className="upcoming-header">Upcoming Projects</h2>
            <div className="proj1-wrap">
                <h3 className="proj1-title">Semper Study</h3>
                <div className="upcoming-txtbg">
                    <p className="upcoming-txt">As a new developer I am always seeking out opportunities to put my skills
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
            <div className="proj2-wrap">
                <h3 className="proj2-title">Mindful</h3>
                <div className="upcoming-txtbg">
                    <p className="upcoming-txt">We all know that life is full of non stop challenges and obstacles.
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

export default Portfolio;