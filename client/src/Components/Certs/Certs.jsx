import React from 'react';
import fullstack from '../../certificates/bootcamp_cert.pdf';
import html from '../../certificates/HTML-essential-training.pdf';
import css from '../../certificates/CSS-essential-training.pdf';
import node from '../../certificates/nodejs-essential-training.pdf';
import mysql from '../../certificates/mysql-essential-training.pdf';
import mongo from '../../certificates/MongoDB.pdf';
import reactjs from '../../certificates/React-essential-training.pdf';
import reacthooks from '../../certificates/react-hooks.pdf';
import reactapis from '../../certificates/react-apis.pdf';
import excel from '../../certificates/excel-2019-essential-training.pdf';
import word from '../../certificates/word-2019-essential-training.pdf';
import 'materialize-css';
import './Certs.css';


function Certs() {
    return (
        <div className="col s12 m6 l6 xl6">
            <h3 className="title">Education/Certificates</h3>
            <ul id="certs">
                <li><a href={fullstack} target="_blank" rel="noreferrer" className="certs">Full stack certificate - University of Utah</a></li>
                <li><a href={html} target="_blank" rel="noreferrer" className="certs">HTML5 - LinkedIn</a></li>
                <li><a href={css} target="_blank" rel="noreferrer" className="certs">CSS - LinkedIn</a></li>
                <li><a href={node} target="_blank" rel="noreferrer" className="certs">Node.js - LinkedIn</a></li>
                <li><a href={mysql} target="_blank" rel="noreferrer" className="certs">MySQL - LinkedIn</a></li>
                <li><a href={mongo} target="_blank" rel="noreferrer" className="certs">MongoDB - LinkedIn</a></li>
                <li><a href={reactjs} target="_blank" rel="noreferrer" className="certs">React - LinkedIn</a></li>
                <li><a href={reacthooks} target="_blank" rel="noreferrer" className="certs">React Hooks - LinkedIn</a></li>
                <li><a href={reactapis} target="_blank" rel="noreferrer" className="certs">React APIs - LinkedIn</a></li>
                <li><a href={excel} target="_blank" rel="noreferrer" className="certs">Microsoft Excel 2019 - LinkedIn</a></li>
                <li><a href={word} target="_blank" rel="noreferrer" className="certs">Microsoft Word 2019 - LinkedIn</a></li>
            </ul>
        </div>
    );
};

export default Certs;