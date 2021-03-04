import { Appbar, YoutubeIcon, YoutubeContainer } from "./styles";
import Countdown from "react-countdown";
import CountdownRenderer from "../countdown";

const HeaderAppbar = () => {
  return (
    <Appbar>
      <span>22, 23, 24 e 25 de Março às 19h</span>
      <YoutubeContainer>
        <YoutubeIcon />
        100% ONLINE E GRATUITO
      </YoutubeContainer>
      <Countdown
        date={new Date("March 22, 2021 19:00:00")}
        renderer={CountdownRenderer}
      />
    </Appbar>
  );
};

export default HeaderAppbar;
