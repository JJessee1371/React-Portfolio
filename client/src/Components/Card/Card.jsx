import React from 'react';
import './Card.css';

function Card(props) {
    return (
      <div className="row">
        <div className="col s12 m6 l6 xl6">
          <div className="card" key={props.key1}>
            <div className="card-image">
              <img src={props.src1} alt={props.alt1}></img>
            </div>
            <span className="card-title">{props.title1}</span>
            <div className="card-content">
              <p>{props.desc1}</p>
            </div>
            <div className="card-action">
              <a href={props.deployed1} target="blank" id="grow-deploy"><i className="fas fa-globe-americas"></i> Deployed Application</a>
              <a href={props.github1} target="blank" id="grow-github"><i className="fab fa-github"></i> GitHub Repository</a>
            </div>
          </div>
        </div>

        <div className="col s12 m6 l6 xl6">
          <div className="card" key={props.key2}>
            <div className="card-image">
              <img src={props.src2} alt={props.alt2}></img>
            </div>
            <span className="card-title">{props.title2}</span>
            <div className="card-content">
              <p>{props.desc2}</p>
            </div>
            <div className="card-action">
              <a href={props.deployed2} target="blank" id="grow-deploy"><i className="fas fa-globe-americas"></i> Deployed Application</a>
              <a href={props.github2} target="blank" id="grow-github"><i className="fab fa-github"></i> GitHub Repository</a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;