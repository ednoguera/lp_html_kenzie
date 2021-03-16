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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    align-items: center;

    label {
        font-size: 1em;
        color: #fff;
        font-weight: bold;
        width: 70%;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
        padding-top: 0;

        label {
            font-weight: initial;
            font-size: 1em;
            width: 85%;
            line-height: 1.4em;

            p {
                margin: 0;
                margin-bottom: 0.4em;
            }

            span {
                font-weight: bold;
            }
        }

        button {
            height: 4em;
            width: 85%;
            box-sizing: border-box;
        }

        input {
            height: 4em;
            width: 85%;
            box-sizing: border-box;
        }
    }
`;

export const Input = styled.input`
    height: 64px;
    margin: 0 0 1rem 0;
    border-radius: 0.5em;
    outline: none;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    width: 400px;
    background-color: rgb(214, 214, 214);
    border: none;
    color: black;

    @media (min-width: 300px) and (max-width: 1024px) {
        height: 52px;
        width: 264px;
        font-size: 16px;
        text-align: center;
        margin: 10px;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 410px;
    background-color: ${(props) => props.color};
    outline: none;
    border: none;
    border-radius: 0.5em;

    cursor: pointer;
    font-size: 20px;
    color: #fff;
    font-weight: bold;

    img {
        width: 1.3em;
        margin: 0 0 0 1em;
    }

    @media (min-width: 300px) and (max-width: 1024px) {
        font-size: 1em;
        height: 70px;
        width: 270px;
        margin: 10px;
        border-radius: 0.5em;
    }
`;
