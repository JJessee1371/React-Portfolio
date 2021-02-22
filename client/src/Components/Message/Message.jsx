import React from 'react';
import './Message.css';

function Message(props) {
    return (
        <div className={props.class}>
            <p>{props.message}</p>
        </div>
    );
};

export default Message;