import React from 'react';
import './CertList.css';


function CertList(props) {
    return( 
        <li><a href={props.href} className="abt-cert" target="_blank" rel="noreferrer">{props.name}</a></li>  
    );
};

export default CertList;
