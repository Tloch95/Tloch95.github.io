import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faBriefcase, faCodeBranch, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const { head } = useContext(PortfolioContext);
  const { title } = head;
  return (
    <header id="header">
      <Container fluid>
        <ul id="header-list">
          <li>
            <Link to="/">
              {title}
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faInfoCircle} />{" "}
                About
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faBriefcase} />{" "}
                Experience
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faCodeBranch} />{" "}
                Projects
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faEnvelope} />{" "}
                Contact
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
