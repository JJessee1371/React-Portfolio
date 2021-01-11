import React from 'react';
import GlobalNavbar from '../Components/GlobalNavbar';
import { ContactHeader } from '../Components/GenericHeader';
import ContactWrapper from '../Components/ContactWrapper';
import Footer from '../Components/Footer';

function Contact() {
    return (
        <div>
            <GlobalNavbar/>
            <div>
                <ContactHeader/>
                <ContactWrapper/>
                <Footer/>
            </div>
        </div>
    );
};

export default Contact;