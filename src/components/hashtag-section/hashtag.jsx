import React from 'react'
import { HashStyle } from '../../styles/styled-components'


const Hashtag = props => {
    return (
        <HashStyle>
            <p><strong style={{ "color": props.color }}>#</strong>{props.tag}</p>
        </HashStyle>
    )
}

export default Hashtag