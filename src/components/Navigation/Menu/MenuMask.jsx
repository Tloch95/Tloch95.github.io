import React from 'react'

import { StyledMenuMask } from './MenuMask.styled';

function MaskMenu({ showMenu, setShowMenu, ...props }) {
  let menuMask
  if (showMenu) {
    menuMask = <StyledMenuMask onClick={() => {setShowMenu(!showMenu)}} {...props}></StyledMenuMask>
  }

  return (
    <>
      {menuMask}
    </>
  );
}

export default MaskMenu