import styled from 'styled-components';

export const StyledMenu = styled.nav`
  background: $light-grey;
  height: 100vh;
  width: 80vw;
  z-index: 50;
  top: 0;
  right: 0;
  position: fixed;
  transform: ${({ showMenu }) => showMenu ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;

  .flex-container {
    display: flex;
    height: 100%;
    flex-direction: column;

    a {
      text-decoration: none;
      display: flex;
      color: $white;
      font-size: $header-tab-font-size;
      flex: 1 0 0;
      align-items: center;
      justify-content: center;

      span {
        margin-left: 2px;
        font-size: clamp($fz-md, 1.1rem, $fz-xl);
      }
    }

    a:hover {
      background-color: $dark-grey;
    }
  }
`