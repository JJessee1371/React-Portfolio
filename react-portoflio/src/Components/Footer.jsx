import React from 'react';
import 'materialize-css';

function Footer() {
    return (
        <footer className="page-footer">
            <nav>
                <ul className="links">
                    <li className="grey-text text-lighten-3">
                        <a href="https://www.linkedin.com/in/jonathanjessee" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                        LinkedIn
                        </a>
                    </li>
                    <li className="grey-text text-lighten-3">
                        <a href="https://github.com/JJessee1371" target="_blank">
                        <i className="fab fa-github"></i>
                        GitHub
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;