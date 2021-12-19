import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 10px;
  }
  
  
  body {
    font-family: 'Kumbh Sans', sans-serif;
    background: ${props => props.isLight ? '#F2F2F2' : '#121721'};
    transition: background-color .4s ease-in-out;
    //height: ${props => props.isModal ? '100%' : undefined};
    overflow: ${props => props.isModal ? 'hidden' : undefined};
  }
  
  h1, h2 {
    color: ${props => props.isLight ? '#121721' : '#FFFF'};
    transition: color .4s ease-in-out;
  }
  
  h3 {
    color: #5964E0;
    font-size: 1.4rem;
  }
  
  a {
    text-decoration: none;
  }
  
  input {
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 400;
    border: none;
    outline: none;
    font-size: 1.6rem;
    background: ${props => props.isLight ? '#FFFF' : '#19202D'};
    color: ${props => props.isLight ? '#121721' : '#FFFF'};
    transition: all .4s ease-in-out;
  }
  
  button {
    border: none;
    border-radius: 5px;
    color: #FFFF;
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 600;
    cursor: pointer;
    
    :active {
      transform: scale(.95);
    }
  }
  
  ul, ol {
    margin-top: 2.4rem;
  }
  
  li {
    margin-bottom: 8px;
    color: #5964E0;
    font-size: 1.6rem;
    font-weight: 700;
    
    > h2 {
      margin-left: 3.6rem;
    }
  }
`

export default GlobalStyle;


export const H2Card = styled.h2`
  color: ${props => props.isLight ? '#6E8098' : '#9DAEC2'};
  font-weight: 400;
  font-size: 1.6rem;
`

export const DotStyled = styled.div`
  height: 4px;
  width: 4px;
  background: #6E8098;
  border-radius: 50%;
`