import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  height: 10rem;
  background: ${props => props.isLight ? '#FFFF' : '#19202D'};
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24.65%;
  
  .job-info {
    > h1 {
      margin-bottom: 1.2rem;
    }
  }

  @media (max-width: 1200px) {
    padding: 0 18%;
  }

  @media (max-width: 900px) {
    padding: 0 5%;
  }
  
  @media (max-width: 700px) {
    margin-top: 4rem;
    border-radius: 5px 5px 0 0;
    .job-info {
      display: none;
    }
  }
`