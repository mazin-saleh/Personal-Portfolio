import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">Hi, I'm Your Name</h1>
        <p className="hero-sub">I build fast, accessible web applications with React, Vite and modern tooling.</p>
        <div className="hero-ctas">
          <a className="btn primary" href="#projects">See my work</a>
          <a className="btn" href="#contact">Contact me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
