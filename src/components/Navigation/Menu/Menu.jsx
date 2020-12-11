import { Link } from "gatsby"
import React, { useContext } from "react"
import PortfolioContext from '../../../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faBriefcase, faCodeBranch, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { StyledMenu } from './Menu.styled';

function Menu({ showMenu, setShowMenu, ...props }) {
  const { head } = useContext(PortfolioContext);
  const { title } = head;

  return (
    <StyledMenu showMenu={showMenu} {...props}>
      <div id="menu">
        <div className="flex-container">
          <Link to="/">
            <span>{title}</span>
          </Link>
          <Link to="#about">
            <FontAwesomeIcon icon={faInfoCircle} />{" "}
            <span>About</span>
          </Link>
          <Link to="#experience">
            <FontAwesomeIcon icon={faBriefcase} />{" "}
            <span>Experience</span>
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faCodeBranch} />{" "}
            <span>Projects</span>
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </StyledMenu>
  );
}

export default Menu
