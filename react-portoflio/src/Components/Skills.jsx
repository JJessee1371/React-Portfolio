import React from 'react';
import 'materialize-css';
import '../CSS/Skills.css';

function Skills() {
    return (
        <div className="col s12 m6 l6 xl6">
            <h3 className="center">Skills</h3>
            <ul id="hskills">
                <li><i className="fab fa-html5"></i> HTML</li>
                <li><i className="fab fa-css3-alt"></i> CSS</li>
                <li><i className="fab fa-js-square"></i> JavaScript</li>
                <li><i className="fab fa-node-js"></i> Node.js</li>
                <li><i className="fas fa-database sql"></i> MySQL</li>
                <li><i className="fas fa-database mongo"></i> MongoDB</li>
                <li><i className="fab fa-microsoft"></i> Microsoft Office</li>
            </ul>
        </div>
    );
};

export default Skills;