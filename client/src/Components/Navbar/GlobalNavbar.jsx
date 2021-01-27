import React from 'react';
import { Navbar, NavItem, Icon, SideNavItem } from 'react-materialize';
import sidenavBg from '../../images/sidenav_bg.jpg';
import logo from '../../images/logo.png';
import resume from '../../certificates/resume.pdf';
import 'materialize-css/dist/css/materialize.min.css';
import './GlobalNavbar.css';

class GlobalNavbar extends React.Component {
    render() {
        return (
            <Navbar
                alignLinks="right"
                brand={<img src={logo} alt="'Jessee' logo" id="logo"></img>}
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
                sidenav={
                    <div>
                        <SideNavItem
                        user={{
                            background: sidenavBg,
                            email: 'tjessee7624@gmail.com',
                            name: 'Jon Jessee'
                        }}
                        userView
                        />
                        <SideNavItem divider/>
                        <SideNavItem
                            href="#/"
                            waves
                            icon={<Icon>home</Icon>}
                        >
                            Home
                        </SideNavItem>
                        <SideNavItem divider/>
                        <SideNavItem 
                            href="#/portfolio"
                            waves
                            icon={<Icon>art_track</Icon>}
                            >
                            Portfolio
                        </SideNavItem>
                        <SideNavItem divider />
                        <SideNavItem
                            href="#/contact"
                            waves
                            icon={<Icon>markunread</Icon>}
                        >
                            Contact
                        </SideNavItem>
                        <SideNavItem divider />
                        <SideNavItem
                            href={resume}
                            waves
                            icon={<Icon>portrait</Icon>}
                        >
                            Resume
                        </SideNavItem>
                    </div>
                }
                >
                <NavItem href="#/">
                    Home
                </NavItem>
                <NavItem href="#/portfolio">
                    Portfolio
                </NavItem>
                <NavItem href="#/contact">
                    Contact
                </NavItem>
                <NavItem href={resume}>
                    Resume
                </NavItem>
            </Navbar>
        );
    };
};

export default GlobalNavbar;