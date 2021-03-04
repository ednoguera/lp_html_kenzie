import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/home/index";
import ThankYouPage from "../pages/typ";

const ActiveCampaign = () => {
  useEffect(() => {
    window.dataLayer.push({ event: "active-campaign-form-sent" });
    setTimeout(
      () => (window.location = "https://curso-html-css.joinzap.app/"),
      1000
    );
  }, []);

  return <p></p>;
};

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/obrigado" render={<ActiveCampaign />} />
      </Switch>
    </>
  );
};

export default Router;
