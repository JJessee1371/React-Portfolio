import React, { useState, useEffect } from 'react';
import portrait from '../images/me.jpg';
import resume from '../certificates/Jon_Jessee_Resume.pdf';
import CertList from '../Components/CertList/CertList';
import certsArr from '../data/certificates';
import './About.css';

function About() {
    const stationary = 'header-text animated';
    const animated = 'header-text animated bounce'
    const [effect1, setEffect1] = useState(stationary);
    const [effect2, setEffect2] = useState(stationary);
    const [effect3, setEffect3] = useState(stationary);

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
                <div className="row abt-bio abt-row1">
                    <header className="abt-header">
                        <p id="animate1" className={effect1}>Passionate full stack developer.</p>
                        <p id="animate2" className={effect2}>Dedicated forward thinker.</p>
                        <p id="animate3" className={effect3}>Enthusiastic collaborator.</p>
                    </header>
                    <div className="col s12 m6 l6 xl6">
                        <img className="abt-img responsive-img" src={portrait} alt="Headshot of Jon in the Marine Corps dress blue uniform."></img>
                    </div>
                    <div className="col s12 m6 l6 xl6 container">
                        <p className="abt-bio-txt">
                        Jon Jessee is a Jacksonville, NC based Marine Corps veteran, full stack web developer, and cyber security student with a passion for lifelong learning and improvement. With over 6 and a half years of experience
                        in customer facing roles, he has developed top notch communication skills and has been frequently recognized by his peers as a highly adaptable and organized leader. Having been certified
                        as a full stack web developer by the University of Utah, Jon plans to leverage that knowledge along with his diverse work experience in learning to become a cyber security professional.
                        Being an individual who loves to serve and protect others and working toward certifications in A+, Network+, Security+, Certified Ethical Hacker, and Certified Network Defender he aims
                        to become a Security Operations Center Specialist. Whether it was streamlining work processes in the office, going the extra mile to complete a project, or leading Marines in a training 
                        maneuver, he has repeatedly demonstrated an ability to flourish in fast paced environments, serve as an irreplaceable member of a team, and maintain an indomitable spirit. These are the 
                        skills and attitudes he will bring with him into every future endeavor. 
                        </p>
                        <p className="abt-bio-txt">View Jon's <a href={resume} target="_blank" rel="noreferrer" className="abt-resume">resume.</a></p>
                    </div>
                </div>
                <div className="row abt-row2">
                    <div className="col s12 m12 l12 xl12">
                        <h3 className="abt-awards-title">Honors & Awards</h3>
                        <ul id="abt-awards">
                            <li className="abt-indiv-award">Navy Achievement Medal - 2020 - United States Marine Corps</li>
                            <li className="abt-indiv-award">Academic Honor Graduate - 2019 - Marine Corps Association Foundation</li>
                            <li className="abt-indiv-award">Meritorious Mast Certificate - 2019 - Marine Corps Engineer School</li>
                            <li className="abt-indiv-award">Eagle Scout Award - 2014 - Boy Scouts of America</li>
                            <li className="abt-indiv-award">AP Scholar with Distinction - 2014 - Advanced Placement Board</li>
                        </ul>
                    </div>
                </div>
                <div className="row abt-row3">
                    <div className="col s12 m6 l6 xl6">
                        <h3 className="abt-skills-title">Skills</h3>
                        <div className="row">
                            <table>
                                <tbody>
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col s12 m6 l6 xl6">
                        <h3 className="abt-skills-title">Education/Certificates</h3>
                        <ul>
                            {certsArr.map(item => {
                                return(
                                    <CertList
                                        key={item.href}
                                        name={item.name}
                                        href={item.href}
                                    />
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default About;