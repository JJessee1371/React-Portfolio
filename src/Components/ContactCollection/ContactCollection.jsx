import React from 'react';
import 'materialize-css';
import './ContactCollection.css';

function ContactCollection() {
    return (
        <ul className="collection">
            <li className="collection-item">
            <i className="material-icons">local_phone</i> 385-309-7025
            </li>

            <li className="collection-item">
            <i className="material-icons">email</i> tjessee7624@gmail.com
            </li>

            <li className="collection-item"><a id="linkedin" href="https://www.linkedin.com/in/jonathanjessee">
            <i className="fab fa-linkedin fa-2x"></i> LinkedIn</a>
            </li>
            
            <li className="collection-item"><a id="github" href="https://github.com/JJessee1371">
            <i className="fab fa-github-square fa-2x"></i> GitHub</a>
            </li>
        </ul>
    );
};

export default ContactCollection;