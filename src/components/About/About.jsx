import React, { useContext } from 'react'
import PortfolioContext from '../../context/context';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

function About() {
  const StyledPic = styled.div`
    position: relative;
    max-width: 300px;
    width: 70%;
  `;

  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "thomas-lochner-headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const { about } = useContext(PortfolioContext);
  const { paragraphOne, paragraphTwo, paragraphThree } = about;

  return (
    <section id="about" className="section">
      <div className="grid-container">
        <div className="section-header about-header">
          <FontAwesomeIcon icon={faInfoCircle} />{" "}
          About
        </div>
        <div id="para-container">
          <p id="para-1" className="about-paragraph">{paragraphOne}</p>
          <p id="para-2" className="about-paragraph">{paragraphTwo}</p>
          <p id="para-3" className="about-paragraph">{paragraphThree}</p>
        </div>
        <StyledPic>
          <div className="img-wrapper">
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img"/>
          </div>
        </StyledPic>
      </div>
    </section>
  )
}

export default About;