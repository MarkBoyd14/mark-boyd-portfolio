import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <div className="overlay">
        <h4 className="card-name">{props.name}</h4>
        <a
          className="card-btn"
          href={props.demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-server"></i>
          Demo
        </a>
        <a
          className="card-btn"
          href={props.code}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-code"></i>
          Code
        </a>
      </div>
    </div>
  );
}
