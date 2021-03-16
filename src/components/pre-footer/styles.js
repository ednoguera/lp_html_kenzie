import styled from "styled-components";

export const PreFooterSection = styled.section`
  background-color: rgb(23, 23, 23);
  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em 7em;

  @media (max-width: 1024px) {
    padding: 2em 1em;
  }
`;

export const PreFooterGroup = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 300px) and (max-width: 1024px) {
    flex-direction: column;
  }

  @media (min-width: 426px) and (max-width: 1740px) {
    width: 100%;
  }
`;

export const FooterTitleContainer = styled.p`
  font-size: 30px;
  color: #fff;
  text-align: left;
  font-weight: bold;
  margin-right: 2em;

  @media (min-width: 300px) and (max-width: 1024px) {
    width: 85%;
    margin: 0 auto;
    padding-bottom: 1em;
    font-size: 20px;
  }
`;
