import { useEffect } from "react";
import logo from "../../components/assets/img/logo/logo.svg";
import TagManager from "react-gtm-module";
import Countdown from "react-countdown";
import HashtagSection from "../../components/hashtag-section";
import Footer from "../../components/footer";

import {
  Page,
  Title,
  Subtitle,
  SubscribeContainer,
  Button,
  SmallContainer,
  SmallContainers,
  MediumContainer
} from "./styles";
import whatsapp from "../../components/assets/img/social/whatsapp.png";
import youtube from "../../components/assets/img/social/youtube.png";
import aula from "../../components/assets/img/icons/aula.png";
import acessarYt from "../../components/assets/img/social/acessar-yt.svg";

const ThankYou = () => {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: { event: "activecampaign-form-sent" }
    });
  });

  return (
    <Page>
      <Title>Sua inscrição está quase concluída!</Title>
      <Subtitle>COMPLETE SUA INSCRIÇÃO ANTES QUE ACABE O TEMPO!</Subtitle>

      <SubscribeContainer>
        <Subtitle>
          1º Passo - Cadastre-se no nosso grupo VIP no WhatsApp?
        </Subtitle>
        <p className="info">Garanta isso. É importante...</p>
        <Button color="green">
          <img src={whatsapp} />
          ENTRAR NO GRUPO
        </Button>
      </SubscribeContainer>

      <SubscribeContainer align="right">
        <Subtitle>2º Passo - Inscreva-se no canal do Youtube…</Subtitle>
        <Button color="black">
          <img src={youtube} className="youtube" />
          INSCREVA-SE NO CANAL
        </Button>
        <p className="reminder">
          …e <b>defina o lembrete</b> para cada uma das aulas que já estão
          agendadas no YouTube clicando em cada um dos botões abaixo.
        </p>
      </SubscribeContainer>

      <SmallContainers>
        <SmallContainer>
          <img src={aula} />
          <p>
            <b>
              DIA <span>#01</span>
            </b>{" "}
            – Criando a estrutura de uma página usando <b>HTML5</b>
          </p>
          <a href="https://youtu.be/gLvae3ubuNU" target="_blank">
            <img src={acessarYt} />
          </a>
        </SmallContainer>
        <SmallContainer>
          <img src={aula} />
          <p>
            <b>
              DIA <span>#02</span>
            </b>{" "}
            – Estilizando a página com <b>CSS3</b>
          </p>
          <a href="https://youtu.be/-CjClpQTWzc" target="_blank">
            <img src={acessarYt} />
          </a>
        </SmallContainer>
        <SmallContainer>
          <img src={aula} />
          <p>
            <b>
              DIA <span>#03</span>
            </b>{" "}
            – Adaptando o layout para celulares e adicionando efeitos visuais
          </p>
          <a href="https://youtu.be/mZIHCbXGJB8" target="_blank">
            <img src={acessarYt} />
          </a>
        </SmallContainer>
        <SmallContainer>
          <img src={aula} />
          <p>
            <b>
              DIA <span>#04</span>
            </b>{" "}
            – Resumo dos conteúdos + uma surpresa exclusiva
          </p>
          <a href="https://youtu.be/7OLdbfe_NOg" target="_blank">
            <img src={acessarYt} />
          </a>
        </SmallContainer>
      </SmallContainers>

      <SmallContainers>
        <MediumContainer>
          <Subtitle>
            3º Passo
            <br />
            …acessar os bastidores do evento e obter conteúdo extra conhecendo a
            Kenzie Academy brasil.
          </Subtitle>
          <p className="description">
            Quer participar do aquecimento das aulas e bastidores para a{" "}
            <b>Imersão HTML e CSS</b>? Então acesse, siga, e envie uma mensagem
            para
            <b> @KenzieAcademyBrasil</b> no Instagram.
          </p>
          <Button color="purple">@KenzieAcademyBrasil</Button>
        </MediumContainer>
        <MediumContainer>
          <Subtitle>
            4º Passo
            <br />
            …e que tal Convidar 1 amigo para o evento?
          </Subtitle>
          <p className="description">
            Você pode convidar seus amigos, sócios e familiares através do
            WhatsApp para assistirem às aulas da Imersão <b>HTML e CSS</b> junto
            com você utilizando o botão abaixo.
          </p>
          <Button color="green">
            <img src={whatsapp} />
            Convidar amigo
          </Button>
        </MediumContainer>
      </SmallContainers>

      <HashtagSection />
      <Footer
        logo={logo}
        copyrights="&copy; 2020 Kenzie Academy. All rights reserved."
      />
    </Page>
  );
};

export default ThankYou;
