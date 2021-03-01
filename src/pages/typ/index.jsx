import React from 'react'
import {useLocation} from 'react-router-dom'
import HeaderTyp from '../../components/header_typ/'
import Footer from '../../components/footer/'
import logo from '../../components/assets/img/logo/logo.svg'
import instagram from '../../components/assets/img/social/insta.png'
import youtube from '../../components/assets/img/social/youtube.png'
import linkedin from '../../components/assets/img/social/linkedin.png'
import { colors } from '../../styles/colors'

const ThankYouPage = () => {
    const location = useLocation()

    const urlYoutube = "https://www.youtube.com/KenzieAcademyBrasil?sub_confirmation=1"
    const urlTelegram = "https://curso-html-css.joinzap.app/"

    const {blue, orange, green} = colors

    const textTitle = <h1>Sua participação ainda <strong style={{"color": blue}}>não está confirmada!</strong></h1>
    const textSubTitle = <h3>Siga o passo a passo para garantir sua inscrição gratuita.</h3>

    const item1 = <p>1. Clique no botão azul abaixo e entre em nosso canal do Telegram. Lá, vamos enviar <strong style={{"color": orange}}>avisos importantes</strong> e conteúdos exclusivos.</p>
    const item2 = <p>2. <strong>Entre no seu e-mail e abra o email de boas vindas que enviamos.</strong> Recomendo colocar uma estrela amarela ou favoritar este e-mail para que o seu servidor entenda que as nossas mensagens são importantes para você. Confira caixa de spam e caixa de promoções. </p>

    const textFinal1 = <p><strong style={{"color": orange}}>E tudo isso pra que?</strong> Por que eu quero garantir que você vai receber todas as minhas mensagens e outros bônus que eu também vou te enviar.</p>
    const textFinal2 = <p>Então é isso, siga exatamente essas instruções e nos vemos no <strong style={{"color": blue}}>dia 22 de Março</strong>, combinado?</p>
    const textFinal3 = <p>Clique no botão abaixo e <strong style={{"color": blue}}>inscreva-se em nosso canal no Youtube</strong> para acompanhar nosso conteúdo e nossas lives.</p>

    return (
        <>
            <HeaderTyp title={textTitle} subtitle={textSubTitle}
                       itemList1={item1}
                       itemList2={item2}
                       textFinal1={textFinal1}
                       textFinal2={textFinal2}
                       textFinal3={textFinal3}
                       urlYoutube={urlYoutube} urlTelegram={urlTelegram}
                       ctaTelegram="Entre no nosso grupo silencioso do Whatsapp"
                       ctaYoutube="Inscreva-se em nosso canal no Youtube"
                       styleBtnTelegram={{
                           "backgroundColor": green
                       }}
                       styleBtnYoutube={{
                           "backgroundColor": orange
                       }}/>
            <Footer logo={logo} instagram={instagram} youtube={youtube} linkedin={linkedin}
                    copyrights="Copyrights 2020 Kenzie All right Reserved"/>
        </>
    )
}

export default ThankYouPage