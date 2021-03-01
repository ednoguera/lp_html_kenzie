import React from 'react'
import Header from '../../components/header/'
import miniPc from '../../components/assets/img/icons/mini-pc-dark.svg'
import agenda from '../../components/assets/img/icons/agenda.svg'
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
    const { blue } = colors
    const { orange } = colors


    const textTitle = <p>DÊ UM START EM SUA CARREIRA DEV<strong style={{"color": blue}}>.</strong></p>

    const textSubTitle = <p><strong style={{"color": blue}}>Aprenda HTML e CSS do zero</strong> e saia do curso com o um site totalmente desenvolvido por você.</p>

    const subT1 = <p><strong style={{"color": orange}}>22 A 25</strong> DE MARÇO</p>

    const subT2 = <p><strong style={{"color": orange}}>100% GRÁTIS</strong> E AO VIVO</p>

    const textPreFooterTitle = <p>Aulas ao vivo, de 22 a 25 de março,
        com <strong style={{"color": orange}}>dicas práticas e segredos sobre HTML e CSS</strong> para você
        dar um start em sua carreira dev e ser uma pessoa programadora
        de sucesso, <strong style={{"color": blue}}>disputada pelo mercado</strong>, na área de programação.</p>

    const Label = <p>Inscrição gratuita<strong style={{"color": orange}}>!</strong></p>

    return (
        <PageHome>
            <Header title={textTitle} subTitle={textSubTitle} getImage1={miniPc} subTitle1={subT1} getImage2={agenda} subTitle2={subT2} label={Label}/>
            <IconSection />
            <PreFooter title={textPreFooterTitle} />
            <Footer logo={logo} instagram={instagram} youtube={youtube} linkedin={linkedin} copyrights="Copyrights 2020 Kenzie All right Reserved" />
        </PageHome>
    )
}

export default Home