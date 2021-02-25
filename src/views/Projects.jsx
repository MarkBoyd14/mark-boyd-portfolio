import React from 'react';
import Project from '../components/Project';

export default function Projects() {
  document.title = 'Mark Boyd - Projects';
  const projects = [
    {
      name: 'GamerViews',
      image: '/images/gamerviews.png',
      demo: 'https://gamerviews.herokuapp.com/',
      code: 'https://github.com/MarkBoyd14/gamerviews',
    },
    {
      name: 'Vanilla JS Todo List',
      image: '/images/todo-list.png',
      demo: 'https://markboyd14.github.io/todo-list/',
      code: 'https://github.com/MarkBoyd14/todo-list',
    },
    {
      name: 'Snake',
      image: '/images/snake.png',
      demo: 'https://markboyd14.github.io/snake',
      code: 'https://github.com/MarkBoyd14/snake/',
    },
    {
      name: 'Portfolio',
      image: '/images/portfolio.png',
      demo: 'https://markboyd14.github.io/portfolio',
      code: 'https://github.com/MarkBoyd14/portfolio',
    },
  ];
  return (
    <section className="projects">
      <h4 className="section-header">Projects</h4>
      <div className="projects-grid">
        {projects.map((project) => {
          return (
            <Project
              key={project.name}
              name={project.name}
              image={project.image}
              demo={project.demo}
              code={project.code}
            />
          );
        })}
      </div>
    </section>
  );
}
