import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Angel Gantzia</h2>
        <p><a href="mailto:angel_gantzia@outlook.com">angel_gantzia@outlook.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Angel. I am an MIT Sloan <a href="https://mitsloan.mit.edu/"> MIT Sloan</a> graduate student, graduating in August &apos;24.
      </p>
      <p>I am a data scientist, and I am actively recruiting. I like to create value by tackling complex, real-world problems using data. I have had work experience in Tech as a data scientist at <a href="https://www.satalia.com/">Satalia</a> and in Consulting as a business analyst at <a href="https://www.ey.com/en_gr">Ernst & Young</a>.</p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
