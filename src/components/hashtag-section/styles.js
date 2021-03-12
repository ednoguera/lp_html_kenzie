import styled from "styled-components";

export const HashSection = styled.div`
    display: flex;
    margin: 1rem;

    @media (min-width: 300px) and (max-width: 1024px) {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin: 1em auto;
    }
`;

export const HashStyle = styled.div`
  font-weight: 900;
  color: #fff;
  margin: 0 0 0 2rem;

  h2 {
    font-size: 30px;
  }

  @media (min-width: 300px) and (max-width: 1024px) {
    display: flex;
    margin: 0 1em;

    h2 {
      font-size: 1.5em;
    }
  }
`;
