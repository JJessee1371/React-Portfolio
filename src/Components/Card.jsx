import React from 'react';
import '../CSS/Portfolio/Card.css';

function Card(props) {
    return (
        <div class="col s12 m6 l6 xl6">
          <div class="card">
            <div class="card-image">
              <img src={props.src} alt={props.alt}></img>
            </div>
            <span class="card-title">{props.title}</span>
            <div class="card-content">
              <p>{props.desc}</p>
            </div>
            <div class="card-action">
              <a href={props.deployed} target="blank" class="grow">Deployed Application</a>
              <a href={props.github} target="blank" class="grow">GitHub Repository</a>
            </div>
          </div>
        </div>
    );
};

export default Card;