import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer id="footer">
      <div id="footer-wrapper">
        <nav id="footer-nav">
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div id="footer-contact">
          <ul>
            <li>
              <a
                href="mailto: mark.boyd1414@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-envelope footer-contact-icon"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mark-t-boyd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin footer-contact-icon"></i>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/MarkBoyd14?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github footer-contact-icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
