import React from 'react'
import { HashStyle } from '../../styles/styled-components'


const Hashtag = props => {
    return (
        <HashStyle>
            <h2><strong style={{ "color": props.color }}>#</strong>{props.tag}</h2>
        </HashStyle>
    )
}

export default Hashtag