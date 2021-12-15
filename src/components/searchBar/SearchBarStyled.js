import styled from "styled-components";

export const SearchBarStyled = styled.div`
  width: 100%;
  height: 80px;
  background: ${props => props.isLight ? '#FFFF' : '#19202D'};
  border-radius: 6px;
  display: grid;
  grid-template-columns: 42% 28% 30%;
  align-items: center;
  margin-top: -4rem;
  transition: background-color .4s ease-in-out;
  
  > div {
    display: flex;
    align-items: center;
    height: 100%;

    > input {
      width: 70%;
    }
  }
  
  
  .search-icon,
  .location-icon{
    height: 2.4rem;
  }
  
  .search-icon {
    margin-left: 6%;
    margin-right: 4%;
  }
  
  .location-icon {
    margin-left: 6%;
    margin-right: 4%;
  }
  
  
  .location {
    border-left: 1px solid #9DAEC2;
    border-right: 1px solid #9DAEC2;
  }
  
  .full-time {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 9%;
    padding-right: 4%;
    color: ${props => props.isLight ? '#121721' : '#FFFF'};
    transition: color .4s ease-in-out;
  }
  
  .checkbox {
    height: 2.4rem;
    width: 2.4rem;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .empty {
    background: ${props => props.isLight ? '#19202D' : '#FFFF'};
    opacity: 0.1;
    transition: background-color .4s ease-in-out;
  }
  
  .full {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #5964E0;

  }
  
  .full-time_h2 {
    display: none;
  }
  
  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
    
  }
  
  @media (max-width: 1000px) {
    
    .full-time-only_h2 {
      display: none;
    }
    .full-time_h2 {
      display: block;
    }

    .search-icon {
      margin-left: 10%;
      margin-right: 7%;
    }
  }
  
  @media (max-width: 700px) {
    display: none;
  }
`

