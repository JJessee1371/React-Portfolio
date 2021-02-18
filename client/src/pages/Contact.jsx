import React from 'react';
import { ContactHeader } from '../Components/GenericHeader/GenericHeader';
import ContactWrapper from '../Components/ContactWrapper/ContactWrapper';

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