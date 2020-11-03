import React, { useContext } from 'react'
import PortfolioContext from '../../context/context';
import Typing from 'react-typing-animation';
import Cursor from '../Cursor'

function Hero() {
  const { hero } = useContext(PortfolioContext);
  const { heroBtn, name, title, subtitle } = hero;

  return (
    <section id="hero" className="section">
      <div className="grid-container">
        <Typing cursor={<Cursor></Cursor>}>
          <div id="hero-hello">
            {title || 'Hello :)'}
          </div>
          <div id="hero-greeting">
            My name is {' '}
            <span id="hero-name">
              {name}
            </span>
            .
          </div>
          <div id="subtitle">
            {subtitle || "I'm a developer"}
          </div>
        </Typing>
        {/* Button courtesy - https://github.com/r1/cssbuttons */}
        <div id="hero-btn">
          <a className="bn39" href="#about"><span className="bn39span">{heroBtn || "Learn more"}</span></a>
        </div>
      </div>
    </section>
  )
}

export default Hero;