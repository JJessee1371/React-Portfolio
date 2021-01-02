import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <img src="/images/logo.png" width="180" height="60" alt="'Jessee' logo" className="brand-logo"></img>
                        <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                        <ul className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        );
    };
};

export default Navbar;