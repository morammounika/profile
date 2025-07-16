import styled, { keyframes } from "styled-components";

const ripple = keyframes`
  0% {
    transform: scale(1); 
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const dashAnim = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const lazyShow = keyframes`
  to {
    opacity: 1;
  }
`;

export const Loader = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .img-wrap {
    width: 8rem;
    height: 8rem;
    border: 4px solid var(--green);
    border-radius: 50%;
    position: relative;
    padding: 0.25rem;
    .loding-logo {
      max-width: 100%;
      max-height: 100%;
    }
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: -2px;
      right: -2px;
      border-radius: 50%;
      border: 2px solid var(--green);
      width: calc(100% + 2px);
      height: calc(100% + 2px);
    }
    &:before {
      animation: ${ripple} 2s linear infinite;
    }
    &:after {
      animation: ${ripple} 2s linear 1s infinite;
    }
  }
  svg {
    #v-svg {
      stroke-dasharray: 462;
      stroke-dashoffset: 462;
      animation: ${dashAnim} 1.5s ease forwards;
    }
    #letter-v {
      opacity: 0;
      animation: ${lazyShow} 0.3s ease-in forwards;
      animation-delay: 1.5s;
    }
  }
`;
