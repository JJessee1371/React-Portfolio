import React from 'react';
import { Navbar, Icon, SideNav, SideNavItem, Button } from 'react-materialize';
import logo from '../../images/logo.png';
import 'materialize-css/dist/css/materialize.min.css';
import './GlobalNavbar.css';

class GlobalNavbar extends React.Component {
    render() {
        return (
            <Navbar>
                <div>
                    <style>
                        {`
                            #root > div > div {
                            z-index: 99999 !important;
                            }
                        `}
                    </style>
                    <SideNav
                        id="SideNav-10"
                        options={{
                        draggable: true
                        }}
                        trigger={<Button node="button" className="sidenavBtn"><Icon>dehaze</Icon></Button>}
                    >
                        <SideNavItem
                        user={{
                            background: 'https://placeimg.com/640/480/tech',
                            email: 'tjessee7624@gmail.com',
                            image: 'static/media/react-materialize-logo.824c6ea3.svg',
                            name: 'Jon Jessee'
                        }}
                        userView
                        />
                        <SideNavItem divider/>
                        <SideNavItem
                            href="/"
                            waves
                            icon={<Icon>home</Icon>}
                        >
                            Home
                        </SideNavItem>
                        <SideNavItem divider/>
                        <SideNavItem 
                            href="/portfolio"
                            waves
                            icon={<Icon>art_track</Icon>}
                            >
                            Portfolio
                        </SideNavItem>
                        <SideNavItem divider />
                        <SideNavItem
                            href="/contact"
                            waves
                            icon={<Icon>markunread</Icon>}
                        >
                            Contact
                        </SideNavItem>
                    </SideNav>
                </div>
            </Navbar>
            
            // <Navbar
            //     className="nav"
            //     alignLinks="right"
            //     brand={<Link to="/"><img src={logo} width="180" height="60" alt="'Jessee' logo" className="brand-logo"></img></Link>}
            //     id="mobile-nav"
            //     menuIcon={<Icon>menu</Icon>}
            //     options={{
            //         draggable: true,
            //         edge: 'left',
            //         inDuration: 250,
            //         onCloseEnd: null,
            //         onCloseStart: null,
            //         onOpenEnd: null,
            //         onOpenStart: null,
            //         outDuration: 200,
            //         preventScrolling: true
            //     }}
            //     >
            //     <NavItem>
            //         <Link to="/">Home</Link>
            //     </NavItem>
            //     <NavItem>
            //         <Link to="/portfolio">Portfolio</Link>
            //     </NavItem>
            //     <NavItem>
            //         <Link to="/contact">Contact</Link>
            //     </NavItem>
            // </Navbar>
        );
    };
};

export default GlobalNavbar;