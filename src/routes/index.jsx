import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Deschamps from "../pages/deschamps";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/filipedeschamps/:slug">
          <Deschamps />
        </Route>

        <Route
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
