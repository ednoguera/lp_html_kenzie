import React from "react";
import { TitleImgContainer, Divisor, TextContainer } from "./styles";

const TitleImg = (props) => {
    return (
        <TitleImgContainer>
            <Divisor />
            <figure>
                <img src={props.img} />
            </figure>
            <TextContainer>{props.title}</TextContainer>
        </TitleImgContainer>
    );
};

export default TitleImg;
