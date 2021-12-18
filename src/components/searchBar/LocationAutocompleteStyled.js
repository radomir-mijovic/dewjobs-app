import styled from "styled-components";

export const LocationAutocompleteStyled = styled.div`
  position: absolute;
  background: ${props => props.isLight ? '#FFFF' : '#19202D'};
  top: 8rem;
  z-index: 3;
  width: 100%;
  border-radius: 0 0 5px 5px;
  margin-top: .5rem;
  
  > h2 {
    cursor: pointer;
    margin: 1rem;
  }
`