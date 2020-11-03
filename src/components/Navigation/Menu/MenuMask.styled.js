import styled from 'styled-components';

export const StyledMenuMask = styled.div`
  background: #ffffff;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 45;
  opacity: ${({ showMenu }) => showMenu ? '0' : '0.5'};
  transition: opacity 2s ease-in-out;
  -webkit-transition: opacity 2s ease-in-out;
`