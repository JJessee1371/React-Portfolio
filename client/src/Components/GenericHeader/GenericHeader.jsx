import React from 'react';
import './GenericHeader.css';

function ContactHeader() {
    return (
        <header className="page-header">Let's Connect!</header>
    );
};

function PortfolioHeader() {
    return (
        <header className="page-header">My Projects</header>
    );
};

export { ContactHeader, PortfolioHeader };