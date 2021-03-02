import { StyledBlock, MainDiv } from "./styles";

const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <MainDiv>
      <StyledBlock>
        <span className="number">{days}</span>
        <span className="text">Dias</span>
      </StyledBlock>
      <StyledBlock>
        <span className="number">{hours}</span>
        <span className="text">Horas</span>
      </StyledBlock>
      <StyledBlock>
        <span className="number">{minutes}</span>
        <span className="text">Minutos</span>
      </StyledBlock>
      <StyledBlock>
        <span className="number">{seconds}</span>
        <span className="text">Segundos</span>
      </StyledBlock>
    </MainDiv>
  );
};

export default CountdownRenderer;
