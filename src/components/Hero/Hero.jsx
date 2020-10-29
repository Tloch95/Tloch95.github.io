import React, { useContext } from 'react'
import PortfolioContext from '../../context/context';
import Typing from 'react-typing-animation';
import Cursor from '../Cursor'

function Hero() {
  const { hero } = useContext(PortfolioContext);
  const { heroBtn, name, title, subtitle } = hero;

  return (
    <section id="hero" className="section">
      <div class="grid-container">
        <Typing cursor={<Cursor></Cursor>}>
          <div id="hero-hello">
            {title || 'Hello :)'}
            <br/>
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
        <a class="bn39" href="#about"><span class="bn39span">{heroBtn || "Learn more"}</span></a>
      </div>
    </section>
  )
}

export default Hero;