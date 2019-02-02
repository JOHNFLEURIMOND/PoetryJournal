import React from 'react';

function Header() {
  return (
    <header>
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
          <img
            src="./favicon.ico"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Poetry Journal
        </a>
      </nav>
    </header>
  );
}

export default Header;
