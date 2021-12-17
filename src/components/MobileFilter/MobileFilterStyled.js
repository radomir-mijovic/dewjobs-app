import styled from "styled-components";

export const MobileFilterStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .4);
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  padding: 0 3rem;

  .close-icon {
    position: absolute;
    right: 10%;
    top: 30%;
    height: 3rem;
    cursor: pointer;

    :active {
      transform: scale(.85);
    }
  }

  .search-box {
    background: ${props => props.isLight ? '#FFFF' : '#19202D'};
    width: 100%;
    height: 21.7rem;
    border-radius: 6px;
  }

  .location {
    border-bottom: 1px solid ${props => props.isLight ? 'rgba(0, 0, 0, .1)' : '#6E8098'};
    height: 7.2rem;
    display: flex;
    padding: 2.4rem;
    position: relative;

    > img {
      margin-right: 1.6rem;
    }
  }

  .full-time {
    padding: 0 2.4rem;
  }

  .checkboxes {
    height: 7rem;
    display: flex;
    align-items: center;
  }

  .checkbox {
    height: 2.4rem;
    width: 2.4rem;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 1.6rem;
  }

  .empty {
    background: ${props => props.isLight ? '#19202D' : '#FFFF'};
    opacity: 0.1;
  }

  .full {
    display: grid;
    place-items: center;
    background: #5964E0;
  }

  @media (min-width: 701px) {
    display: none;
  }
`
