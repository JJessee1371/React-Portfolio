import React, { useState, useEffect } from 'react';
//Portrait import
import portrait from '../images/me.jpg';
//Resume import
import resume from '../certificates/Resume.pdf';
// Certs imports
//Create separate file? Set all in object array and map over for result, shorten syntax
import fullstack from '../certificates/bootcamp_cert.pdf';
import html from '../certificates/HTML-essential-training.pdf';
import css from '../certificates/CSS-essential-training.pdf';
import node from '../certificates/nodejs-essential-training.pdf';
import mysql from '../certificates/mysql-essential-training.pdf';
import mongo from '../certificates/MongoDB.pdf';
import reactjs from '../certificates/React-essential-training.pdf';
import reacthooks from '../certificates/react-hooks.pdf';
import reactapis from '../certificates/react-apis.pdf';
import excel from '../certificates/excel-2019-essential-training.pdf';
import word from '../certificates/word-2019-essential-training.pdf';

function About() {
    const stationary = 'header-text animated';
    const animated = 'header-text animated bounce'
    const [effect1, setEffect1] = useState(stationary);
    const [effect2, setEffect2] = useState(stationary);
    const [effect3, setEffect3] = useState(stationary);

    //Timed animation for homepage headers
    useEffect(() => {
        setEffect1(animated);
        setTimeout(() => {
            setEffect2(animated);
        }, 1500);
        setTimeout(() => {
            setEffect3(animated);
        }, 3000);
    },[]);

    return (
        <div>
            <main className="container">
                {/* Biocontainer component */}
                <div className="row abt-bio abt-row1">
                    {/* About header component */}
                    <header className="abt-header">
                        <p id="animate1" className={effect1}>Passionate full stack developer.</p>
                        <p id="animate2" className={effect2}>Dedicated forward thinker.</p>
                        <p id="animate3" className={effect3}>Enthusiastic collaborator.</p>
                    </header>
                    {/* About image component */}
                    <div className="col s12 m6 l6 xl6">
                        <img className="abt-img responsive-img" src={portrait} alt="Headshot of Jon in the Marine Corps dress blue uniform."></img>
                    </div>
                    {/* Bio component */}
                    <div className="col s12 m6 l6 xl6 container">
                        <p className="abt-bio-txt">
                        Jon Jessee is a Jacksonville, NC based full stack web developer with a fervor for continuous learning and application of that knowledge to finding innovative solutions to problems. He 
                        entered the web development field in search of a new challenge and is wholly dedicated to using his skills to build tools that will magnify the passion and vision of their users. With
                        a background in diverse work environments including customer service, construction, tutoring, and the military his experience and skillset offer unique perspective and unmatched flexibility. 
                        Whether it was streamlining work processes in the office, going the extra mile to complete a project, or leading Marines in a training maneuver, he has repeatedly demonstrated an ability to 
                        flourish in fast paced environments, serve as an irreplaceable member of a team, and maintain an indomitable spirit. 
                        </p>
                        <p className="abt-bio-txt">View my <a href={resume} target="_blank" rel="noreferrer" className="abt-resume">resume</a></p>
                    </div>
                </div>
                {/* Awards Component */}
                <div className="row abt-row2">
                    <div className="col s12 m12 l12 xl12">
                        <h3 className="abt-awards-title">Honors & Awards</h3>
                        <ul id="abt-awards">
                            <li className="abt-indiv-award">AP Scholar with Distinction - 2014 - Advanced Placement Board</li>
                            <li className="abt-indiv-award">Eagle Scout Award - 2014 - Boy Scouts of America</li>
                            <li className="abt-indiv-award">National Defense Ribbon - 2018 - United States Marine Corps</li>
                            <li className="abt-indiv-award">Global War on Terrorism Ribbon - 2019 - United States Marine Corps</li>
                            <li className="abt-indiv-award">Meritorious Mast Certificate - 2019 - Marine Corps Engineer School</li>
                            <li className="abt-indiv-award">Academic Honor Graduate - 2019 - Marine Corps Association Foundation</li>
                            <li className="abt-indiv-award">Navy Achievement Medal - 2020 - United States Marine Corps</li>
                        </ul>
                    </div>
                </div>
                {/* Skill container component */}
                <div className="row abt-row3">
                    {/* Skills component */}
                    <div className="col s12 m6 l6 xl6">
                        <h3 className="abt-skills-title">Skills</h3>
                        <div className="row">
                            <table>
                                <tr>
                                    <td className="abt-icon"><i className="fab fa-html5 fa-2x"></i></td>
                                    <td className="abt-icon"><i className="fab fa-css3-alt fa-2x"></i></td>
                                    <td className="abt-icon"><i className="fab fa-node-js fa-2x"></i></td>
                                    <td className="abt-icon"><i className="fab fa-js-square fa-2x"></i></td>
                                </tr>
                                <tr>
                                    <td className="abt-skill-txt">HTML</td>
                                    <td className="abt-skill-txt">CSS</td>
                                    <td className="abt-skill-txt">Node.js</td>
                                    <td className="abt-skill-txt">JavaScript/jQuery</td>
                                </tr>
                                <tr>
                                    <td className="abt-icon"><i className="fas fa-database sql fa-2x"></i></td>
                                    <td className="abt-icon"><i className="fas fa-database mongo fa-2x"></i></td>
                                    <td className="abt-icon"><i className="fab fa-react fa-2x"></i></td>
                                    <td className="abt-icon"><i className="fab fa-microsoft fa-2x"></i></td>
                                </tr>
                                <tr>
                                    <td className="abt-skill-txt">MySQL</td>
                                    <td className="abt-skill-txt">MongoDB</td>
                                    <td className="abt-skill-txt">React.js</td>
                                    <td className="abt-skill-txt">Microsoft Office</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    {/* Cert component */}
                    <div className="col s12 m6 l6 xl6">
                        <h3 className="abt-skills-title">Education/Certificates</h3>
                        <ul id="abt-certs">
                            <li><a href={fullstack} target="_blank" rel="noreferrer">Full stack certificate - University of Utah</a></li>
                            <li><a href={html} target="_blank" rel="noreferrer">HTML5 - LinkedIn</a></li>
                            <li><a href={css} target="_blank" rel="noreferrer">CSS - LinkedIn</a></li>
                            <li><a href={node} target="_blank" rel="noreferrer">Node.js - LinkedIn</a></li>
                            <li><a href={mysql} target="_blank" rel="noreferrer">MySQL - LinkedIn</a></li>
                            <li><a href={mongo} target="_blank" rel="noreferrer">MongoDB - LinkedIn</a></li>
                            <li><a href={reactjs} target="_blank" rel="noreferrer">React - LinkedIn</a></li>
                            <li><a href={reacthooks} target="_blank" rel="noreferrer">React Hooks - LinkedIn</a></li>
                            <li><a href={reactapis} target="_blank" rel="noreferrer">React APIs - LinkedIn</a></li>
                            <li><a href={excel} target="_blank" rel="noreferrer">Microsoft Excel 2019 - LinkedIn</a></li>
                            <li><a href={word} target="_blank" rel="noreferrer">Microsoft Word 2019 - LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default About;