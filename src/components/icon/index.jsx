import React from 'react'
import { IconContainer } from '../../styles/styled-components'

const Icon = (props) => {
    return (
        <>
            <IconContainer>
                <div>
                    <img src={props.thumb} />
                </div>
                <p>{props.title}</p>
            </IconContainer>
        </>
    )
}

export default Icon