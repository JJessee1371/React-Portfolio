import React from 'react';
import { ContactHeader } from '../Components/GenericHeader';
import ContactWrapper from '../Components/ContactWrapper';

function Contact() {
    return (
        <div>
            <div>
                <ContactHeader/>
                <ContactWrapper/>
            </div>
        </div>
    );
};

export default Contact;