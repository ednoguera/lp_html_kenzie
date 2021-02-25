import React from 'react'
import HeaderTyp from '../../components/header_typ/'
import Footer from '../../components/footer/'
import logo from '../../components/assets/img/logo/logo.svg'
import instagram from '../../components/assets/img/social/insta.png'
import youtube from '../../components/assets/img/social/youtube.png'
import linkedin from '../../components/assets/img/social/linkedin.png'
import { colors } from '../../styles/colors'

const ThankYouPage = () => {

    const url = "https://www.youtube.com/embed/E9HUaPeDY24"

    const youtubeChannel = "https://www.youtube.com/KenzieAcademyBrasil?sub_confirmation=1"
    const telegramEvent = "https://t.me/semanaZeroAoJS"

    const {blue} = colors
    const {orange} = colors

    const textTitle = <h1>Sua participação ainda <strong style={{"color": blue}}>não está confirmada!</strong></h1>
    const textSubTitle = <h3>Siga o passo a passo para garantir sua inscrição gratuita.</h3>

    return (
        <>
            <HeaderTyp title={textTitle} subtitle={textSubTitle}
                       itemList1="1. Inscreva-se em nosso canal do Youtube para ser avisado de todas as nossas lives e receber alertas de novos conteúdos postados em nosso canal."
                       itemList2="2. Entre no seu e-mail agora e abra o email de boas vindas que enviamos. Recomendo colocar uma estrela amarela, favoritar este e-mail e mudar o e-mail para sua caixa de entrada para que o seu servidor entenda que as nossas mensagens são importantes para você. (confira caixa de spam e caixa de promoções)"
                       text="Fazendo essas duas etapas, você não perde os melhores conteúdos para entrar na programação!"
                       url={url} urlYoutube={youtubeChannel} urlTelegram={telegramEvent}
                       ctaTelegram="Entrar em nossa comunidade no telegram"
                       ctaYoutube="Inscreva-se em nosso canal no Youtube"
                       styleBtnTelegram={{
                           "backgroundColor": blue
                       }}
                       styleBtnYoutube={{
                           "backgroundColor": blue
                       }}/>
            <Footer logo={logo} instagram={instagram} youtube={youtube} linkedin={linkedin}
                    copyrights="Copyrights 2020 Kenzie All right Reserved"/>
        </>
    )
}

export default ThankYouPage