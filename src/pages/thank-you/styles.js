import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #131313;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-weight: bold;
  padding: 2em;

  > :nth-last-child(2) {
    h2 {
      font-size: 1.4em;
    }
  }

  > :last-child {
    background-color: #181818;
    width: 100vw;
    box-sizing: border-box;
    position: relative;
    top: 2em;
    font-weight: normal;
  }

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    padding: 2em 0;
  }
`;

export const Title = styled.p`
  color: ${colors.orange};
  font-weight: bold;
  font-size: 1.6em;
  text-transform: uppercase;
`;

export const Subtitle = styled.p`
  font-weight: bold;
  font-size: 1.3em;
  text-transform: uppercase;
`;

export const SubscribeContainer = styled.div`
  background-color: #3c3c3c;
  border: 1px solid #969696;
  border-radius: 0.3em;
  width: 43rem;
  min-height: 10em;
  padding: 1em 2em 2em;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 1em;

  .info {
    color: ${colors.orange};
    margin: 1em 0;
  }

  .reminder {
    font-weight: normal;
  }

  span {
    color: ${colors.orange};
  }

  @media (max-width: 1024px) {
    width: 70vw;
  }
`;

export const Button = styled.a`
  outline: none;
  border: none;
  border-radius: 0.4em;
  color: white;
  padding: 1em 2em;
  background-color: ${(props) => colors[props.color]};
  font-weight: bold;
  font-size: 1.1em;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 1.1em;
    margin: 0 1em 0 0;
  }

  .youtube {
    width: 1.8em;
  }

  @media (max-width: 1024px) {
    font-size: 0.9em;
    padding: 0.8em 1em;
  }
`;

export const SmallContainers = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const SmallContainer = styled(SubscribeContainer)`
  display: initial;
  width: 11rem;
  margin: 0.6em;
  padding: 0.5em;
  box-sizing: border-box;
  font-weight: normal;
  font-size: 0.85em;
  position: relative;
  padding-bottom: 4em;

  img {
    width: 100%;
  }

  a {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  p {
    margin: 2em 0;
  }

  span {
    color: ${colors.orange};
  }

  @media (max-width: 1024px) {
    width: 40vw;
    margin: 1em 1em;
  }
`;

export const MediumContainer = styled(SubscribeContainer)`
  width: 22.5em;
  box-sizing: border-box;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em;

  p {
    font-size: 1em;
    margin: 0;
  }

  .description {
    font-size: 0.9em;
    font-weight: normal;
    margin: 2em 0;
  }
`;

export const TimeBlock = styled(SmallContainer)`
  flex-direction: column;
  text-align: center;
  padding: 1em;
  margin: 1em;

  p {
    margin: 0;
  }

  .number {
    font-size: 4em;
  }

  .text {
    font-size: 1.5em;
  }
`;
