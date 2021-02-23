import React from 'react'
import Header from '../../components/header/'
import miniPc from '../../components/assets/img/icons/mini-pc.svg'
import thumb from '../../components/assets/img/banner/img-header.png'
import IconSection from '../../components/icon-section/'
import PreFooter from '../../components/pre-footer/'
import Footer from '../../components/footer/'
import { PageHome } from '../../styles/styled-components'
import logo from '../../components/assets/img/logo/logo.svg'
import instagram from '../../components/assets/img/social/insta.png'
import youtube from '../../components/assets/img/social/youtube.png'
import linkedin from '../../components/assets/img/social/linkedin.png'
import { colors } from '../../styles/colors'

const Home = () => {
    const { cian } = colors
    const { purple } = colors


    const textTitle = <p>Receba avisos das <strong style={{ "color": cian }}>melhores aulas de programação</strong> para você entrar na carreira do futuro, ser disputado por empresas e <strong style={{ "color": purple }}>ganhar 5x mais</strong>, mesmo <strong style={{ "color": cian }}>sem conhecimento prévio</strong> e <strong style={{ "color": purple }}>sem recursos para investir</strong>.</p>

    const textSubTitle = <p>Lives toda <strong>segunda</strong>, <strong>quarta</strong> e <strong>sexta</strong> às <strong>17h</strong></p>

    const textPreFooterTitle = <p>Aulas ao vivo, toda semana, com <strong style={{ "color": purple }}>dicas práticas e segredos que ninguém te conta</strong> para você ser uma pessoa programadora de sucesso, <strong style={{ "color": cian }}>disputada pelo mercado</strong>, na área de programação.</p>

    return (
        <PageHome>
            <Header title={textTitle} getImage={miniPc} subTitle={textSubTitle} thumb={thumb} />
            <IconSection />
            <PreFooter title={textPreFooterTitle} />
            <Footer logo={logo} instagram={instagram} youtube={youtube} linkedin={linkedin} copyrights="Copyrights 2020 Kenzie All right Reserved" />
        </PageHome>
    )
}

export default Home