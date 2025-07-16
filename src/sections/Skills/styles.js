import styled from "styled-components";

export const SkillSection = styled.section`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
`;

export const SkillContent = styled.div`
  background-color: var(--light-navy);
  padding: 5rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 530px) {
    padding: 3.5rem 2rem;
  }
`;

export const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 84px);
  /* grid-auto-rows: 100px; */
  grid-row-gap: 54px;
  @media only screen and (max-width: 1050px) {
    grid-template-columns: repeat(8, 65px);
    grid-row-gap: 42px;
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(6, 65px);
  }
  @media only screen and (max-width: 675px) {
    grid-template-columns: repeat(6, 56px);
    grid-row-gap: 36px;
  }
  @media only screen and (max-width: 530px) {
    grid-template-columns: repeat(6, 48px);
    grid-row-gap: 32px;
  }
`;

export const GridItem = styled.div`
  padding: 0 4px;
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  .item-wrpper {
    width: 156px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--skill-navy);
    position: relative;
    border-radius: 2px;
    .skill-img {
      width: 80px;
      height: 80px;
      z-index: 2;
      filter: grayscale(1);
      transition: all 0.5s ease-in-out;
    }
    .skill-name {
      z-index: 2;
      font-size: 0.8rem;
      color: var(--green);
      transition: all 0.5s ease-in-out;
      transform: translateY(4px);
      opacity: 0;
      height: 0;
    }
    &.active,
    &:hover {
      .skill-img {
        transform: translateY(-0.25rem);
        filter: grayscale(0);
      }
      .skill-name {
        opacity: 1;
        transform: translateY(0px);
        height: 1rem;
      }
    }
    &:before,
    &:after {
      display: block;
      position: absolute;
      content: "";
      width: inherit;
      height: inherit;
      border-radius: inherit;
      background-color: var(--skill-navy);
    }
    &:before {
      transform: rotate(60deg);
    }
    &:after {
      transform: rotate(-60deg);
    }
  }
  &.grid-item-1 {
    .item-wrpper {
      .skill-img {
        background-color: #0069ff;
        border-radius: 50%;
        border: 1px solid #0069ff;
      }
    }
  }
  &.grid-item-5 {
    grid-column: 2 / span 2;
  }
  @media only screen and (max-width: 1050px) {
    .item-wrpper {
      width: 121px;
      height: 70px;
    }
  }
  @media only screen and (max-width: 800px) {
    &.grid-item-4 {
      grid-column: 2 / span 2;
    }
    &.grid-item-5 {
      grid-column: span 2;
    }
    .item-wrpper {
      .skill-img {
        width: 60px;
        height: 60px;
      }
    }
  }
  @media only screen and (max-width: 675px) {
    .item-wrpper {
      width: 104px;
      height: 60px;
      .skill-img {
        width: 45px;
        height: 45px;
      }
    }
  }
  @media only screen and (max-width: 530px) {
    .item-wrpper {
      width: 87px;
      height: 50px;
    }
  }
`;
