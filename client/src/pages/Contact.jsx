import React from 'react';
import { ContactHeader } from '../Components/GenericHeader/GenericHeader';
import ContactWrapper from '../Components/ContactWrapper/ContactWrapper';
import Upcoming from '../Components/Upcoming/Upcoming';

function Contact() {
    return (
        <div>
            <div>
                <ContactHeader/>
                <ContactWrapper/>
                <Upcoming/>
            </div>
        </div>
    );
};

export default Contact;