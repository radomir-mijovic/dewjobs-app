import styled from "styled-components";

export const SearchBarMobileStyled = styled.div`
  width: 100%;
  height: 8rem;
  background: ${props => props.isLight ? '#FFFF' : '#19202D'};
  border-radius: 6px;
  margin-top: -4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 7%;
  padding-right: 5%;
  transition: background-color .4s ease-in-out;
  
  > input {
    background: ${props => props.isLight ? '#FFFF' : '#19202D'};
    color: ${props => props.isLight ? '#121721' : '#FFFF'};
    transition: background-color .4s ease-in-out;
  }
  
  > img {
    cursor: pointer;
  }
  
  .search-icon {
    width: 2rem;
    height: 2rem;
  }
  
  @media (min-width: 701px) {
    display: none;
  }
`