import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Terms = styled.p`
    color: white;
    opacity: 0.6;
    font-size: 0.9em;
    width: 400px;

    > a {
        text-decoration: none;
        color: ${colors.blue};
    }

    @media (max-width: 1024px) {
        margin-top: 0;
        opacity: 1;
        width: 90%;
        font-size: 0.7em;
    }
`;
