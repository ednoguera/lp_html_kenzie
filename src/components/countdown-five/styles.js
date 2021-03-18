import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin: 1em;
  text-transform: uppercase;

  > .text {
    font-size: 0.7em;
  }

  > .number {
    color: rgb(246, 88, 40);
    font-size: 1.5em;
  }
`;
