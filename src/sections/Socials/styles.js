import styled from "styled-components";

export const SocialsComp = styled.div`
  width: 2rem;
  position: fixed;
  bottom: 0;
  left: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-delay: 2.2s;
  .bar {
    margin-top: 0.5rem;
    height: 4rem;
    width: 2px;
    background: var(--white);
  }
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

export const MediaCont = styled.ul`
  list-style: none;
  .social-link {
    display: inline-block;
    padding: 0.5rem;
    margin-bottom: 0.25rem;
    cursor: pointer;
    transition: transform 0.2s ease;
    svg {
      width: 20px;
      height: auto;
    }
    &:hover {
      transform: translateY(-0.25rem);
      svg {
        fill: var(--green);
      }
    }
  }
  &.mobile {
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    animation-delay: 1.2s;
    .social-link {
      padding: 1rem;
      margin: 0 1rem;
    }
  }
`;
