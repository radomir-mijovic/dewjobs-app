import styled from "styled-components";

export const JobInfoStyled = styled.div`
  width: 100%;
  height: auto;
  background: ${props => props.isLight ? '#FFFF' : '#19202D'};
  padding: 4.8rem 4.5rem;
  margin-top: 3.2rem;
  transition: background-color .4s ease-in-out;
  
  .company-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .info {
    
    > h1 {
      font-size: 2.8rem;
      margin: 8px 0;
    }
  }
  
  .small-info {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 15.2rem;
  }
  
  .text {
    margin-top: 4rem;
    line-height: 2.6rem;
  }
  
  .header-text {
    margin-top: 4rem;
    margin-bottom: 2.4rem;
  }
`