import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Deschamps from "../pages/deschamps";
import ThankYou from "../pages/thank-you";

const Router = ({ dataLayer }) => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/filipedeschamps">
          <Deschamps />
        </Route>

        <Route path="/obrigado">
          <ThankYou />
        </Route>
      </Switch>
    </>
  );
};

export default Router;
