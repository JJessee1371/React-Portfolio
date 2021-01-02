import React from 'react';
import Navbar from '../Components/Navbar';
import { ContactHeader } from '../Components/GenericHeader';
import ContactWrapper from '../Components/ContactWrapper';
import Footer from '../Components/Footer';

function Contact() {
    return (
        <div>
            <Navbar/>
            <div>
                <ContactHeader/>
                <ContactWrapper/>
                <Footer/>
            </div>
        </div>
    );
};

export default Contact;