import { useEffect } from "react";
import logo from "../../components/assets/img/logo/logo.svg";
import TagManager from "react-gtm-module";
import Countdown from "react-countdown";
import HashtagSection from "../../components/hashtag-section";
import Footer from "../../components/footer";
import { useHistory } from "react-router-dom";

import {
  Page,
  Title,
  Subtitle,
  SubscribeContainer,
  Button,
  SmallContainer,
  SmallContainers,
  MediumContainer,
  TimeBlock
} from "./styles";
import whatsapp from "../../components/assets/img/social/whatsapp.png";
import youtube from "../../components/assets/img/social/youtube.png";
import aula from "../../components/assets/img/icons/aula.png";
import acessarYt from "../../components/assets/img/social/acessar-yt.svg";

const CountdownFive = ({ minutes, seconds }) => {
  return (
    <SmallContainers>
      <TimeBlock>
        <p className="number">{minutes}</p>
        <p className="text">Minutos</p>
      </TimeBlock>
      <TimeBlock>
        <p className="number">{seconds}</p>
        <p className="text">Segundos</p>
      </TimeBlock>
    </SmallContainers>
  );
};

const ThankYou = () => {
  const history = useHistory();

  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: { event: "activecampaign-form-sent" }
    });
  });

  return (
    <Page>
      <Title>Sua inscrição está quase concluída!</Title>
      <Countdown date={Date.now() + 300000} renderer={CountdownFive} />
      <Subtitle>COMPLETE SUA INSCRIÇÃO ANTES QUE ACABE O TEMPO!</Subtitle>

      <SubscribeContainer>
        <Subtitle>
          1º Passo - Cadastre-se no nosso grupo VIP no WhatsApp?
        </Subtitle>
        <p className="info">Garanta isso. É importante...</p>
        <Button
          color="green"
          href="https://curso-html-css.joinzap.app/"
          target="_blank"
        >
          <img src={whatsapp} />
          ENTRAR NO GRUPO
        </Button>
      </SubscribeContainer>

      <SubscribeContainer align="right">
        <Subtitle>2º Passo - Inscreva-se no canal do Youtube…</Subtitle>
        <Button
          color="black"
          href="https://www.youtube.com/KenzieAcademyBrasil?sub_confirmation=1"
          target="_blank"
        >
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

      <SubscribeContainer>
        <Subtitle>
          3º Passo: Acabamos de te enviar <span>um e-mail</span> com um bônus e
          acesso às lives de aquecimento.
        </Subtitle>
        <p className="description">
          Verifique sua caixa de entrada ou spam/promoções, mova o e-mail para
          caixa de entrada (se necessário) e já{" "}
          <b>coloque uma estrela amarela neste e-mail</b>. Assim você recebe
          todos os avisos e conteúdos!
        </p>
      </SubscribeContainer>

      <HashtagSection />
      <Footer
        logo={logo}
        copyrights="&copy; 2020 Kenzie Academy. All rights reserved."
      />
    </Page>
  );
};

export default ThankYou;
