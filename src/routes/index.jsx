import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Deschamps from "../pages/deschamps";
import TagManager from "react-gtm-module";

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

        <Route
          path="/obrigado"
          render={() => {
            TagManager.dataLayer({
              dataLayer: { event: "activecampaign-form-sent" }
            });
            setTimeout(() => {
              window.location = "https://curso-html-css.joinzap.app/";
            }, 2000);
          }}
        />
      </Switch>
    </>
  );
};

export default Router;
