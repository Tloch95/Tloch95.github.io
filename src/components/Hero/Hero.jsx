import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Typing from 'react-typing-animation';

function Hero() {
  const { hero } = useContext(PortfolioContext);
  const { heroBtn, name, title, subtitle } = hero;

  return (
    <section id="hero" className="section">
      <Container id="hero-container">
        <Typing>
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
        <br/>
        {/* Button courtesy - https://github.com/r1/cssbuttons */}
        <a class="bn39" href="/"><span class="bn39span">{heroBtn || "Learn more"}</span></a> 
      </Container>
    </section>
  )
}

export default Hero;