import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/home";
import Deschamps from "../pages/deschamps";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/filipedeschamps">
          <Deschamps />
        </Route>

        <Route
          exact
          path="/obrigado"
          render={() => {
            setTimeout(
              () => (window.location = "https://curso-html-css.joinzap.app/"),
              2000
            );
          }}
        />
      </Switch>
    </>
  );
};

export default Router;
