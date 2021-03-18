import { StyledBlock, MainDiv } from "./styles";

const CountdownRendererFive = ({
  days,
  hours,
  minutes,
  seconds,
  completed
}) => {
  return (
    <MainDiv>
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

export default CountdownRendererFive;
