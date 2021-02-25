import React from 'react';

export default function About() {
  document.title = 'Mark Boyd - About';
  return (
    <section className="about">
      <h3 className="section-header">Oh, Hi Mark!</h3>
      <div className="row">
        <div class="col-2 col-left">
          <img id="profile-image" src="/images/profile.jpg" alt="Profile"></img>
        </div>
        <div class="col-2 col-right">
          <p>
            Hello and thank you for taking the time to visit my portfolio! My
            name is Mark and I am an aspiring full stack web developer residing
            in Barrie, Ontario. I have been programming since 2018 and recently
            completed the Computer Programming program at Georgian College. I
            started writing code with Java and have since worked with a variety
            of other languages including JavaScript, Python, PHP, C#, and Swift.
            I also have a Bachelor of Science in Biology from Trent University
            but decided to make a career change that is more in line with my
            passions.
          </p>
          <br />
          <p>
            I love web development and am passionate about building exceptional
            websites and web applications with HTML, CSS, and JavaScript along
            with their modern frameworks and libraries including (but not
            limited to) Bootstrap and React! I am always trying to learn new
            technologies to improve my skills and stay up to date with the
            latest trends.
          </p>
        </div>
      </div>
    </section>
  );
}
