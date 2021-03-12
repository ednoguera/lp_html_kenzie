import styled from "styled-components";

export const LogoContdownContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const FormContainer = styled.div`
    margin: 0;
    width: 100%;

    @media (max-width: 1024px) {
        padding-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

export const LogoContainer = styled.img`
    @media (min-width: 320px) and (max-width: 1024px) {
        margin-bottom: 1em;
    }
`;

export const HeaderApp = styled.header`
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

export const TitleContainer = styled.div`
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

export const SubTitleContainer = styled.div`
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

export const SubTitle2Container = styled.div`
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

export const ThumbHeader = styled.figure`
    padding-top: 2.5%;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    padding-bottom: 5%;

    > div:first-child {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 40vw;
    }

    @media (min-width: 320px) and (max-width: 1023px) {
        justify-content: center;
        margin: 0 auto;
        width: 100vw;

        > div:first-child {
            max-width: 95%;
            align-items: center;
        }
    }
`;

export const BannerContainer = styled.div`
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
