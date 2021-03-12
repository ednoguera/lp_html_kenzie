import {
  Background,
  Title,
  StyledBullet,
  BulletsContainer,
  Text,
  Button
} from "./styles";
import { colors } from "../../styles/colors";
import check from "../assets/img/icons/check.png";

const Bullet = ({ children }) => {
  return (
    <StyledBullet>
      <img src={check} />
      {children}
    </StyledBullet>
  );
};

const ContentSection = () => {
  const { orange } = colors;

  const handleClick = () => {
    document.getElementById("email-input").focus();
  };

  return (
    <Background>
      <Title>O que você vai aprender nesse curso:</Title>

      <BulletsContainer>
        <Bullet>
          <Text>
            <b>
              Dia <span style={{ color: orange }}>#01</span>
            </b>{" "}
            - Criando a estrutura de uma página usando <b>HTML5</b>
          </Text>
        </Bullet>

        <Bullet>
          <Text>
            <b>
              Dia <span style={{ color: orange }}>#02</span>
            </b>{" "}
            - Estilizando a página com <b>CSS3</b>
          </Text>
        </Bullet>

        <Bullet>
          <Text>
            <b>
              Dia <span style={{ color: orange }}>#03</span>
            </b>{" "}
            - <b>Colocando mais estilos ainda:</b> adaptando o layout para
            celulares, e adicionando efeitos visuais
          </Text>
        </Bullet>

        <Bullet>
          <Text>
            <b>
              Dia <span style={{ color: orange }}>#04</span>
            </b>{" "}
            - Resumo dos conteúdos{" "}
            <span style={{ color: orange, fontWeight: "bold" }}>+</span> uma
            surpresa exclusiva
          </Text>
        </Bullet>
      </BulletsContainer>

      <Button color={orange} onClick={handleClick}>
        Quero participar agora!
      </Button>
    </Background>
  );
};

export default ContentSection;
