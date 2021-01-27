import React, { useState, useEffect } from 'react';
import './AboutHeader.css';

//Homepage unique header
function AboutHeader() {
    const [effect1, setEffect1] = useState('header-text animated');
    const [effect2, setEffect2] = useState('header-text animated');
    const [effect3, setEffect3] = useState('header-text animated');

    //Timed animation for homepage headers
    useEffect(() => {
        setEffect1('header-text animated bounce');
        setTimeout(() => {
            setEffect2('header-text animated bounce');
        }, 1500);
        setTimeout(() => {
            setEffect3('header-text animated bounce');
        }, 3000);
    },[]);

    return (
        <header className="header-main">
            <p id="line1" className={effect1}>Passionate full stack developer.</p>
            <p id="line2" className={effect2}>Dedicated forward thinker.</p>
            <p id="line3" className={effect3}>Enthusiastic collaborator.</p>
        </header>
    );
};

export default AboutHeader;