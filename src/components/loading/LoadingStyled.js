import styled from "styled-components";

export const LoadingStyled = styled.div`
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
    .bar {
      width: 3rem;
      height: 20rem;
      background: unset;
      display: inline-block;
      transform-origin: bottom center;
      border-top-right-radius: 2rem;
      border-top-left-radius: 2rem;
      animation: loader 1.2s linear infinite;
    }

  .bar1 {
    animation-delay: 0.1s;
  }
  .bar2 {
    animation-delay: 0.2s;
  }
  .bar3 {
    animation-delay: 0.3s;
  }
  .bar4 {
    animation-delay: 0.4s;
  }
  .bar5 {
    animation-delay: 0.5s;
  }
  .bar6 {
    animation-delay: 0.6s;
  }
  .bar7 {
    animation-delay: 0.7s;
  }
  .bar8 {
    animation-delay: 0.8s;
  }
  
  @keyframes loader {
    0% {
      transform: scaleY(.1);
      background: unset;
    }
    50% {
      transform: scaleY(1);
      background: #5964E0;
    }
    100% {
      transform: scaleY(.1);
      background: transparent;
    }
  }
`