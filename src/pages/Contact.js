import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';

const ContactDetail = ({
  ariaLabel, tooltip, icon, href, linkText,
}) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <a
      aria-label={ariaLabel}
      title={tooltip}
      href={href || '#'}
      style={{
        display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit',
      }}
    >
      <FontAwesomeIcon icon={icon} size="lg" style={{ marginRight: '10px' }} />
      {linkText}
    </a>
  </div>
);

ContactDetail.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired, // Changed to elementType for FontAwesomeIcon
  href: PropTypes.string,
  linkText: PropTypes.string.isRequired,
};

ContactDetail.defaultProps = {
  href: '#',
};

const ContactInfo = () => (
  <div className="container">
    <ContactDetail
      ariaLabel="Call Angel"
      tooltip="Call Angel"
      icon={faPhone}
      linkText="+1 (617)-201-4267"
    />
    <ContactDetail
      ariaLabel="Email Angel"
      tooltip="Email Angel"
      icon={faEnvelope}
      href="mailto:angel_gantzia@outlook.com"
      linkText="angel_gantzia@outlook.com"
    />
    <ContactDetail
      ariaLabel="View Angel on GitHub"
      tooltip="View Angel on GitHub"
      icon={faGithub}
      href="https://github.com/a-gantzia"
      linkText="github.com/a-gantzia"
    />
    <ContactDetail
      ariaLabel="View Angel on LinkedIn"
      tooltip="View Angel on LinkedIn"
      icon={faLinkedin}
      href="https://www.linkedin.com/in/angel-gantzia/"
      linkText="linkedin.com/in/angel-gantzia/"
    />
  </div>
);

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Angel Gantzia via email at angel_gantzia@outlook.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Please, feel free to get in touch. </p>
        <EmailLink />
      </div>
      <ContactInfo />
    </article>
  </Main>
);

export default Contact;
