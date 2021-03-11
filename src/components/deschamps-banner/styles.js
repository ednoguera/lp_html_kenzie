import styled from "styled-components";
import { colors } from "../../styles/colors";

const { orange, blue } = colors;

export const Background = styled.div`
  background-color: #171717;
  width: 100vw;
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 15%;
    height: 15%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const Text = styled.div`
  width: 40%;
  text-align: left;
  margin: 4em;

  @media (max-width: 1024px) {
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1em;
    box-sizing: border-box;

    img {
      width: 30%;
    }
  }
`;

export const Title = styled.p`
  color: #fff;
  font-size: 1.6em;
  font-weight: 600;
  margin-bottom: 2em;

  span {
    color: ${orange};
  }

  @media (max-width: 1024px) {
    font-size: 1em;
    margin-bottom: 1em;
  }
`;

export const Subtitle = styled.p`
  color: ${blue};
  font-weight: 600;
  font-size: 1.1em;

  @media (max-width: 1024px) {
    font-size: 1em;
  }
`;
