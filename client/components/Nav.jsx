import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { IfAuthenticated, ItNotAuthenticated } from './Authenticated'

function Nav() {
  const { logout, loginWithRedirect, user } = useAuth0()

  const handleLogOff = (e) => {
    e.preventDefault()
    return logout()
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    return loginWithRedirect()
  }

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/boards">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/addboardform">Add board</Link>
        </li>
      </ul>

      <IfAuthenticated>
        <p>{user?.nickname}</p>
        <Link to="/" onClick={handleLogOff}>
          Sign out
        </Link>
      </IfAuthenticated>

      <ItNotAuthenticated>
        <Link to="/" onClick={handleSignIn}>
          Register | Sign in
        </Link>
      </ItNotAuthenticated>
    </nav>
  )
}

export default Nav
