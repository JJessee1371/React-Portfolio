import React from 'react';
import './GenericHeader.css';

function ContactHeader() {
    return (
        <header className="header-text header-bg">Let's Connect!</header>
    );
};

function PortfolioHeader() {
    return (
        <header className="header-text header-bg">My Projects</header>
    );
};

export { ContactHeader, PortfolioHeader };