import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import logo from '../images/logo.png';

class GlobalNavbar extends React.Component {
    render() {
        return (
            <Navbar
                className="nav"
                alignLinks="right"
                brand={<Link to="/"><img src={logo} width="180" height="60" alt="'Jessee' logo" className="brand-logo"></img></Link>}
                // brand={<a className="brand-logo" href="/"><img src={logo} width="180" height="60" alt="'Jessee' logo" className="brand-logo"></img></a>}
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
                >
                <NavItem>
                    <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                    <Link to="/portfolio">Portfolio</Link>
                </NavItem>
                <NavItem>
                    <Link to="/contact">Contact</Link>
                </NavItem>
            </Navbar>
        );
    };
};

export default GlobalNavbar;