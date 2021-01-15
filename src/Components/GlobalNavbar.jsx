import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

class GlobalNavbar extends React.Component {
    render() {
        return (
            <Navbar
                className="nav"
                alignLinks="right"
                brand={<a className="brand-logo" href="/"><img src="/images/logo.png" width="180" height="60" alt="'Jessee' logo" className="brand-logo"></img></a>}
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
                    <Link to="/about">Home</Link>
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