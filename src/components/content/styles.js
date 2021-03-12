import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  background-color: #121212;
  padding: 3em 4em;

  @media (max-width: 1024px) {
    padding: 2em 1em;
  }
`;

export const Title = styled.h3`
  color: #fff;
  font-weight: bold;
  font-size: 1.5em;
`;

export const StyledBullet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 2em;
    margin: 0 1em;
  }
`;

export const BulletsContainer = styled.div`
  margin: auto;
  margin-bottom: 2em;
  max-width: 60%;
  text-align: left;

  @media (max-width: 1024px) {
    max-width: 90%;
  }
`;

export const Text = styled.p`
  color: #fff;
`;

export const Button = styled.button`
  height: 64px;
  width: 410px;
  background-color: ${(props) => props.color};
  outline: none;
  border: none;
  border-radius: 0.5em;

  cursor: pointer;
  font-size: 20px;
  color: #fff;
  font-weight: bold;

  @media (min-width: 300px) and (max-width: 1024px) {
    font-size: 1em;
    height: 70px;
    width: 270px;
    margin: 10px;
    border-radius: 0.5em;
  }
`;
