import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Page = styled.div`
  background-color: #131313;
  width: 100vw;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 2em;

  > :last-child {
    width: 100%;
    box-sizing: border-box;
    background-color: #181818;
    height: 15em;
  }
`;

export const Text1 = styled.p`
  color: ${colors.orange};
  font-size: 2em;
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 3em;
    margin: 0 1em;
  }
`;

export const Text2 = styled.p`
  font-weight: bold;
  color: white;
  font-size: 1.4em;
  max-width: 35em;

  @media (max-width: 1024px) {
    margin: .8em;
    font-size: 1.3em;
    margin-bottom: 2em;
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 5em;
    height: 5em;
    margin: 0 1em;
  }

  @media (max-width: 1024px) {
    img {
      width: 2em;
      height: 2em;
    }
  }
`;
