import { Background, Text, Title, Subtitle } from "./styles";
import badge from "../assets/img/banner/badge-deschamps.png";
import useWindowSize from "../../helper/use-window-hook";

const DeschampsBanner = () => {
  const { width } = useWindowSize();

  return (
    <Background>
      {width >= 1024 && <img src={badge} />}
      <Text>
        <Title>
          Se você curte o conteúdo do <span>Deschamps</span>, esta oportunidade
          é pra você!
        </Title>
        {width < 1024 && <img src={badge} />}
        <Subtitle>Dá uma olhada nas informações abaixo.</Subtitle>
      </Text>
    </Background>
  );
};

export default DeschampsBanner;
