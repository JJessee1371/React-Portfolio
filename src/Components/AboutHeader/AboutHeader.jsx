import React, { useState, useEffect } from 'react';
import './AboutHeader.css';

//Homepage unique header
function AboutHeader() {
    const [effect, setEffect] = useState('header-text animated');

    useEffect(() => {
        setEffect('header-text animated bounce');
    },[]);

    return (
        <header className="header-main">
            <p id="line1" className={effect}>Passionate full stack developer.</p>
            <p id="line2" className={effect}>Dedicated forward thinker.</p>
            <p id="line3" className={effect}>Enthusiastic collaborator.</p>
        </header>
    );
};

export default AboutHeader;