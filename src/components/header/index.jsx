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

const Header = (props) => {
    const { width } = useWindowSize();

    return (
        <HeaderApp>
            <BannerContainer>
                <LogoContainer src={logoBlue} />

                <HeaderContainer>
                    <div>
                        <TitleContainer>
                            <p>{props.title}</p>
                        </TitleContainer>
                        <SubTitleContainer>
                            <p>{props.subTitle}</p>
                        </SubTitleContainer>
                        <FormContainer>
                            {width < 1024 ? (
                                <ActiveCampForm label={props.label} />
                            ) : null}
                            <SubTitle2Container>
                                <div>
                                    {width >= 768 ? (
                                        <img src={props.getImage1} />
                                    ) : null}
                                    <p>{props.subTitle1}</p>
                                </div>
                                <div>
                                    {width >= 768 ? (
                                        <img src={props.getImage2} />
                                    ) : null}
                                    <p>{props.subTitle2}</p>
                                </div>
                            </SubTitle2Container>
                        </FormContainer>
                    </div>

                    {width > 1024 ? (
                        <ActiveCampForm label={props.label} />
                    ) : null}
                </HeaderContainer>
            </BannerContainer>
        </HeaderApp>
    );
};

export default Header;
