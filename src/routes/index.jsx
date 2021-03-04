import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/home/index";
import ThankYouPage from "../pages/typ";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
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
