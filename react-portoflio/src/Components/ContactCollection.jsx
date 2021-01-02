import React from 'react';
import 'materialize-css';

function ContactCollection() {
    return (
        <ul class="collection">
            <li class="collection-item">
            <i class="material-icons">local_phone</i> 385-309-7025
            </li>

            <li class="collection-item">
            <i class="material-icons">email</i> tjessee7624@gmail.com
            </li>

            <li><a class="collection-item" href="https://www.linkedin.com/in/jonathanjessee">
            <i class="fab fa-linkedin fa-2x"></i> LinkedIn</a>
            </li>
            
            <li><a class="collection-item" href="https://github.com/JJessee1371">
            <i class="fab fa-github-square fa-2x"></i> GitHub</a>
            </li>
        </ul>
    );
};

export default ContactCollection;