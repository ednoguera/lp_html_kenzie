import styled from "styled-components";

export const IconContainer = styled.div`
  width: 300px;
  height: 310px;
  border: 2px solid #969696;
  border-radius: 10px;
  opacity: 1;
  background-color: #3c3c3c;
  padding: 0 1em;
  margin: 1em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.05em;
    color: #fff;
    width: 283px;
  }

  @media (max-width: 1024px) {
    margin: 10px;
    align-items: center;
    justify-content: center;
    max-height: 10em;
    padding: 1em 0;
    justify-content: center;

    img {
      margin: 0.5em auto;
      height: 4em;
    }

    p {
      font-size: 0.9em;
      text-align: center;
      margin: 0 auto;
    }
  }
`;
