import React, { useContext } from 'react'
import PortfolioContext from '../../context/context';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faBriefcase, faCodeBranch, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function About() {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "thomas-lochner-headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree,resume } = about;

  return (
    <section id="about" className="section">
      <div class="grid-container">
        <div class="section-header about-header">
          <FontAwesomeIcon icon={faInfoCircle} />{" "}
          About
        </div>
        <div id="para-container">
          <p id="para-1" className="about-paragraph">{paragraphOne}</p>
          <p id="para-2" className="about-paragraph">{paragraphTwo}</p>
          <p id="para-3" className="about-paragraph">{paragraphThree}</p>
        </div>
        <div class="img-wrapper">
          <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" style={{maxHeight: "100%", maxWidth: "400px"}}/>
        </div>
      </div>
    </section>
  )
}

export default About;