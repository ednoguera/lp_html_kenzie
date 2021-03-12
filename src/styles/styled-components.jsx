import styled from "styled-components";
import { colors } from "./colors";

const PageHome = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderApp = styled.header`
  min-height: 594px;
  background-color: #121212;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 300px) and (max-width: 1024px) {
    padding-top: 0;
    justify-content: flex-start;
  }
`;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  left: 3%;
  padding-top: 3em;

  @media (min-width: 320px) and (max-width: 1024px) {
    position: initial;
    width: 100%;
    padding-top: 2em;
  }
`;

const LogoContainer = styled.img`
  @media (min-width: 320px) and (max-width: 1024px) {
    margin-bottom: 1em;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  padding-bottom: 5%;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 40vw;
  }

  @media (min-width: 320px) and (max-width: 1023px) {
    justify-content: center;
    margin: 0 auto;
    width: 100vw;

    div {
      max-width: 95%;
      align-items: center;
    }
  }
`;

const TitleContainer = styled.div`
  p {
    font-size: 48px;
    color: #fff;
    text-align: left;
    font-weight: bold;
  }

  @media (min-width: 300px) and (max-width: 1024px) {
    width: 100%;
    margin: 0 auto;

    p {
      font-size: 1.8em;
      width: 100%;
      text-align: center;
      padding: 0 0.8em;
      box-sizing: border-box;
      margin: 0;
    }
  }
`;

const FooterTitleContainer = styled.p`
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

const SubTitleContainer = styled.div`
  p {
    text-align: left;
    color: #fff;
    font-size: 18px;
  }

  @media (min-width: 320px) and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 80vw;

    p {
      font-size: 1.1em;
      margin-top: 1em;
      text-align: center;
    }
  }
`;

const SubTitle2Container = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin-right: 2rem;
    height: 5vmin;
  }

  p {
    text-align: left;
    color: #fff;
    font-size: 18px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 320px) and (max-width: 1024px) {
    padding: 1em 0;
    display: flex;
    flex-direction: row !important;
    justify-content: center;
    align-items: center !important;

    div {
      margin: 0;
    }

    p {
      font-size: 1.3em;
      margin: 0 auto;
      text-align: center;
    }

    img {
      display: none;
    }

    div:first-of-type p {
      text-align: right;
    }

    div:nth-child(2) {
      border: 1px solid #747474;
      margin: 0 1em;
      height: 3em;
    }

    div:last-of-type p {
      text-align: left;
    }
  }
`;

const ThumbHeader = styled.figure`
  padding-top: 2.5%;
`;

//ICON SECTION
const IconContainer = styled.div`
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

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #171717;
  padding: 4em 2em;

  @media (min-width: 300px) and (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    padding: 2em 0;

    p {
      width: 90%;
      line-height: 1.4;
    }
  }
`;

//PRE FOOTER SECTION

const PreFooterSection = styled.section`
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

const PreFooterGroup = styled.div`
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

const TitleImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 18px;
    color: #fff;
    line-height: 1.6;
  }

  @media (min-width: 300px) and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 85%;
    align-items: flex-start;

    p {
      font-size: 16px;
      color: #fff;
      margin: 0 auto;
    }

    figure {
      margin: 0;
      margin-bottom: 1rem;
      padding: 0 0 0 0;
    }
  }
`;

const Divisor = styled.div`
  width: 2px;
  height: 250px;
  background-color: #fff;

  @media (min-width: 1900px) and (max-width: 4000px) {
    margin: 5rem 0 0 4rem;
  }

  @media (min-width: 300px) and (max-width: 1024px) {
    display: none;
  }
`;

const HashSection = styled.div`
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

const HashStyle = styled.div`
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

const TextContainer = styled.div`
  p {
    text-align: left;
  }
`;

//FOOTER SECTION

const FooterSection = styled.footer`
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

//HEADER TYP SECTION

const HeaderTypSection = styled.header`
  background-color: #121212;
  height: 970px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 36px;
    text-align: center;
    width: 850px;
  }

  h3 {
    color: #fff;
    font-size: 22px;
    text-align: center;
  }

  p {
    width: 80%;
  }

  button {
    color: #fff;
    width: 300px;
    height: 64px;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;

    margin: 16px;
    font-size: 18px;
    font-weight: bold;

    padding-left: 0;
  }

  @media (min-width: 300px) and (max-width: 424px) {
    height: 1860px;

    h1 {
      font-size: 26px;
      width: 90%;
      margin: 0 auto;
    }

    h3 {
      font-size: 16px;
      width: 90%;
      margin: 1rem auto;
    }

    button {
      width: 70%;
    }
  }

  @media (min-width: 425px) and (max-width: 1024px) {
    height: 1550px;

    h1 {
      font-size: 26px;
      width: 90%;
      margin: 0 auto;
    }

    h3 {
      font-size: 16px;
      width: 90%;
      margin: 1rem auto;
    }

    button {
      width: 40%;
    }
  }
`;

const OrderedList = styled.div`
  li {
    color: #fff;
    font-size: 22px;
    width: 400px;
    margin: 1rem auto;
    text-align: left;
  }

  @media (min-width: 300px) and (max-width: 1024px) {
    li {
      color: #fff;
      font-size: 18px;
      width: 230px;
      margin: 0 auto;
      text-align: left;
    }
  }
`;

const TextFinal = styled.div`
  p {
    color: #fff;
    font-size: 18px;
    width: 78%;
    margin: 2rem auto;
    text-align: left;
    line-height: 1.6;
  }

  @media (min-width: 320px) and (max-width: 1024px) {
    p {
      color: #fff;
      font-size: 18px;
      width: 80%;
      margin: 2rem auto;
      text-align: left;
      line-height: 1.6;
    }
  }
`;

export {
  HeaderApp,
  HeaderContainer,
  BannerContainer,
  TitleContainer,
  FooterTitleContainer,
  SubTitleContainer,
  SubTitle2Container,
  ThumbHeader,
  IconContainer,
  Section,
  PreFooterSection,
  PreFooterGroup,
  PageHome,
  TitleImgContainer,
  Divisor,
  HashSection,
  HashStyle,
  TextContainer,
  FooterSection,
  HeaderTypSection,
  OrderedList,
  TextFinal,
  LogoContainer
};
