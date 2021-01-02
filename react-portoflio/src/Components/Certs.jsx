import React from 'react';
import 'materialize-css';

function Certs() {
    return (
        <div className="col s12 m6 l6 xl6">
            <h3 className="center">Continuing Education</h3>
            <ul id="certs">
                <li><a href="/Certificates/HTML-essential-training.pdf" target="_blank" className="certs">HTML5</a></li>
                <li><a href="/Certificates/CSS-essential-training.pdf" target="_blank" className="certs">CSS</a></li>
                <li><a href="/Certificates/nodejs-essential-training.pdf" target="_blank" className="certs">Node.js</a></li>
                <li><a href="/Certificates/MongoDB.pdf" target="_blank" className="certs">MongoDB</a></li>
                <li><a href="/Certificates/excel-2019-essential-training.pdf" target="_blank" className="certs">Microsoft Excel 2019</a></li>
                <li><a href="/Certificates/word-2019-essential-training.pdf" target="_blank" className="certs">Microsoft Word 2019</a></li>
            </ul>
        </div>
    );
};

export default Certs;