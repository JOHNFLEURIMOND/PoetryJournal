import React from 'react';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img
            src="./favicon.ico"
            width="30"
            height="30"
            classNameName="d-inline-block align-top"
            alt=""
          />
          Poetry Journal
        </a>
      </nav>
    </header>
  );
}

export default Header;
