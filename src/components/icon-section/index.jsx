import React from 'react'
import Icon from '../icon/'
import thumb from '../assets/img/icons/trophy.svg'
import screen from '../assets/img/icons/screen.svg'
import mobile from '../assets/img/icons/mobile-target.svg'
import { Section } from '../../styles/styled-components'

const IconSection = () => {
    const title1 = <p>Uma imersão de 5 dias para você <strong>aprender programação do zero</strong> já sair do curso com <strong>seu primeiro site.</strong></p>
    const title2 = <p><strong>Comunidade exclusiva</strong> de mentores que conhecem o mercado de tecnologia e <strong>sabem o que estão falando.</strong></p>
    const title3 = <p><strong>Suporte em tempo real</strong> e lives para você <strong>codar junto</strong> com o time da Kenzie Academy.</p>

    return (
        <Section>
            <Icon thumb={thumb} title={title1} />

            <Icon thumb={screen} title={title2} />

            <Icon thumb={mobile} title={title3} />
        </Section>
    )
}

export default IconSection
