import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Typing from 'react-typing-animation';

function Hero() {
  const { hero } = useContext(PortfolioContext);
  const { heroBtn, name, title, subtitle } = hero;

  return (
    <section id="hero" className="section">
      <Container id="hero-container" className="d-flex align-items-center min-vh-100">
        <Row>
          <Typing className="col-md-12 mb-3">
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
          <Col md={12}>
            <a class="bn39" href="/"><span class="bn39span">{heroBtn || "Learn more"}</span></a> 
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero;