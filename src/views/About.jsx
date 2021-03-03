import React from 'react';

export default function About() {
  document.title = 'Mark Boyd - About';
  return (
    <section className="about">
      <h3 className="section-header">About Me</h3>
      <div className="row">
        <p>
          Hello and thank you for taking the time to visit my portfolio! My name
          is Mark and I am an aspiring full stack web developer residing in
          Barrie, Ontario. I have been programming since 2018 and recently
          received my Computer Programming diploma from Georgian College. I
          began learning to code with Java and have since worked with a variety
          of other languages including JavaScript, PHP, C#, C++, and Swift. I
          also have a Bachelor of Science in Biology from Trent University but
          decided to make a career change that is more in line with my passions.
        </p>
        <br />
        <p>
          I love web development and am passionate about building websites and
          web applications with HTML, CSS, JavaScript, and React. I am always
          open to learning new technologies to improve my skills and stay up to
          date with the latest technology trends.
        </p>
      </div>
    </section>
  );
}
