// src/stories/Header.jsx

import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => {
  return (
    <header>
      <div>
        {user ? (
          <>
            <span>Welcome, {user.name}!</span>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={onLogin}>Login</button>
            <button onClick={onCreateAccount}>Sign up</button>
          </>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};
