import styled from "styled-components";

export const CardsStyled = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(33rem, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 6.5rem;
  margin-top: 10.5rem;
  position: relative;

  .card {
    background: ${props => props.isLight ? '#FFFF' : '#19202D'};
    height: 22.8rem;
    border-radius: 6px;
    padding: 4.2rem 3.2rem 3.2rem;
    transition: background-color .4s ease-in-out;
  }

  .big-info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .info {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 15rem;
  }

  .logo {
    height: 5rem;
    width: 5rem;
    background: #34353F;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: -6.5rem;
  }
`