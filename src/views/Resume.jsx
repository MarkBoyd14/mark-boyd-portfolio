import React from 'react';

export default function Resume() {
  document.title = 'Mark Boyd - Resume';
  return (
    <section className="resume">
      <h3 className="section-header">Welcome to my portfolio!</h3>
      <a
        href="https://drive.google.com/file/d/1wPIjXlxNY5z0X5rQB-DN8GLOEWgmHNsl/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </a>
    </section>
  );
}
