import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TypingEffect = ({ strings, typeSpeed = 100, backSpeed = 50 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 1000);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (subIndex === strings[index].length + 1 && !reverse) {
      setReverse(true);
      return undefined;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % strings.length);
      return undefined;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? backSpeed : typeSpeed);
    return () => {
      clearTimeout(timeout);
      return undefined; // Explicitly return undefined to satisfy ESLint consistent-return rule
    };
  }, [subIndex, index, reverse, typeSpeed, backSpeed, strings]);

  return (
    <span>
      {`${strings[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
    </span>
  );
};

TypingEffect.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string).isRequired,
  typeSpeed: PropTypes.number,
  backSpeed: PropTypes.number,
};

TypingEffect.defaultProps = {
  typeSpeed: 100,
  backSpeed: 50,
};

export default TypingEffect;
