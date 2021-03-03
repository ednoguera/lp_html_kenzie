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
import Subscribe from "../../components/subscribe-form/subscribe";
import logoBlue from "../assets/img/logo/logo-blue.svg";
import ActiveCampForm from "../../components/active_campaign_form/";
import useWindowSize from "../../helper/use-window-hook";
import { colors } from "../../styles/colors";

const Header = (props) => {
  const { width } = useWindowSize();
  const { blue, orange } = colors;

  return (
    <HeaderApp>
      <BannerContainer>
        <LogoContainer src={logoBlue} />

        <HeaderContainer>
          <div>
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
              {width < 1024 ? <ActiveCampForm label={props.label} /> : null}
              <SubTitle2Container>
                <div>
                  {width >= 768 ? <img src={props.getImage1} /> : null}
                  <p>
                    <strong style={{ color: orange }}>22 A 25</strong> DE MARÇO
                  </p>
                </div>
                <div>
                  {width >= 768 ? <img src={props.getImage2} /> : null}
                  <p>
                    <strong style={{ color: orange }}>100% grátis</strong> e ao
                    vivo
                  </p>
                </div>
              </SubTitle2Container>
            </FormContainer>
          </div>

          {width > 1024 ? <ActiveCampForm label={props.label} /> : null}
        </HeaderContainer>
      </BannerContainer>
    </HeaderApp>
  );
};

export default Header;
