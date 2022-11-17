import React from 'react'

function Nav() {
  return (
    <nav className="navbar">
      {/* <a href="" className="logo">
        <img src="#" alt="#" />
      </a> */}
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#">Profile</a>
        </li>
        <li className="nav-item">
          <a href="#">Boards</a>
        </li>
        <li className="nav-item">
          <a href="#">Sign in</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
