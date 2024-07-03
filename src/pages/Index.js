import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import TypingEffect from '../components/Effects/TypingEffects'; // Import your custom typing effect component

const Index = () => (
  <Main
    description={"Angel Gantzia's personal website. Data scientist & MIT grad student, "
    + 'A curious mind who enjoys the challenge of solving complex real-world problems using data.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            An aesthetically-pleasing, responsive, statically-generated,
            react application, written with modern JavaScript.
          </p>
        </div>
      </header>
      <p> Welcome to my personal website.</p>
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/projects">projects</Link>, {' '}
        <Link to="/resume">resume</Link>, {' '}
        view some quick <Link to="/stats">statistics about me</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p>I am <TypingEffect strings={['self-driven.', 'a fast learner.', 'an active listener.', 'a team player.']} /></p>
    </article>
  </Main>
);

export default Index;
