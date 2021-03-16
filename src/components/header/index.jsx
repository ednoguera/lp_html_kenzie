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
} from "./styles";
import logoBlue from "../assets/img/logo/logo-blue.svg";
import sticker from "../assets/img/icons/sticker-valor.png";
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
                APRENDA HTML E CSS. CRIE E PUBLIQUE SEU SITE EM 4 DIAS
                <strong style={{ color: orange }}>.</strong>
              </p>
            </TitleContainer>

            {/*<SubTitleContainer>
              <p>
                <strong style={{ color: blue }}>
                  Aprenda HTML e CSS do zero
                </strong>{" "}
                e saia do curso com o um site totalmente desenvolvido por você.
              </p>
            </SubTitleContainer>*/}

            <FormContainer>
              <SubTitle2Container>
                <div className="info">
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
                </div>
                {!props.deschamps && (
                  <div className="sticker">
                    <img src={sticker} />
                  </div>
                )}
              </SubTitle2Container>
              {width < 1024 ? (
                props.deschamps ? (
                  <ActiveCampForm
                    label={props.label}
                    button={"TOQUE AQUI PARA ENTRAR"}
                    formId={7}
                  />
                ) : (
                  <ActiveCampForm
                    label={props.label}
                    button={"TOQUE AQUI PARA ENTRAR"}
                    formId={1}
                  />
                )
              ) : null}
            </FormContainer>
          </div>

          {width > 1024 ? (
            props.deschamps ? (
              <ActiveCampForm
                label={props.label}
                button={"CLIQUE AQUI PARA ENTRAR"}
                formId={7}
              />
            ) : (
              <ActiveCampForm
                label={props.label}
                button={"CLIQUE AQUI PARA ENTRAR"}
                formId={1}
              />
            )
          ) : null}
        </HeaderContainer>
      </BannerContainer>
    </HeaderApp>
  );
};

export default Header;
