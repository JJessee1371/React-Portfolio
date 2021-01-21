import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className="col s12 m6 l6 xl6">
          <div className="card">
            <div className="card-image">
              <img src={props.src} alt={props.alt}></img>
            </div>
            <span className="card-title">{props.title}</span>
            <div className="card-content">
              <p>{props.desc}</p>
            </div>
            <div className="card-action">
              <a href={props.deployed} target="blank" id="grow-deploy">Deployed Application</a>
              <a href={props.github} target="blank" id="grow-github">GitHub Repository</a>
            </div>
          </div>
        </div>
    );
};

export default Card;