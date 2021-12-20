import styled from "styled-components";

export const ButtonSearchStyled = styled.button`
  width: ${props => props.width || '14.1rem'};
  height: ${props => props.height || '4.8rem'};
  background: #5964E0;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color .2s ease-in-out;

  :hover {
    background: #939BF4;
  }
  
  @media (max-width: 1200px) {
    width: 8rem;
  }
  
  @media (max-width: 700px) {
    width: ${props => props.width || '4.8rem'};
    height: ${props => props.height || '4.8rem'};
  }
`

export const ButtonLoadMore = styled.button`
  width: 14.1rem;
  height: 4.8rem;
  background: #5964E0;
  font-size: 1.6rem;
  transition: background-color .4s ease-in-out;
  
  :hover {
    background: #939BF4;
  }
  
  @media (max-width: 700px) {
    margin-top: ${props => props.marginTop || undefined};
    width: ${props => props.width || undefined};
  }
`

export const ButtonCompanySiteStyled = styled.button`
  width: 14.7rem;
  height: 4.8rem;
  background: ${props => props.isLight ? '#e5e6f1' : '#484853'};
  color: ${props => props.isLight ?'#5964E0' : '#FFFF'};
  font-size: 1.6rem;
  font-weight: 700;
  transition: all .4s ease-in-out;
  
  :hover {
    background-color: ${props => props.isLight ? '#c2c5f1' : '#6d6d7d'};
  }
`

export const ButtonFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5.6rem;
  margin-bottom: 8rem;
  
  > button {
    
  }
`