import styled from "styled-components";

export const FooterSection = styled.footer`
  background-color: #121212;
  display: flex;
  padding: 3em;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    margin: 10px;
  }

  p {
    color: #fff;
  }

  @media (max-width: 1024px) {
    padding: 2em 1em;

    p {
      font-size: 0.8em;
    }
  }
`;

