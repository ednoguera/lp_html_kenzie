import React from 'react'
import { FooterSection } from '../../styles/styled-components'

const Footer = props => {
    return (
        <FooterSection>
            <figure>
                <img src={props.logo} />
            </figure>
            {/* <div>
                <a href="https://www.instagram.com/kenzieacademybr/" target="_blank">
                    <img src={props.instagram} />
                </a>
                <a href="https://www.youtube.com/c/KenzieAcademyBrasil" target="_blank">
                    <img src={props.youtube} />
                </a>
                <a href="https://www.linkedin.com/school/kenzie-academy-brasil/" target="_blank">
                    <img src={props.linkedin} />
                </a>
            </div> */}
            <div>
                <p>{props.copyrights}</p>
            </div>
        </FooterSection>
    )
}

export default Footer