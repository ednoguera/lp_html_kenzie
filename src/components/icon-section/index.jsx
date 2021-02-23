import React from 'react'
import Icon from '../icon/'
import thumb from '../assets/img/icons/trophy.svg'
import screen from '../assets/img/icons/screen.svg'
import mobile from '../assets/img/icons/mobile-target.svg'
import { Section } from '../../styles/styled-components'

const IconSection = () => {
    return (
        <Section>
            <Icon thumb={thumb} title="Aprenda os pilares de sucesso da área com a escola americana referência em programação." />

            <Icon thumb={screen} title="Conhecimento prático de mentores que conhecem o mercado de tecnologia e sabem o que estão falando." />

            <Icon thumb={mobile} title="Aulas atualizadas com o que há de melhor no mercado e lives para você codar junto com o time da Kenzie." />
        </Section>
    )
}

export default IconSection