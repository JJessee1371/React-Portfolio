import React, { useState } from 'react';
import Message from '../Message/Message';
import emailjs from 'emailjs-com';
import 'materialize-css';
import './ContactForm.css';

function ContactForm() {
    const [message, setMessage] = useState(null);
    const [messageClass, setMessageClass] = useState(null);

    function sendEmail(event) {
        event.preventDefault();

        emailjs.sendForm("service_x6sma0x", "template_gf4iofk", event.target, "user_yUxZEotsuxODhopQO3rnB")
        .then((result) => {
            console.log(result.text);
            setMessage('Message successfully sent');
            setMessageClass('success');
        }, (error) => {
            console.log(error.text);
            setMessage(error.text);
            setMessageClass('error');
        });
    }
    return (
        <div className="contact-form">
            <h2 className="form-header">Send me a direct message here! I am most often available from 9 a.m. to 5 p.m. EST, but will get back to you as soon as possible. Thank you!</h2>
            <form className="col s12 m12 l12 xl12" onSubmit={sendEmail}>
                <div className="row">
                    <div className="input-field col s6 m6 l6 xl6">
                        <input type="text" name="user_name" className="validate"></input>
                        <label className="form-label">Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6 m6 l6 xl6">
                        <input type="text" name="user_email" className="validate"></input>
                        <label className="form-label">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea className="materialize-textarea" name="message"></textarea>
                        <label className="form-label">Message</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Send
                    <i className="material-icons right">send</i>
                </button>

                {message ? <Message message={message} class={messageClass}/> : null}
            </form>
        </div>
    );
};

export default ContactForm;