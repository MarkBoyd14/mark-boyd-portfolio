import React from 'react';
import Card from '../components/Card/Card';

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
      name: 'Spotify Player',
      image: '/images/spotify-player.png',
      demo: 'https://spotify-player-mb.herokuapp.com/',
      code: 'https://github.com/MarkBoyd14/spotify-player',
    },
    {
      name: 'Pokedex',
      image: '/images/pokedex.png',
      demo: 'https://pokeapi-pokedex-react.herokuapp.com/',
      code: 'https://github.com/MarkBoyd14/pokedex',
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
      demo: 'https://vanilla-js-snake.herokuapp.com/',
      code: 'https://github.com/MarkBoyd14/snake',
    },
    {
      name: 'Tribute Page',
      image: '/images/tribute-page.png',
      demo: 'https://markboyd14.github.io/tribute-page/',
      code: 'https://github.com/MarkBoyd14/tribute-page',
    },
    {
      name: 'Survey Form',
      image: '/images/survey-form.png',
      demo: 'https://markboyd14.github.io/survey-form/',
      code: 'https://github.com/MarkBoyd14/survey-form',
    },
    {
      name: 'Portfolio',
      image: '/images/portfolio.png',
      demo: 'https://markboyd.ca/',
      code: 'https://github.com/MarkBoyd14/mark-boyd-portfolio',
    },
  ];
  return (
    <section id="projects">
      <h3 className="section-header">Projects</h3>
      <p style={{ textAlign: 'center', paddingBottom: '20px' }}>
        *Apps hosted on Heroku can take up to a minute to wake up*
      </p>
      <div className="card-grid">
        {projects.map((project) => {
          return (
            <Card
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
