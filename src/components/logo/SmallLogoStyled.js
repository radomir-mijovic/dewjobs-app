import styled from "styled-components";

export const SmallLogoStyled = styled.div`
  height: 5rem;
  width: 5rem;
  background: ${props => props.logoBackgroudColor};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: -6.5rem;
`