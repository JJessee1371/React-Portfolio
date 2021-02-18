import React from 'react';
import 'materialize-css';
import './Skills.css';

function Skills() {
    return (
        <div className="col s12 m6 l6 xl6">
            <h3 className="title">Skills</h3>
            <div className="row">
                <table>
                    <tr>
                        <td className="icon"><i className="fab fa-html5 fa-2x"></i></td>
                        <td className="icon"><i className="fab fa-css3-alt fa-2x"></i></td>
                        <td className="icon"><i className="fab fa-node-js fa-2x"></i></td>
                        <td className="icon"><i className="fab fa-js-square fa-2x"></i></td>
                    </tr>
                    <tr>
                        <td className="skill-text">HTML</td>
                        <td className="skill-text">CSS</td>
                        <td className="skill-text">Node.js</td>
                        <td className="skill-text">JavaScript/jQuery</td>
                    </tr>
                    <tr>
                        <td className="icon"><i className="fas fa-database sql fa-2x"></i></td>
                        <td className="icon"><i className="fas fa-database mongo fa-2x"></i></td>
                        <td className="icon"><i className="fab fa-react fa-2x"></i></td>
                        <td className="icon"><i className="fab fa-microsoft fa-2x"></i></td>
                    </tr>
                    <tr>
                        <td className="skill-text">MySQL</td>
                        <td className="skill-text">MongoDB</td>
                        <td className="skill-text">React.js</td>
                        <td className="skill-text">Microsoft Office</td>
                    </tr>
                </table>
            </div>

            
            {/* <ul id="hskills">
                <li><i className="fab fa-html5"></i> HTML</li>
                <li><i className="fab fa-css3-alt"></i> CSS</li>
                <li><i className="fab fa-js-square"></i> JavaScript/jQuery</li>
                <li><i className="fab fa-node-js"></i> Node.js</li>
                <li><i className="fas fa-database sql"></i> MySQL</li>
                <li><i className="fas fa-database mongo"></i> MongoDB</li>
                <li><i className="fab fa-react"></i> React</li>
                <li><i className="fab fa-microsoft"></i> Microsoft Office</li>
            </ul> */}
        </div>
    );
};

export default Skills;