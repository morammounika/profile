import styled from "styled-components";

export const RightBurgerMenu = styled.div`
  height: 1rem;
  width: 3rem;
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  animation-delay: 0.3s;
  .bar {
    position: absolute;
    height: 2px;
    background-color: var(--white);
    top: calc(50% - 1px);
    right: 0px;
  }
  .bar-1 {
    transition: 0.5s ease-in-out 0.6s;
    width: 1.75rem;
  }
  .bar-2 {
    width: 1.25rem;
  }
  .bar-3 {
    transition: 0.5s ease-in-out 0.6s;
    width: 0.75rem;
  }
  &.move {
    .bar-1 {
      top: 0px;
    }
    .bar-3 {
      top: calc(100% - 2px);
    }
  }
`;
