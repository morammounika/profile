import styled from "styled-components";

function Button({ text, css, ...all }) {
  return (
    <Btn css={css} {...all}>
      {text}
    </Btn>
  );
}

export default Button;

const Btn = styled.button`
  color: var(--green);
  border: 1px solid var(--green);
  border-radius: 0.2rem;
  padding: 0.6rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  transform: background-color 0.2s ease-in-out;
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
  ${({ css }) => (css ? css : "")}
`;
