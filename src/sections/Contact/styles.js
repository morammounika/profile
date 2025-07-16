import styled from "styled-components";

export const ContectMeCon = styled.section`
  padding: 2rem 0;
`;

export const ContctMe = styled.div`
  background-color: var(--light-navy);
  border-radius: 0.25rem;
  padding: 2.5rem;
  p {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .contact-wrp {
    .contact {
      margin-bottom: 0.4rem;
      &:last-child {
        margin-bottom: 0rem;
      }
      span {
        display: inline-block;
        min-width: 5rem;
      }
      a {
        color: var(--green);
        text-decoration: none;
        font-weight: 700;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  @media only screen and (max-width: 530px) {
    padding: 1.5rem;
  }
`;
