import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
        <Link to="/pokemon-list">Pokemon List</Link>
        <div className="header-right">
            <Link to="/my-pokemon-list">My Pokemon List</Link>
        </div>
    </div>
  )
}

export default Header;
