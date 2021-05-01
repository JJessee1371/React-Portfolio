import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Message from '../Components/Message/Message';

function Contact() {
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
        <div>
            <div>
                {/* Contact Header component */}
                <header className="cont-header">Let's Connect!</header>
                {/* Contact wrapper component */}
                <main className="cont-main">
                    {/* Contact collection component */}
                    <ul className="collection">
                        <li className="collection-item">
                        <i className="material-icons">local_phone</i> 385-309-7025
                        </li>

                        <li className="collection-item">
                        <i className="material-icons">email</i> tjessee7624@gmail.com
                        </li>

                        <li className="collection-item"><a id="cont-linkedin" href="https://www.linkedin.com/in/jonathanjessee">
                        <i className="fab fa-linkedin fa-2x"></i> LinkedIn</a>
                        </li>
                        
                        <li className="collection-item"><a id="cont-github" href="https://github.com/JJessee1371">
                        <i className="fab fa-github-square fa-2x"></i> GitHub</a>
                        </li>
                    </ul>
                    {/* Contact form component */}
                    <div className="cont-form">
                        <h2 className="cont-form-header">Send me a direct message here! I am most often available from 9 a.m. to 5 p.m. EST, but will get back to you as soon as possible. Thank you!</h2>
                        <form className="col s12 m12 l12 xl12" onSubmit={sendEmail}>
                            <div className="row">
                                <div className="input-field col s6 m6 l6 xl6">
                                    <input type="text" name="user_name" className="validate"></input>
                                    <label className="cont-form-label">Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 m6 l6 xl6">
                                    <input type="text" name="user_email" className="validate"></input>
                                    <label className="cont-form-label">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea className="materialize-textarea" name="message"></textarea>
                                    <label className="cont-form-label">Message</label>
                                </div>
                            </div>
                            <button className="btn waves-effect waves-light" type="submit" name="action">Send
                                <i className="material-icons right">send</i>
                            </button>

                            {message ? <Message message={message} class={messageClass}/> : null}
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Contact;