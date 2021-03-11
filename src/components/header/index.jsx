import React from "react";
import {
  FormContainer,
  LogoContainer,
  HeaderApp,
  TitleContainer,
  SubTitleContainer,
  SubTitle2Container,
  ThumbHeader,
  HeaderContainer,
  BannerContainer
} from "../../styles/styled-components";
import Subscribe from "../subscribe-form/subscribe";
import logoBlue from "../assets/img/logo/logo-blue.svg";
import ActiveCampForm from "../active_campaign_form/";
import DeschampsBanner from "../deschamps-banner";
import useWindowSize from "../../helper/use-window-hook";
import { colors } from "../../styles/colors";

const Header = (props) => {
  const { width } = useWindowSize();
  const { blue, orange } = colors;

  return (
    <HeaderApp>
      {props.deschamps && <DeschampsBanner />}
      <BannerContainer>
        <HeaderContainer>
          <div>
            <LogoContainer src={logoBlue} />

            <TitleContainer>
              <p>
                DÊ UM START EM SUA CARREIRA DEV
                <strong style={{ color: orange }}>.</strong>
              </p>
            </TitleContainer>

            <SubTitleContainer>
              <p>
                <strong style={{ color: blue }}>
                  Aprenda HTML e CSS do zero
                </strong>{" "}
                e saia do curso com o um site totalmente desenvolvido por você.
              </p>
            </SubTitleContainer>

            <FormContainer>
              {width < 1024 ? (
                props.deschamps ? (
                  <ActiveCampForm label={props.label} formId={7} />
                ) : (
                  <ActiveCampForm label={props.label} formId={1} />
                )
              ) : null}
              <SubTitle2Container>
                <div>
                  {width >= 768 ? <img src={props.getImage1} /> : null}
                  <p>
                    <strong style={{ color: orange }}>22 A 25</strong>
                    {width < 1024 && <br />} DE MARÇO
                    {width < 1024 && <br />} ÀS
                    <strong style={{ color: orange }}> 19h</strong>
                  </p>
                </div>
                {width < 1024 && <div className="divider" />}
                <div>
                  {width >= 768 ? <img src={props.getImage2} /> : null}
                  <p>
                    <strong style={{ color: orange }}>100% GRÁTIS</strong>
                    {width < 1024 && <br />} E AO VIVO
                  </p>
                </div>
              </SubTitle2Container>
            </FormContainer>
          </div>

          {width > 1024 ? (
            props.deschamps ? (
              <ActiveCampForm label={props.label} formId={7} />
            ) : (
              <ActiveCampForm label={props.label} formId={1} />
            )
          ) : null}
        </HeaderContainer>
      </BannerContainer>
    </HeaderApp>
  );
};

export default Header;
