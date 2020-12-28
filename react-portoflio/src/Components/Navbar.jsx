import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <img src="/images/logo.png" width="180" height="60" alt="'Jessee' logo" className="brand-logo">
                        <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="/">Home</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        );
    };
};

export default Navbar;