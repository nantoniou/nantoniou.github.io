import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePowerpoint } from '@fortawesome/free-solid-svg-icons/faFilePowerpoint';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons/faFilePdf';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons/faCodeBranch';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <p><a href={data.link} style={{ textTransform: 'capitalize' }}>{data.subtitle}</a></p>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
        <div className="buttons" style={{ display: 'flex', gap: '10px' }}>
          {data.presentationLink && (
            <a href={data.presentationLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button type="button" style={{ marginRight: '10px' }}>
                <FontAwesomeIcon icon={faFilePowerpoint} size="2x" /> Presentation
              </button>
            </a>
          )}
          {data.reportLink && (
            <a href={data.reportLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button type="button" style={{ marginRight: '10px' }}>
                <FontAwesomeIcon icon={faFilePdf} size="2x" /> Project Report
              </button>
            </a>
          )}
          {data.codeLink && (
            <a href={data.codeLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button type="button" style={{ marginRight: '10px' }}>
                <FontAwesomeIcon icon={faCodeBranch} size="2x" /> Code
              </button>
            </a>
          )}
        </div>
      </header>
      <a href={data.link} className="image" style={{ textDecoration: 'none' }}>
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    presentationLink: PropTypes.string,
    reportLink: PropTypes.string,
    codeLink: PropTypes.string,
  }).isRequired,
};

export default Cell;
