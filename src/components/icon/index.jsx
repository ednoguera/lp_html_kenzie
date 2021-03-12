import React from "react";
import { IconContainer } from "./styles";

const Icon = (props) => {
    return (
        <>
            <IconContainer>
                <div>
                    <img src={props.thumb} />
                </div>
                {props.title}
            </IconContainer>
        </>
    );
};

export default Icon;
