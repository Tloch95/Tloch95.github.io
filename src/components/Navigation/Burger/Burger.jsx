import React from "react"
import { StyledBurger } from './Burger.styled';

function Burger({ showMenu, setShowMenu, ...props }) {
  return (
    <StyledBurger showMenu={showMenu} onClick={() => setShowMenu(!showMenu)} {...props}>
      <span />
      <span />
      <span />
    </StyledBurger>
  );
}

export default Burger