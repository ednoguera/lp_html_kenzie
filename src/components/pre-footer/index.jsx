import React from 'react'
import { PreFooterSection, TitleContainer, PreFooterGroup } from '../../styles/styled-components'
import TitleImg from '../title-img/'
import Dani from '../assets/img/icons/dani/dani.png'
import HashtagSection from '../../components/hashtag-section/'

const PreFooter = (props) => {

    const textTitle = <p>Daniel Kriger é CEO e co-fundador da Kenzie Academy, <strong>conhecido por colocar pessoas no mercado de tecnologia rapidamente</strong>, através de um novo modelo de ensino. Já ajudou dezenas de estudantes a mudarem de carreira e seu grande objetivo é <strong>transformar a vida de pessoas que querem aprender programação</strong> para conquistar vagas e <strong>bons salários</strong> no mercado de tecnologia.</p>

    return (
        <PreFooterSection>
            <PreFooterGroup>
                <TitleContainer>
                    <p>{props.title}</p>
                </TitleContainer>
                <TitleImg img={Dani} title={textTitle} />
                <HashtagSection />
            </PreFooterGroup>
        </PreFooterSection>
    )
}

export default PreFooter