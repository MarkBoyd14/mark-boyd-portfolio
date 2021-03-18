import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
  return (
    <header className="header">
      {props.width <= 960 ? <Navbar /> : null}
      <h1 id="title">
        <Link to="/">
          Mark <span>Boyd</span>
        </Link>
      </h1>
      <h2 id="subtitle">
        <Link to="/">Software Developer</Link>
      </h2>
      {props.width > 960 ? <Navbar /> : null}
    </header>
  );
}
