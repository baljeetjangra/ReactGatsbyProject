import React from "react"
import { Link } from "gatsby"
const Header = () => {
  return (
    <header>
      <nav id="navbar">
        <h4 className="logo">My website </h4>
        <ul className="nav">
          <li className="navlinks">
            <Link to="/">Home</Link>
          </li>
          <li className="navlinks">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="navlinks">
            <Link to="/about">About</Link>
          </li>
          <li className="navlinks">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
