import React, { useState } from 'react';
import { TextInput, Textarea, Icon, Button } from 'react-materialize';

function Mailer() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    //Reset form values to blank state
    const resetForm = () => {
        setEmail('');
        setMessage('');
    };

    //Hanlde form submission event
    const handleFormSubmit = async(event) => {
        event.preventDefault();
        const response = await fetch('/mailer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, message })
        });

        const resData = await response.json();
        if(resData.status === 'success') {
            alert('Message sent successfully');
            this.resetForm();
        } else if(resData.status === 'fail') {
            alert('Message failed to send');
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <TextInput
                icon="email"
                id="TextInput-4"
                label="Email"
                validate
                placeholder="Email address"
                name="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
            <Textarea
                icon={<Icon>mode_edit</Icon>}
                id="Textarea-12"
                placeholder="Your message here"
                name="message"
                value={message}
                onChange={event => setMessage(event.target.value)}
            />
            <Button
                node="button"
                type="submit"
                waves="light"
                >
                Submit
                <Icon right>
                    send
                </Icon>
            </Button>
        </form>
    );
};

export default Mailer;