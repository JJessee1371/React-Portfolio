import React from 'react';
import ContactCollection from '../ContactCollection/ContactCollection';
import ContactForm from '../ContactForm/ContactForm';
import 'materialize-css';
import './ContactWrapper.css';


function ContactWrapper() {
    return (
        <main className="main">
            <ContactCollection/>
            <ContactForm/>
        </main>
    );
};

export default ContactWrapper;