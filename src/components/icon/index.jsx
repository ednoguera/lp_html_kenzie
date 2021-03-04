import React from "react";
import { IconContainer } from "../../styles/styled-components";

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
