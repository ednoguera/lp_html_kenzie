import React from "react"
import { FormContainer, HeaderApp, TitleContainer, SubTitleContainer, ThumbHeader } from '../../styles/styled-components'
import Subscribe from '../../components/subscribe-form/subscribe'
import ActiveCampForm from '../../components/active_campaign_form/'



const Header = (props) => {

    return (
        <HeaderApp>
            <div>
                <TitleContainer>
                    <p>{props.title}</p>
                </TitleContainer>
                <FormContainer>

                    <Subscribe />

                    {/* <ActiveCampForm /> */}

                    <SubTitleContainer>
                        <img src={props.getImage} />
                        <p>{props.subTitle}</p>
                    </SubTitleContainer>
                </FormContainer>
            </div>
            <ThumbHeader>
                <img src={props.thumb} />
            </ThumbHeader>
        </HeaderApp>
    )
}

export default Header