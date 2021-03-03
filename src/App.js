import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Resume from './views/Resume';
import About from './views/About';
import Projects from './views/Projects';
import Contact from './views/Contact';
import './App.css';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className="App">
      <Header width={width}></Header>
      <div className="container">
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/" exact>
            <About />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
