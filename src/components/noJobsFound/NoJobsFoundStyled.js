import styled from "styled-components";

export const NoJobsFoundStyled = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding-top: 5rem;
  
  > img {
    width: 35rem;
    height: auto;
  }
  
  @media (max-width: 700px) {
    > img {
      width: 25rem;
    }
  }
`