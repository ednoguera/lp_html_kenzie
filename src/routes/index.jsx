import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Deschamps from "../pages/deschamps";
import ThankYou from "../pages/thank-you";
import ClosedPage from "../pages/closed";
import { isAfter } from "date-fns";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          {isAfter(new Date(), new Date(2021, 2, 22, 19, 0)) ? (
            <ClosedPage />
          ) : (
            <Home />
          )}
        </Route>

        <Route path="/filipedeschamps">
          {isAfter(new Date(), new Date(2021, 2, 22, 19, 0)) ? (
            <ClosedPage />
          ) : (
            <Deschamps />
          )}
        </Route>

        <Route path="/obrigado">
          <ThankYou />
        </Route>

        <Route
          path="/slack"
          render={() =>
            (window.location.href =
              "https://join.slack.com/t/cursohtmlecss/shared_invite/zt-ocm3704h-3DVDiXyxYk2WkByUdrqxxA")
          }
        />
      </Switch>
    </>
  );
};

export default Router;
