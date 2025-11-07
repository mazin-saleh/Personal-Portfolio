import React from 'react'

const NavBar: React.FC = () => {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">My Portfolio</div>
        <nav className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
