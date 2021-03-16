import styled from "styled-components";

export const TitleImgContainer = styled.div`
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

export const Divisor = styled.div`
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

export const TextContainer = styled.div`
    p {
        text-align: left;
    }
`;
