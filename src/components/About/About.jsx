import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

function About() {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree,resume } = about;

  return (
    <section id="about" className="section">
      <Container id="about-container">
          <div>
            
          </div>
      </Container>
    </section>
  )
}

export default About;