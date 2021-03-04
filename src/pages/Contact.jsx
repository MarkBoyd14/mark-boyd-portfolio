import React from 'react';

export default function Contact() {
  document.title = 'Mark Boyd - Contact';
  return (
    <section className="contact">
      <h3 className="section-header">Contact</h3>
      <div className="contact-links">
        <div className="contact-link">
          <a
            href="mailto: mark.boyd1414@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope contact-link-icon"></i>
            <h4>Email</h4>
          </a>
        </div>

        <div className="contact-link">
          <a
            href="https://www.linkedin.com/in/mark-boyd-60366117b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin contact-link-icon"></i>
            <h4>LinkedIn</h4>
          </a>
        </div>
        <div className="contact-link">
          <a
            href="https://github.com/MarkBoyd14?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github contact-link-icon"></i>
            <h4>Github</h4>
          </a>
        </div>
      </div>
    </section>
  );
}
