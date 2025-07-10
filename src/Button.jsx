import React from 'react';
import PropTypes from 'prop-types';

export function Button({ primary, size, backgroundColor, label, onClick }) {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <button
      type="button"
      className={`btn ${mode} ${size}`}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  backgroundColor: null,
  onClick: undefined,
};
