import styled from "styled-components";
import navBackgroundImg from '../../assets/desktop/bg-pattern-header.svg'
import mobileBackgroundImg from '../../assets/mobile/bg-pattern-header.svg'

export const NavbarWrapper = styled.div`
  width: 100vw;
  height: 16.2rem;
  background-image: url(${navBackgroundImg});
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  padding: 4.6rem 11.46%;
  
  > img {
    width: 11.5rem;
    height: 3.2rem;
  }
  
  .switcher {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 11.2rem;
    height: 2.4rem;

  }
    
    .toggle {
      width: 4.8rem;
      background: #ffff;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: ${props => props.toggle ? 'flex-end' : 'flex-start'};
      padding: 5px;
      border-radius: 1.6rem;
    }
  
  .ball {
    height: 1.4rem;
    width: 1.4rem;
    background: #5964E0;
    border-radius: 50%;
    cursor: pointer;

    :hover {
      background: #939BF4;
    }
  }
  
  @media (max-width: 1000px) {
    padding: 4.6rem 5%;
  }
  
  @media (max-width: 700px) {
    background-image: url(${mobileBackgroundImg});
    height: 13.5rem;
    padding: 3.2rem;
  }
  
`