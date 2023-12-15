import React from 'react'
import '../styles.scss'
import Fade from 'react-reveal/Fade';

function Hero() {
  return (
      <section id="hero" className="jumbotron">
      <div className="container">
        <Fade left>
        <h1 className="hero-title load-hidden">
          Hi, my name is <span className="text-color-main">Vikas Negi</span>
          <br />
          I'm a Full Stack Web Developer.
        </h1>
        </Fade>
        <Fade left>
        <p className="hero-cta load-hidden">
          <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about">Know more </a>
        </p>
        </Fade>
      </div>
    </section>
  )
}

export default Hero;