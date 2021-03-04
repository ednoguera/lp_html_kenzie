import React from "react";
import useWindowSize from "../../helper/use-window-hook";

import Header from "../../components/header/";
import miniPc from "../../components/assets/img/icons/mini-pc-dark.svg";
import agenda from "../../components/assets/img/icons/agenda.svg";
import thumb from "../../components/assets/img/banner/img-header.png";
import logo from "../../components/assets/img/logo/logo.svg";
import instagram from "../../components/assets/img/social/insta.png";
import youtube from "../../components/assets/img/social/youtube.png";
import linkedin from "../../components/assets/img/social/linkedin.png";

import IconSection from "../../components/icon-section/";
import PreFooter from "../../components/pre-footer/";
import Footer from "../../components/footer/";
import { PageHome } from "../../styles/styled-components";
import HeaderAppbar from "../../components/header-appbar";

import { colors } from "../../styles/colors";

const Home = () => {
  const { blue, orange } = colors;
  const { width } = useWindowSize();

  const textPreFooterTitle = (
    <p>
      Aulas ao vivo, de 22 a 25 de março, com{" "}
      <strong style={{ color: orange }}>
        dicas práticas e segredos sobre HTML e CSS
      </strong>{" "}
      para você dar um start em sua carreira dev e ser uma pessoa programadora
      de sucesso,{" "}
      <strong style={{ color: blue }}>disputada pelo mercado</strong>, na área
      de programação.
    </p>
  );

  const Label = (
    <p>
      Entre agora no nosso
      <span style={{ color: "#25D366" }}> GRUPO VIP de WhatsApp </span>
      para receber o seu acesso às aulas
      <strong style={{ color: orange }}>!</strong>
    </p>
  );

  return (
    <PageHome>
      {width > 1024 && <HeaderAppbar />}

      <Header getImage1={miniPc} getImage2={agenda} label={Label} />
      <IconSection />
      <PreFooter title={textPreFooterTitle} />
      <Footer
        logo={logo}
        instagram={instagram}
        youtube={youtube}
        linkedin={linkedin}
        copyrights="Copyrights 2020 Kenzie All right Reserved"
      />
    </PageHome>
  );
};

export default Home;
