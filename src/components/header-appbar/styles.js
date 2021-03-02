import styled from "styled-components";
import { AiOutlineYoutube } from "react-icons/ai";

export const YoutubeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const YoutubeIcon = styled(AiOutlineYoutube)`
  color: red;
  font-size: 2em;
  margin: 0 1em;
`;

export const Appbar = styled.div`
  width: 100vw;
  background-color: rgb(60, 60, 60);
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  margin: 0;
  border-bottom: 1px solid rgb(123, 123, 123);
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-weight: bold;
  z-index: 10;
`;
