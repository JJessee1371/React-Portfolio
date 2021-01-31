import React from 'react';
import ContactCollection from '../ContactCollection/ContactCollection';
import 'materialize-css';
import './ContactWrapper.css';


function ContactWrapper() {
    return (
        <main className="main">
            <ContactCollection/>
        </main>
    );
};

export default ContactWrapper;