import { Page, Text1, Text2, Social } from "./styles";
import Footer from "../../components/footer";
import logo from "../../components/assets/img/logo/logo.svg";
import HashtagSection from "../../components/hashtag-section";

import facebook from "../../components/assets/img/icons/facebook.svg";
import instagram from "../../components/assets/img/icons/instagram.svg";
import linkedin from "../../components/assets/img/icons/linkedin.svg";
import youtube from "../../components/assets/img/icons/square-youtube.svg";
import tiktok from "../../components/assets/img/icons/tiktok.png";

const ClosedPage = () => {
  return (
    <Page>
      <Text1>Inscrições encerradas!</Text1>
      <Text2>
        Siga a Kenzie nas redes sociais para não perder nenhuma oportunidade
        igual a essa ;)
      </Text2>
      <Social>
        <a
          href="https://www.facebook.com/kenzieacademybr/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} />
        </a>

        <a
          href="https://www.instagram.com/kenzieacademybr/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} />
        </a>

        <a
          href="https://www.linkedin.com/school/kenzie-academy-brasil/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} />
        </a>

        <a
          href="https://www.youtube.com/channel/UC6rcCbDzhVoIm1V7WnwPDIQ?sub_confirmation=1"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtube} />
        </a>

        <a
          href="https://www.tiktok.com/@kenzieacademy_br"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tiktok} />
        </a>
      </Social>
      <HashtagSection />
      <Footer
        logo={logo}
        copyrights="&copy; 2020 Kenzie Academy. All rights reserved."
      />
    </Page>
  );
};

export default ClosedPage;
