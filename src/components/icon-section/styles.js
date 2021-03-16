import styled from "styled-components";

export const Section = styled.section`
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
