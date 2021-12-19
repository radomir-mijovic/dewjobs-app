import styled from "styled-components";

export const CompanyHeaderStyled = styled.div`
  width: 100%;
  height: 14rem;
  background: ${props => props.isLight ? '#FFFF' : '#19202D'};
  border-radius: 6px;
  margin-top: -5rem;
  display: flex;
  transition: background-color .4s ease-in-out;
  
  .logo-big {
    height: 14rem;
    width: 18rem;
    background: ${props => props.logoBackground};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 0 6px;

    > img {
      width: 8rem;
    }
  }
  
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
    width: 100%;
  }

  .company-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 42%;

    > h1 {
      font-size: 2.4rem;
    }
  }
  
  .small-logo {
    display: none;
    background: ${props => props.logoBackground};
  }
  
  @media (max-width: 500px) {
    height: 20.5rem;
    margin-top: -1.5rem;
    justify-content: center;
    
    .info {
      flex-direction: column;
      justify-content: center;
    }
    
    .company-info {
      height: 30%;
      margin-bottom: 3rem;
    }
    
    
    .logo-big {
      display: none;
    }
    
    .small-logo {
      display: flex;
      top: 15rem;
    }
  }
  
`