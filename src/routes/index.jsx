import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Deschamps from "../pages/deschamps";
import ThankYou from "../pages/thank-you";

const Router = () => {
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

        <Route
          path="/slack"
          render={() =>
            (window.location.href =
              "https://join.slack.com/t/cursohtmlecss/shared_invite/zt-nz2jonpt-ZRb57QoOuqwIE6Uc6f5ZEw")
          }
        />
      </Switch>
    </>
  );
};

export default Router;
